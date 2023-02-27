import { useLayoutEffect, useState } from "react";
import style from "./loadingScreen.module.scss";

export default function LoadingScreen() {
  const [loadingScreen, setLoadingScreen] = useState<boolean>(true);

  useLayoutEffect(() => {
    setLoadingScreen(false);
  }, []);

  const styles: any = {
    top: loadingScreen ? "0" : "-100%",
  };

  return (
    <div className={style.loadingScreen} style={styles}>
      Loading Screen
    </div>
  );
}
