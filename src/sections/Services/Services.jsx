import styles from "./Services.module.css";

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
    <section
      id="services"
      className={styles.services}
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
    </section>
  );
}

export default Services;