import styles from "./Pricing.module.css";

import PricingCard from "../../components/PricingCard/PricingCard";

function Pricing() {

  const plans = [
    {
      title: "Plano Essencial",
      price: "R$397",

      description:
        "Ideal para profissionais que precisam de uma presença digital moderna.",

      features: [
        "Landing page profissional",
        "Design responsivo",
        "Botão WhatsApp",
        "Layout moderno",
      ],
    },

    {
      title: "Plano Profissional",
      price: "R$597",

      description:
        "Perfeito para negócios que desejam suporte e atualizações.",

      featured: true,

      features: [
        "Tudo do plano essencial",
        "Manutenção mensal",
        "Atualizações simples",
        "Suporte prioritário",
      ],
    },

    {
      title: "Plano Premium",
      price: "R$897",

      description:
        "Solução completa para marcas que precisam de presença digital contínua.",

      features: [
        "Tudo do plano profissional",
        "Atualizações frequentes",
        "Acompanhamento contínuo",
        "Melhorias visuais",
      ],
    },
  ];

  return (
    <section className={styles.pricing}>
      <div className="container">

        <div className={styles.header}>
          <span>Planos</span>

          <h2>
            Escolha a solução ideal para seu negócio
          </h2>

          <p>
            Planos modernos e flexíveis para destacar sua marca
            na internet com profissionalismo.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              featured={plan.featured}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;