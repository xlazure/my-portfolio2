import style from "./PageLayout.module.scss";

export default function PageLayout(props: any) {
  return (
    <main className={style.Wrapper}>
      {props.header}
      {props.firstSection}
      {props.secondSection}
      {/* {props.thirdSection} */}
      {/* {props.fourthSection} */}
      {/* {props.fifthSection} */}
      {/* {props.footer} */}
    </main>
  );
}
