import { useRouter } from "next/router";
import style from "./skills.module.scss";
import { useFetchImage } from "@/hooks/useFetchImage";
interface Props {
  name: string;
  icon: number;
  query: string;
}

function ShowMySkills({ data }: any): JSX.Element {
  const router = useRouter();
  const Languages = data?.languages;
  const FrameworksAndLibraries = data?.frameworksAndLibraries;
  const DatabaseAndCms = data?.databaseAndCms;

  function Item({ name, icon, query }: Props) {
    const img = useFetchImage(icon);
    async function showProject() {
      await router.push(`/projects?query=${query}`);
    }

    return (
      <div onClick={showProject} className={style.item}>
        {img.loading ? (
          "Loading..."
        ) : (
          <img
            className={style.skillImg}
            src={img.uri}
            alt=""
            width={128}
            height={128}
          />
        )}
        <h4>{name}</h4>
      </div>
    );
  }

  return (
    <div className={style.wrapper}>
      {/* languages */}
      <div className={style.skills}>
        {Languages?.map((el: Props) => (
          <Item key={el.name} {...el} />
        ))}
        {/* frameworks and libraries */}

        {FrameworksAndLibraries?.map((el: Props) => (
          <Item key={el.name} {...el} />
        ))}
        {/* database and cms */}
        {DatabaseAndCms?.map((el: Props) => (
          <Item key={el.name} {...el} />
        ))}
      </div>
    </div>
  );
}

export default ShowMySkills;
