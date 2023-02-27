import { usePage } from "@/context/pageContext";
import { useLayoutEffect, useState } from "react";
import style from "./PageLayout.module.scss";

export default function PageLayout(props: any) {
  const { isRedirecting, setIsRedirecting } = usePage();

  const customStyles = {
    transition: "all .45s ease-in-out",
    opacity: isRedirecting ? "0" : "1",
  };

  useLayoutEffect(() => {
    console.log("load end");
    setTimeout(() => {
      setIsRedirecting(false);
    }, 1000);
  }, [isRedirecting]);

  return (
    <>
      <main className={style.Wrapper}>
        {props.header}
        <div style={customStyles}>{props.main}</div>
        {/* {props.footer} */}
      </main>
    </>
  );
}
