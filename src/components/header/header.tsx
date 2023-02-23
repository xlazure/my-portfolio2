import { withToggleHeader } from "@/hoc/withToggleHeader";
import { useRef } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import style from "./header.module.scss";

interface HeaderProps {
  hide: boolean;
}

function Header(props: HeaderProps) {
  const headerRef = useRef(null);
  const navRef = useRef(null);

  function getHeaderHeight() {
    const height =
      headerRef.current !== null ? `-${headerRef.current.offsetHeight}px` : "0";

    return { top: props.hide ? height : "0" };
  }

  return (
    <header
      ref={headerRef}
      className={style.headerContainer}
      style={getHeaderHeight()}
    >
      <nav ref={navRef}>
        <li>
          <a href="#aboutSection">About</a>
        </li>
        <li>
          <a href="#skillsSection">Skills</a>
        </li>
        <li>
          <a href="#projectsSection">Projects</a>
        </li>
        <li>
          <a href="#contactSection">Contact</a>
        </li>
      </nav>

      <div className={style.options}>
        <div className={style.social}>
          <a href="https://www.linkedin.com/in/xlazure/" target="_blank">
            <AiFillLinkedin />
          </a>
        </div>
        <div className={style.social}>
          <a href="https://github.com/xlazure" target="_blank">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </header>
  );
}
export default withToggleHeader(Header);
