import style from "./contact.module.scss";
import {FormEvent} from "react";
export default function ContactForm() {

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('sent contact form')
  }

  return (
    <div className={style.container}>
      <p>
        Chętnie wysłucham Twoich pomysłów i odpowiem na wszelkie pytania.
        Skontaktuj się ze mną poprzez formularz kontaktowy lub bezpośrednio na
        mój adres e-mail. Czekam na wiadomość od Ciebie!
      </p>

      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formInputs}>
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="subject" placeholder="Temat" />
        </div>
        <textarea name="message"></textarea>
        <div className={style.agreement}>
          <input type="checkbox" name="agree" id="agree" />
          <label htmlFor="agree">
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
            rozporządzeniem o ochronie danych osobowych
          </label>
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}
