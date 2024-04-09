// Menu.js
import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/Menu.css";

function Menu() {
  const handleClick = () => {
    // Reemplaza 'tu_enlace' con el enlace deseado
    window.location.href =
      "https://drive.google.com/file/d/17yOH0oGBeH9_8LMMt0okBPdY6t7Is86V/view?usp=drive_link";
  };

  return (
    <motion.section
      id="menu"
      className="menu-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="menu-overlay">
        <Container>
          <div className="menu-content">
            <h2>Menú</h2>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="dark"
                onClick={handleClick}
                className="button-primary"
              >
                Ver Menú
              </Button>
            </motion.div>
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default Menu;
