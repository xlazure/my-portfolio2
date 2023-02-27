import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./skills.module.scss";
interface Props {
  name: string;
  icon: string;
}

function FetchImage(url: string) {
  const [img, setImg] = useState("");

  useEffect(() => {
    fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "image/svg+xml",
      },
    })
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
        return;
      });
  }, []);

  return (
    <>
      <h2>test</h2>

      <object
        type="image/svg+xml"
        data="https://vg2sbmir.directus.app/assets/750702f0-01d6-4244-bd06-ef98f07fd342"
      ></object>
    </>
  );
}
// https://vg2sbmir.directus.app/assets/750702f0-01d6-4244-bd06-ef98f07fd342
function ShowMySkills({ data }: any): JSX.Element {
  function Item({ name, icon }: Props) {
    const [isHovering, setIsHovering] = useState(false);

    // fetch(`https://vg2sbmir.directus.app/assets/${icon}`, {
    //   method: "GET",
    //   redirect: "follow",
    // })
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
    // FetchImage(`https://vg2sbmir.directus.app/assets/${icon}`);

    return (
      <div
        className={style.item}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* <img
          src={`https://vg2sbmir.directus.app/assets/${icon}`}
          alt=""
          className={style.itemIcon}
          style={{ fill: "red" }}
        /> */}

        {/* <FetchImage url={`https://vg2sbmir.directus.app/assets/${icon}`} /> */}
        <h4>{name}</h4>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.skills}>
        {/* {data.map((el: Props) => (
          <Item key={el.name} {...el} />
        ))} */}
        <FetchImage url="https://vg2sbmir.directus.app/assets/750702f0-01d6-4244-bd06-ef98f07fd342" />
      </div>
    </div>
  );
}

export default ShowMySkills;
