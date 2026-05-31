import styles from "./About.module.css";

function About() {
  return (
    <section
      id="about"
      className={styles.about}
    >
      <div className={`container ${styles.aboutContainer}`}>

        <div className={styles.content}>
          <span>Sobre nós</span>

          <h2 className="sectionTitle">
            Transformamos ideias em experiências digitais modernas
          </h2>

           <p>
            Desenvolvemos soluções digitais focadas em design,
            performance e experiência do usuário. Nosso objetivo
            é criar produtos profissionais que fortaleçam marcas
            e gerem resultados reais.
          </p>

          <p>
            Trabalhamos com tecnologias modernas para entregar
            projetos responsivos, elegantes e preparados para
            diferentes dispositivos.
          </p>
        </div>

        <div className={styles.stats}>

          <article className={styles.card}>
            <h3>+120</h3>
            <p>Projetos entregues</p>
          </article>

          <article className={styles.card}>
            <h3>98%</h3>
            <p>Satisfação dos clientes</p>
          </article>

          <article className={styles.card}>
            <h3>24h</h3>
            <p>Suporte rápido</p>
          </article>

          <article className={styles.card}>
            <h3>100%</h3>
            <p>Responsivo</p>
          </article>

        </div>

      </div>
    </section>
  );
}

export default About;