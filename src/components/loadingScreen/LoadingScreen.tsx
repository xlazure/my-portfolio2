import { useEffect, useState } from "react";
import style from "./loadingScreen.module.scss";

export default function LoadingScreen() {
  const [loadingScreen, setLoadingScreen] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 1000);
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
