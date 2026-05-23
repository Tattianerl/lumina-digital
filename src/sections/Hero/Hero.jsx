import { motion } from "framer-motion";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>

          <motion.div 
            className={styles.content}

            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
           >
            <span className={styles.badge}>
              Soluções digitais para negócios
            </span>

            <h1>
              Criamos experiências digitais modernas para sua empresa
            </h1>

            <p>
              Desenvolvemos landing pages profissionais, responsivas e
              otimizadas para destacar sua marca e aumentar sua presença online.
            </p>

            <div className={styles.actions}>
              <a href="#contact" className={styles.primaryButton}>
                Solicitar orçamento
              </a>

              <a href="#services" className={styles.secondaryButton}>
                Ver serviços
              </a>
            </div>
         </motion.div>

          <div className={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
             alt="Profissional desenvolvendo soluções digitais modernas em um notebook"
            />
          </div>

        </div>
      </section>
    </main>
  );
}

export default Hero;