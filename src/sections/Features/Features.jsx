import styles from "./Features.module.css";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaBolt,
  FaHeadset,
} from "react-icons/fa";

import FeatureCard from "../../components/FeatureCard/FeatureCard";

function Features() {

  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Código Organizado",

      description:
        "Projetos desenvolvidos com foco em boas práticas, manutenção e escalabilidade.",
    },

    {
      icon: <FaMobileAlt />,
      title: "Responsividade",

      description:
        "Interfaces adaptadas para desktop, tablet e celular com ótima experiência visual.",
    },

    {
      icon: <FaBolt />,
      title: "Performance",

      description:
        "Landing pages rápidas e otimizadas para melhorar carregamento e navegação.",
    },

    {
      icon: <FaHeadset />,
      title: "Suporte",

      description:
        "Acompanhamento e suporte para ajustes e melhorias após a entrega do projeto.",
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">

        <div className={styles.header}>
          <span>Diferenciais</span>

          <h2>
            Por que escolher nossos serviços
          </h2>

          <p>
            Desenvolvemos soluções modernas com foco em
            experiência, qualidade e presença digital.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;