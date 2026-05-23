import styles from "./CTA.module.css";

function CTA() {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.ctaContainer}`}>

        <div className={styles.content}>
          <span>Vamos trabalhar juntos</span>

          <h2>
            Sua presença digital começa com um projeto profissional
          </h2>

          <p>
            Desenvolvemos landing pages modernas, responsivas e
            estratégicas para destacar sua marca na internet.
          </p>

          <a
            href="https://wa.me/5500000000000"
            className={styles.button}
          >
            Solicitar orçamento
          </a>
        </div>

      </div>
    </section>
  );
}

export default CTA;