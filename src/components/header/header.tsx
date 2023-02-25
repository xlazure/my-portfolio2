import { withToggleHeader } from "@/hoc/withToggleHeader";
import Link from "next/link";
import { useRef } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import style from "./header.module.scss";

function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDListElement>(null);

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
export default Header;
