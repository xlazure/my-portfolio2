import React, { ComponentType, Dispatch, useEffect, useState } from "react";

interface InjectedProps {
  hide: boolean;
  setHide: Dispatch<boolean>;
}

export function withToggleHeader<P extends InjectedProps>(
  WrappedComponent: ComponentType<P>
) {
  const InjectedComponent: React.FC<Omit<P, keyof InjectedProps>> = (props) => {
    const [hide, setHide] = useState(true);

    useEffect(() => {
      function toggleHeader() {
        let scrollPos = 0;
        window.addEventListener("scroll", () => {
          const top = document.body.getBoundingClientRect().top;

          if (top > scrollPos) {
            setHide(false);
          } else setHide(true);

          scrollPos = top;
        });
      }
      return () => toggleHeader();
    }, []);

    return <WrappedComponent {...(props as P)} hide={hide} />;
  };
  return InjectedComponent;
}
