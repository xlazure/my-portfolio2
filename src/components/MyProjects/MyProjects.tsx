import style from "./MyProjects.module.scss";
import { useEffect, useState } from "react";
import { useFetchImage } from "@/hooks/useFetchImage";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";

interface ProjectProps {
  short_desc?: string;
  project_name?: string;
  link_to_demo?: string;
  preview_image?: string;
  github?: string;
  tags?: Array<{
    lang?: string;
    query?: string;
  }>;
}

interface ProjectsProps {
  data: ProjectProps[];
}

export default function MyProjects({ data }: any) {
  const router = useRouter();
  console.log(data);
  function Project({
    short_desc,
    project_name,
    link_to_demo,
    preview_image,
    github,
    tags,
  }: any) {
    const [hoverQuery, setHoverQuery] = useState(false);
    const img = useFetchImage(preview_image);

    function matchQuery() {
      const lang: any = router.query;
      const queryMatch = tags.find(
        (item: { query: string }) => item.query === lang.query
      );
      if (queryMatch) setHoverQuery(true);
    }

    useEffect(() => matchQuery, []);

    return (
      <div
        className={`${hoverQuery ? style.highlight : null} ${style.project}`}
      >
        <div className={style.projectName}>
          <h4>{project_name}</h4>
          <span>
            <a href={github} target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
            <a
              href={link_to_demo}
              target="_blank"
              rel="noreferrer"
              title="watch demo"
            >
              <BiLinkExternal />
            </a>
          </span>
        </div>
        <hr />
        <div className={style.content}>
          {img.loading ?  "Loading..." : <Image src={img.uri} alt={project_name} width={256} height={128} />}
          <div
            className={style.description}
            dangerouslySetInnerHTML={{ __html: short_desc }}
          ></div>
        </div>
        <hr />
        <div className={style.tags}>
          {tags.map(({ lang }: { lang: string }) => (
            <li key={lang} className={style.tag}>
              {lang}
            </li>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.projects}>
        {data?.map((item: any, index: number) => (
          <Project {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
