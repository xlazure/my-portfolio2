import style from "./contact.module.scss";
export default function ContactForm() {
  return (
    <div className={style.container}>
      <p>
        Chętnie wysłucham Twoich pomysłów i odpowiem na wszelkie pytania.
        Skontaktuj się ze mną poprzez formularz kontaktowy lub bezpośrednio na
        mój adres e-mail. Czekam na wiadomość od Ciebie!
      </p>

      <form className={style.form}>
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
