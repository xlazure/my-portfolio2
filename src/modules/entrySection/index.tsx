import style from "./entrySection.module.scss";

export default function EntrySection() {
  return (
    <div id="entrySection" className={style.container}>
      <div className={style.overlay}>
        <div className={style.introduce}>
          <h2>Hello world!</h2>
          <button>Show more</button>
        </div>
      </div>
    </div>
  );
}
