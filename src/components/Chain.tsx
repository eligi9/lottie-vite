import { useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import Animation from "../assets/markers.json";

const Chain = () => {
  //@myRef is a reference to the lottie-player element
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      create({
        player: "#zelle",
        mode: "chain",
        actions: [
          {
            state: "loop",
            transition: "click",
            frames: "start",
          },

          {
            state: 'autoplay',
            transition: 'onComplete',
            frames: 'rect',
            jumpTo: "0",

          }
        ],
      });
    }, 0);
  }, []);


  return (

    <lottie-player
      ref={myRef}
      id="zelle"
      src={JSON.stringify(Animation)}
      style={{ width: "600px", height: "600px"}}
    ></lottie-player>
  );
};

export default Chain;
