import { LottieInteractivity, create } from "@lottiefiles/lottie-interactivity";
import "@lottiefiles/lottie-player";
import { useRef, useEffect } from "react";

export default function Home() {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current);

      ref.current.addEventListener("ready", function (e) {
        create({
          player: "#firstLottie",
          mode: "chain",
          actions: [
            {
              state: "autoplay",
              transition: "onComplete",
            },
            {
              state: "autoplay",
              transition: "onComplete",
              path: "https://assets6.lottiefiles.com/packages/lf20_opn6z1qt.json",
              reset: true,
            },
            {
              state: "autoplay",
              transition: "onComplete",
              path: "https://assets6.lottiefiles.com/packages/lf20_opn6z1qt.json",
              reset: true,
            },
          ],
        });
      });
    }
  }, []);

  return (
    <>
      <h1>lottie player</h1>
      <lottie-player
        ref={ref}
        id="firstLottie"
        mode="normal"
        src="https://assets9.lottiefiles.com/packages/lf20_pKiaUR.json"
        style={{ height: "200px", backgroundColor: "black" }}
      ></lottie-player>
    </>
  );
}
