import React from "react";
import PropTypes from "prop-types";
import { Dialog, DialogContent, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import { descriptions } from "../constants/index";


const GlassDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    background: "rgba(25, 20, 35, 0.8)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    padding: theme.spacing(2),
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
  },
}));

const InfoDialog = ({ open, title, onClose }) => {
  return (
    <GlassDialog
      open={open}
      onClose={onClose}
      aria-labelledby="info-dialog-title"
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Typography
          id="info-dialog-title"
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.6,
          }}
        >
          {descriptions[title] ||
            "No hay descripción disponible para este título."}
        </Typography>
      </DialogContent>
    </GlassDialog>
  );
};

InfoDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.oneOf(["Vision", "Mision", "Metas", "Objetivos"]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default InfoDialog;
