import MyProjects from "@/components/MyProjects/MyProjects";
import Head from "next/head";

interface ProjectProps {
  short_desc: string;
  project_name: string;
  link_to_demo: string;
  preview_image: string;
  github: string;
  tags: {
    lang: string;
    query: string;
  };
}

interface ProjectsProps {
  data: ProjectProps[];
}

function Projects({ data }: ProjectsProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>My Projects</title>
      </Head>
      <MyProjects data={data} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const OPTIONS = {
      method: "GET",
    };
    // const API = "https://api.github.com/users/xlazure/repos";
    const API = "http://localhost:8888/cms/wp-json/wp/v2/posts?slug=portfolio";
    const res = await fetch(API, OPTIONS);
    const data = await res.json();
    return {
      props: {
        data: data[0].acf.projects,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
}

export default Projects;
