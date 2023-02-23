import ShowMySkills from "@/components/skills/skills";
import style from "./skillsSection.module.scss";

export default function SkillsSection() {
  return (
    <div id="skillsSection" className={style.container}>
      <ShowMySkills />
    </div>
  );
}
