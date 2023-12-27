import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Click from "../Click";
import LottiePlayer from "../Lottie-Player";
import Chain from "../Chain";
import ClickLink from "../ClickLink";

export default function HorizontalParallax() {
  const parallax = useRef<IParallax>(null);
  const clickRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div style={{ background: "#dfdfdf" }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0}>
          <LottiePlayer />
        </ParallaxLayer>

        <ParallaxLayer offset={1.5}>
          <Click/>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <ClickLink/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
