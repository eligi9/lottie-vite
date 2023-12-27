import React, { useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import Animation from "../assets/Schwebeball.json";

const Click = () => {
  const myRef = useRef<any>(null);

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

    // Füge den Event Listener für das Load-Ereignis hinzu
    if (myRef.current) {
      myRef.current.addEventListener("ready", handleLoad);
    }

    // Aufräumen: Entferne den Event Listener, wenn die Komponente unmontiert wird
    return () => {
      if (myRef.current) {
        myRef.current.removeEventListener("ready", handleLoad);
      }
    };
  }, []);

  return (
    <div onClick={() => {}}>
      <lottie-player
        ref={myRef}
        id="clickLottie"
        src={JSON.stringify(Animation)}
        style={{ width: "600px", height: "600px" }}
      ></lottie-player>
    </div>
  );
};

export default Click;
