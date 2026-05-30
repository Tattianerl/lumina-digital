import styles from "./Services.module.css";
import {motion} from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

function Services() {

  const services = [
    {
      icon: <FaCode />,
      title: "Landing Pages",
      description:
        "Páginas modernas e responsivas desenvolvidas para aumentar sua presença digital.",
    },

    {
      icon: <FaLaptopCode />,
      title: "Sites Profissionais",
      description:
        "Sites institucionais elegantes, rápidos e otimizados para diferentes dispositivos.",
    },

    {
      icon: <FaMobileAlt />,
      title: "Design Responsivo",
      description:
        "Interfaces adaptadas para desktop, tablet e celular com foco em experiência do usuário.",
    },
  ];

  return (
    <motion.section
      id="services"
      className={styles.services}
      initial={{ opacity: 0, y: 50 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.8 }}

      viewport={{ once: true }}
    >
      <div className="container">

        <div className={styles.header}>
          <span>Serviços</span>

          <h2>
            Soluções digitais para o seu negócio
          </h2>

          <p>
            Criamos experiências modernas, funcionais e
            profissionais para fortalecer sua marca online.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </motion.section>
  );
}

export default Services;