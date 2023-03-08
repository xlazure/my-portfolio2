import TextTypingAnimation from "@/components/home/textTypingAnimation";
import { useEffect, useState } from "react";
import style from "./entrySection.module.scss";

export default function EntrySection() {
  const [currentText, setCurrentText] = useState<string[]>([]);
  const greeting: string[] = [
    "Jestem frontend deweloperem z zamiłowaniem do tworzenia pięknych i funkcjonalnych stron internetowych. Moje zainteresowanie programowaniem zaczęło się już w szkole średniej, a studia informatyczne były naturalnym wyborem. Obecnie pracuję nad różnorodnymi projektami, staram się rozwijać swoje umiejętności i być na bieżąco z nowinkami w branży IT.",
    "Moje portfolio zawiera projekty, na których pracowałem w przeszłości. Specjalizuję się w tworzeniu responsywnych stron internetowych, które wykorzystują najnowsze technologie, takie jak HTML, CSS, JavaScript i React. Staram się tworzyć interaktywne aplikacje internetowe, które są nie tylko estetyczne, ale również łatwe w obsłudze i funkcjonalne.",
    "Poza pracą, programowanie jest również moim hobby. Staram się nieustannie rozwijać swoje umiejętności i wiedzę, uczestnicząc w szkoleniach i konferencjach. Lubię dzielić się swoją wiedzą z innymi, dlatego chętnie udzielam pomocy innym programistom, którzy dopiero zaczynają swoją przygodę z frontendem. Dzięki swojemu wykształceniu oraz doświadczeniu zawodowemu, jestem przekonany, że jestem w stanie dostarczyć najlepsze rozwiązania dla Twojego projektu.",
  ];

  useEffect(() => {
    let index = -1;
    console.log(greeting.length);
    const addText = setInterval(() => {
      console.log(index);
      index++;
      setCurrentText((prevArray: Array<string>) => [
        ...prevArray,
        greeting[index],
      ]);
      console.log(currentText);

      if (index === greeting.length - 1) {
        clearInterval(addText);
        return;
      }
    }, 2500);

    return () => clearInterval(addText);
  }, []);

  return (
    <div id="entrySection" className={style.container}>
      <div className={style.introduce}>
        <h2>Hello world!</h2>
        {currentText.map((text: string, index: number) => (
          <p
            className={style.introduceText}
            key={index}
            data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
