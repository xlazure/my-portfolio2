import { useEffect, useState } from "react";

export default function ShowMySkills() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const api = "http://localhost:1337/api/skills";
      const res = await fetch(api);
      const resData = await res.json();
      console.log(resData.data);
    }
    fetchData();
  }, []);

  return <div>TEST</div>;
}

// export async function getStaticProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
