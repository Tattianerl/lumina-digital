import styles from "./CTA.module.css";

function CTA() {
  return (
    <section className={styles.cta}>
    
      <div className="container">
        
        <div className={styles.ctaContainer}>
          
        
          <div className={styles.content}>
            <span>Vamos trabalhar juntos</span>

            <h2 className="sectionTitle">
              Sua presença digital começa com um projeto profissional
            </h2>

            <p className="sectionDescription">
              Desenvolvemos landing pages modernas, responsivas e
              estratégicas para destacar sua marca na internet.
            </p>

            <a
              href="https://wa.me/5521998977628"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;