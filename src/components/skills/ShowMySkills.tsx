import { Console } from "console";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./skills.module.scss";
interface Props {
  name: string;
  icon: number;
}

// https://vg2sbmir.directus.app/assets/750702f0-01d6-4244-bd06-ef98f07fd342
function ShowMySkills({ data }: any): JSX.Element {
  const Languages = data[0].acf.languages;
  const FrameworksAndLibraries = data[0].acf.frameworksAndLibraries;
  const DatabaseAndCms = data[0].acf.databaseAndCms;

  async function FetchImage(id: number): Promise<string> {
    const ASSET_URL = `http://localhost:8888/cms/wp-json/wp/v2/media/${id}`;
    const res = await fetch(ASSET_URL, { method: "GET" });
    const imgUrl = await res.json();

    return imgUrl.guid.rendered;
  }

  function Item({ name, icon }: Props) {
    const [isHovering, setIsHovering] = useState(false);
    const [imgUrl, setImgUrl] = useState<string>("");

    useEffect(() => {
      FetchImage(icon).then((res) => setImgUrl(res));
    }, []);

    return (
      <div
        className={style.item}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {imgUrl.length < 1 ? (
          "Loading..."
        ) : (
          <img src={imgUrl} alt="" width={128} />
        )}
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
