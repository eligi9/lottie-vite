import { useRef } from "react";
import "@lottiefiles/lottie-player";
import Animation from "../assets/Rakete-hebt-ab_V1.json";

const Chain = () => {
  const myRef = useRef<HTMLDivElement>(null);


  return (
    <>
      <lottie-player
        ref={myRef}
        id="firstLottie"
        src={JSON.stringify(Animation)}
        style={{ width: "600px", height: "600px" }}
        loop
        autoplay
      ></lottie-player>
    </>
  );
};

export default Chain;
