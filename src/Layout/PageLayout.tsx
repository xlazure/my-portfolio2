import style from "./PageLayout.module.scss";

export default function PageLayout(props: any) {
  return (
    <main className={style.Wrapper}>
      {props.header}
      {props.main}
      {/* {props.footer} */}
    </main>
  );
}
