// Contacto.js
import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Contacto.css"; // Archivo de estilos CSS para el componente

function Contacto() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Cargar el mapa de Google Maps
    if (window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 36.86369079188311, lng: -5.1811329000000015 },
        zoom: 15,
      });

      // Marcador del restaurante
      new window.google.maps.Marker({
        position: { lat: 36.86369079188311, lng: -5.1811329000000015 },
        map: map,
        title: "Restaurante La Pechá",
      });
    }
  }, []);

  return (
    <Container id="contacto">
      <Row>
        <Col md={6}>
          <div>
            <h2>Contacto</h2>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección: Dirección de
              tu restaurante
            </p>
            <hr /> {/* Línea divisoria */}
            <p>
              <FontAwesomeIcon icon={faPhone} /> Teléfono: Tu número de teléfono
            </p>
            <hr /> {/* Línea divisoria */}
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email: Tu dirección de
              correo electrónico
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;
