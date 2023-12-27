import { useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import Animation from "../assets/Schwebeball.json";

const Scroll = () => {
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("load");
      create({
        player: "#scrollLottie",
        mode: "scroll",
        actions: [
          {
            visibility: [0.3, 1],
            type: "seek",
            frames: [0, 180],
          },
        ],
      });
    }, 0);
  }, []);

  return (
    <lottie-player
      ref={myRef}
      id="scrollLottie"
      src={JSON.stringify(Animation)}
      style={{ width: "600px", height: "600px" }}
    ></lottie-player>
  );
};

export default Scroll;
