import styles from "./PricingCard.module.css";

function PricingCard({
  title,
  price,
  description,
  features,
  featured,
}) {
  return (
    <article
      className={`${styles.card} ${
        featured ? styles.featured : ""
      }`}
    >

      {featured && (
        <span className={styles.badge}>
          Mais popular
        </span>
      )}

      <h3>{title}</h3>

      <strong>{price}</strong>

      <p>{description}</p>

      <ul>
        {features.map((item, index) => (
          <li key={index}>
            ✓ {item}
          </li>
        ))}
      </ul>

      <a href="#contact">
        Solicitar orçamento
      </a>

    </article>
  );
}

export default PricingCard;