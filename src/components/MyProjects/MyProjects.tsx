import style from "./MyProjects.module.scss";
import { useState } from "react";

export default function MyProjects({ data }: any) {
  console.log(data);
  function Project({ name, html_url }: any) {
    return (
      <div className={style.project}>
        <h4>
          Project:{" "}
          <a href={html_url} target="_blank" rel="noreferrer">
            {name}
          </a>
        </h4>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.projects}>
        {data?.map((item: any) => (
          <Project {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
