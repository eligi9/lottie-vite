import React, { useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import Animation from "../assets/Schwebeball.json";


/**
 * @throws Error: handleLoad is not called through event "load"
 * Try -> componentDidMount
 */
const Click = () => {
  const clickRef = useRef<any>(null);

  useEffect(() => {
    const handleLoad = () => {
      create({
        mode: "cursor",
        player: "#clickLottie",
        actions: [
          {
            type: "click",
            forceFlag: false,
          },
        ],
      });
      console.log("Lottie loaded");
    };

    handleLoad();

    /*
    // Füge den Event Listener für das Load-Ereignis hinzu
    
    if (clickRef.current) {
      clickRef.current.addEventListener("load", handleLoad);
    }

    // Aufräumen: Entferne den Event Listener, wenn die Komponente unmontiert wird
    return () => {
      if (clickRef.current) {
        clickRef.current.removeEventListener("load", handleLoad);
      }
    };
    */
  }, []);

  return (
    <div onClick={() => {}}>
      <lottie-player
        ref={clickRef}
        id="clickLottie"
        src={JSON.stringify(Animation)}
        style={{ width: "600px", height: "600px" }}
      ></lottie-player>
    </div>
  );
};

export default Click;
