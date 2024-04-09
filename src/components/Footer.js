// Footer.js
import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

function Footer() {
  const handleInstagramClick = () => {
    // Reemplaza 'tu_perfil_de_instagram' con tu nombre de perfil de Instagram
    window.open("https://www.instagram.com/_la_pecha/", "_blank");
  };

  return (
    <footer className="footer">
      <Container className="text-center">
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          className="instagram-icon"
          onClick={handleInstagramClick}
        />
        <p>&copy; 2024 Bar La Pechá</p>
      </Container>
    </footer>
  );
}

export default Footer;
