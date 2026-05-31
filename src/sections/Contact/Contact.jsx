import { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

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

 async function handleSubmit(event) {
  if (
  !formData.name.trim() ||
  !formData.email.trim() ||
  !formData.message.trim()
) {

  setSuccessMessage(
    "Preencha todos os campos."
  );

  return;
}

  event.preventDefault();

  setIsSending(true);

  try {

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,

      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },

      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSuccessMessage(
      "Mensagem enviada com sucesso!"
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {

    setSuccessMessage(
      "Erro ao enviar mensagem."
    );

    console.error(error);

  } finally {

    setIsSending(false);
  }
}

  return (
    <section
      id="contact"
      className={styles.contact}
    >
      <div className="container">

        <div className={styles.header}>
          <span>Contato</span>

           <h2 className="sectionTitle">
            Vamos conversar sobre seu projeto
          </h2>

          <p className="sectionDescription">
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