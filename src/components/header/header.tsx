import { withToggleHeader } from "@/hoc/withToggleHeader";
import Link from "next/link";
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
      // style={getHeaderHeight()}
    >
      <div>
        <Link href="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <nav ref={navRef}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </nav>

      <div className={style.options}>
        <div className={style.social}>
          <a
            href="https://www.linkedin.com/in/xlazure/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div className={style.social}>
          <a href="https://github.com/xlazure" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
