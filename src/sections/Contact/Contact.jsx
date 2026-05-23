import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [ formData, setFormData] = useState({
    name: "",
    email: "",
    menssage:"",
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {

  const { name, value } = event.target;

  setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
}

  function handleSubmit(event) {

  event.preventDefault();

  setIsSending(true);

  setTimeout(() => {

    setIsSending(false);

    setSuccessMessage(
      "Mensagem enviada com sucesso!"
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  }, 1500);
}

  return (
    <section
      id="contact"
      className={styles.contact}
    >
      <div className="container">

        <div className={styles.header}>
          <span>Contato</span>

          <h2>
            Vamos conversar sobre seu projeto
          </h2>

          <p>
            Entre em contato para solicitar um orçamento
            ou tirar dúvidas sobre nossos serviços.
          </p>
        </div>

        <form
          className={styles.form}
          aria-label="Formulário de contato"
          onSubmit={handleSubmit}
        >

          <div className={styles.inputGroup}>
            <label htmlFor="name">
              Nome
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required

            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">
              E-mail
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">
              Mensagem
            </label>

            <textarea
              id="message"
              name="message"
              value={FormData.menssage}
              onChange={handleChange}
              rows="6"
              placeholder="Conte um pouco sobre seu projeto"
              required
            />
          </div>

          <button 
           type="submit"
           disabled={isSending}>
            {
              isSending ? "Enviando..." : " Enviar mensagem"
            }
           
          </button>
          {
            successMessage && (
              <p className={styles.success}>
                {successMessage}
              </p>
            )
          }

        </form>

      </div>
    </section>
  );
}

export default Contact;