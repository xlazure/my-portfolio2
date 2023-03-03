import { Console } from "console";
import Image from "next/image";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import style from "./skills.module.scss";
interface Props {
  name: string;
  icon: number;
  query: string;
}

// https://vg2sbmir.directus.app/assets/750702f0-01d6-4244-bd06-ef98f07fd342
function ShowMySkills({ data }: any): JSX.Element {
  const router = useRouter();
  const Languages = data.languages;
  const FrameworksAndLibraries = data.frameworksAndLibraries;
  const DatabaseAndCms = data.databaseAndCms;

  async function FetchImage(id: number): Promise<string> {
    const ASSET_URL = `http://localhost:8888/cms/wp-json/wp/v2/media/${id}`;
    const res = await fetch(ASSET_URL, { method: "GET" });
    const imgUrl = await res.json();

    return imgUrl.guid.rendered;
  }

  function Item({ name, icon, query }: Props) {
    const [isHovering, setIsHovering] = useState(false);
    const [imgUrl, setImgUrl] = useState<string>("");

    useEffect(() => {
      FetchImage(icon).then((res) => setImgUrl(res));
    }, []);

    function showProject() {
      router.push(`/projects?query=${query}`);
    }

    return (
      <div
        onClick={showProject}
        className={style.item}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {imgUrl.length < 1 ? "Loading..." : <img src={imgUrl} alt="" />}
        <h4>{name}</h4>
      </div>
    );
  }

  return (
    <div className={style.wrapper}>
      {/* langs */}
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
