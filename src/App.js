// App.js
import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Acerca from "./components/Acerca";
import Menu from "./components/Menu";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Acerca />
      </motion.div>
      <hr className="divider" /> {/* Línea divisoria después de Acerca */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Menu />
      </motion.div>
      <hr className="divider" /> {/* Línea divisoria después de Menú */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Contacto />
      </motion.div>
      <hr className="divider" /> {/* Línea divisoria después de Contacto */}
      <Footer />
    </>
  );
}

export default App;
