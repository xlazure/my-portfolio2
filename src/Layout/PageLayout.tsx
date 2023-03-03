import { usePage } from "@/context/pageContext";
import { useLayoutEffect, useEffect } from "react";
import style from "./PageLayout.module.scss";

export default function PageLayout(props: any) {
  const { isRedirecting, setIsRedirecting } = usePage();

  const customStyles = {
    transition: "all .35s ease-in-out",
    opacity: isRedirecting ? "0" : "1",
    height: "100%",
  };

  useEffect(() => {
    if (!isRedirecting) return;
    setTimeout(() => {
      setIsRedirecting(false);
    }, 1500);
  }, [isRedirecting]);

  return (
    <>
      <main className={style.Wrapper}>
        {props.header}
        <div className={style.container} style={customStyles}>
          {props.main}
        </div>
        {/* {props.footer} */}
      </main>
    </>
  );
}
