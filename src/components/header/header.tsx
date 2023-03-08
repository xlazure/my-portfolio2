import { usePage } from "@/context/pageContext";
import { useRouter } from "next/router";
import { useRef } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import style from "./header.module.scss";

interface PagesProps {
  href: string;
  name: string;
}

function Header(): JSX.Element {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const router = useRouter();
  const { setIsRedirecting } = usePage();
  const curr =
    router.pathname.replace("/", "") === undefined
      ? " "
      : router.pathname.replace("/", "");

  // function getHeaderHeight() {
  //   const height =
  //     headerRef.current !== null ? `-${headerRef.current.offsetHeight}px` : "0";

  //   return { top: props.hide ? height : "0" };
  // }

  const pages: PagesProps[] = [
    // { href: "/about", name: "About" },
    { href: "/skills", name: "Skills" },
    { href: "/projects", name: "Projects" },
    { href: "/contact", name: "Contact" },
  ];

  function handleLinkClick(item?: PagesProps): void {
    const itemName =
      item?.name.toLowerCase() === undefined ? "" : item?.name.toLowerCase();
    if (curr === itemName) return;
    setIsRedirecting(true);
    setTimeout(() => {
      router.push(item?.href ? item.href : "/");
    }, 500);
  }

  return (
    <header
      ref={headerRef}
      className={style.headerContainer}
      // style={getHeaderHeight()}
    >
      <div>
        <a
          onClick={() => {
            handleLinkClick();
          }}
        >
          <h1>Portfolio</h1>
        </a>
      </div>
      <nav ref={navRef}>
        {pages.map((item) => {
          return (
            <li key={item.name}>
              <a
                onClick={() => handleLinkClick(item)}
                className={`${
                  item.name.toLowerCase() === curr ? style.activeLink : null
                }`}
              >
                {item.name}
              </a>
            </li>
          );
        })}
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
