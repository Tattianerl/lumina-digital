import { useState } from "react";
import styles from "./Navbar.module.css";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        
        <a href="/" className={styles.logo}>
          Lumina Digital
        </a>
        <button 
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Fechar menu"
              : "Abrir menu"
          }
        >
          {menuOpen ?  <FaTimes /> : <FaBars />}
        </button>

                <nav
          aria-label="Navegação principal"

          className={
            menuOpen
              ? `${styles.nav} ${styles.active}`
              : styles.nav
          }
        >
          <ul className={styles.navList}>
            <li>
              <a 
               href="#services"
               aria-label="Ir para seção de serviços"
              >Serviços</a>
            </li>

            <li>
              <a href="#about">Sobre</a>
            </li>

            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>

        <a
          href="https://wa.me/5521998977628"
          className={styles.ctaButton}
        >
          Solicitar orçamento
        </a>

      </div>
    </header>
  );
}

export default Navbar;