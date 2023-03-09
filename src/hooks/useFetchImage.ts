import { useEffect, useState } from "react";

interface StateProps {
  loading: boolean;
  uri: string;
}

export function useFetchImage(id: string | number) {
  const [state, setState] = useState<StateProps>({
    loading:true,
    uri:""
  });

  async function fetchImg() {
   try {
     const API = `https://my-cms.vipserv.org/wp-json/wp/v2/media/${id}`;
     const res = await fetch(API, {
       method: "GET",
     });
     const data = await res.json();
     return data.guid.rendered;
   } catch {
     return "https://placehold.jp/30/c3c3c3/ffffff/300x150.png?text=no+image"
   }
  }

  useEffect(() => {
    fetchImg().then((res) => setState({
      loading: !state.loading,
      uri: res
    }));
  }, [id]);

  return state;
}
