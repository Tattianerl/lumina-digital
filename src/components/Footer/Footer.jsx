import styles from "./Footer.module.css";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contact"
      className={styles.footer}
    >
      <div className={`container ${styles.footerContainer}`}>

        <div className={styles.brand}>
          <h2>Lumina Digital</h2>

          <p>
            Criamos soluções digitais modernas,
            responsivas e profissionais para
            fortalecer sua presença online.
          </p>
        </div>

        <div className={styles.links}>
          <h3>Navegação</h3>

          <ul>
            <li>
              <a href="#services">Serviços</a>
            </li>

            <li>
              <a href="#about">Sobre</a>
            </li>

            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>

        <div className={styles.social}>
          <h3>Redes sociais</h3>

          <div className={styles.icons}>

            <a 
                href="https://instagram.com/limatati1" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <FaInstagram />
              </a>

            <a 
                href="https://linkedin.com/in/tati-lima85" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <FaLinkedin />
              </a>
            <a 
                href="https://github.com/Tattianerl" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={styles.socialLink}
              >
                <FaGithub />
              </a>
              <a 
                href="https://wa.me/5521998977628" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={styles.socialLink}
              >
                <FaWhatsapp />
              </a>
              

          </div>
        </div>

      </div>

      <div className={styles.copy}>
        <p>
          © 2026 Lumina Digital. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;