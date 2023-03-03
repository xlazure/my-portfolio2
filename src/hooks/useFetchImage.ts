import { useCallback, useEffect, useState } from "react";

export function useFetchImage(id: string | number) {
  const [state, setState] = useState<any>();

  async function fetchImg() {
    const API = `http://localhost:8888/cms/wp-json/wp/v2/media/${id}`;
    const res = await fetch(API, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    fetchImg().then((res) => setState(res.guid.rendered));
  }, [id]);

  return state;
}
