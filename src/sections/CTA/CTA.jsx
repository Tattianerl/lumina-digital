import styles from "./CTA.module.css";

function CTA() {
  return (
    <section className={styles.cta}>
      {/* O container global apenas limita a largura máxima das telas */}
      <div className="container">
        
        {/* O ctaContainer cria o bloco com fundo azul degradê */}
        <div className={styles.ctaContainer}>
          
          {/* O content organiza o texto e o botão verticalmente */}
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