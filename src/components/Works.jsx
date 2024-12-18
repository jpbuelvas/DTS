import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import PropTypes from "prop-types";

// Custom utils
import { projects } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deploy_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex flex-col h-full"
    >
      <Tilt
        className="bg-tertiary p-5 rounded-2xl w-full flex flex-col h-full"
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        {/* Imagen con fallback y accesibilidad */}
        {deploy_link ? (
          <button
            aria-label={`Abrir despliegue de ${name}`}
            onClick={() => window.open(deploy_link, "_blank")}
            className="relative w-full h-[230px]"
          >
            <img
              src={image}
              alt={`Imagen del proyecto ${name}`}
              onError={(e) => (e.currentTarget.src = "fallback-image-url.jpg")}
              className="object-cover w-full h-full cursor-pointer rounded-2xl"
            />
          </button>
        ) : (
          <div className="relative w-full h-[230px] bg-gray-200 rounded-2xl flex items-center justify-center">
            <p className="text-gray-500">No Image Available</p>
          </div>
        )}

        {/* Información del proyecto */}
        <div className="flex flex-col mt-5 flex-grow">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="mt-2 text-sm leading-normal text-secondary flex-grow">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <p
                className={`text-sm ${tag.color || "text-gray-500"} capitalize`}
                key={tag.name}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>

        
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ),
  image: PropTypes.string,
  source_code_link: PropTypes.string,
  deploy_link: PropTypes.string,
};

ProjectCard.defaultProps = {
  description: "No hay descripción disponible.",
  tags: [],
  image: "fallback-image-url.jpg",
};

const Works = () => {
  return (
    <>
      {/* Título */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Nuestro Trabajo</p>
        <h2 className={styles.sectionHeadText}>Alcance del servicio</h2>
      </motion.div>

      {/* Descripción */}
      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          En DTS, el alcance de nuestros servicios está diseñado para ofrecer
          soluciones tecnológicas integrales que aborden las necesidades
          específicas de tu negocio, optimizando procesos y facilitando la toma
          de decisiones estratégicas.
        </motion.p>
      </div>

      {/* Sección de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="flex">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
