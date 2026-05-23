import styles from "./Footer.module.css";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
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

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaLinkedin />
            </a>

            <a href="/">
              <FaGithub />
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