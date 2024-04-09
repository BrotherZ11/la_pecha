// AcercaDe.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Acerca() {
  return (
    <Container id="acerca">
      <Row>
        <Col md={6}>
          <div>
            <h2>Acerca de Nosotros</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              lacinia tellus vitae felis pretium, vel fermentum orci rhoncus.
              Fusce non felis ligula. Duis eget augue ut ipsum tempor interdum.
              Integer at magna non velit tincidunt sodales.
            </p>
            <p>
              Donec non augue nec neque suscipit vulputate. Cras ac bibendum
              nisl, a scelerisque turpis. Donec malesuada bibendum risus, ut
              egestas tortor fermentum eget.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <img
              src="fuera.jpeg"
              alt="Imagen del restaurante"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Acerca;
