import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import InfoDialog from "./infoDialog"; // Importar el componente de diálogo

// Custom utils
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, onClick }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        onClick={() => onClick(title)} // Llama al evento al hacer clic
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-px rounded-[20px] shadow-card green-pink-gradient cursor-pointer"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="object-contain w-16 h-16 " />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [openDialog, setOpenDialog] = useState(null); // Maneja el diálogo actual abierto

  const handleDialogOpen = (title) => {
    setOpenDialog(title); // Abrir el diálogo basado en el título
  };

  const handleDialogClose = () => {
    setOpenDialog(null); // Cerrar el diálogo
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Sobre Nosotros</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        En DTS, nos especializamos en brindar soluciones tecnológicas integrales
        a través de servicios de desarrollo de software, ciencia de datos y
        tecnologías avanzadas. Nuestro objetivo es ayudar a las empresas a
        aprovechar el poder de la innovación tecnológica para optimizar sus
        operaciones y alcanzar sus objetivos.
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            onClick={handleDialogOpen} // Pasar evento de clic
          />
        ))}
      </div>

      {/* Diálogo dinámico */}
      {openDialog && (
        <InfoDialog
          open={!!openDialog}
          title={openDialog}
          onClose={handleDialogClose}
        />
      )}
    </>
  );
};

export default SectionWrapper(About, "about");