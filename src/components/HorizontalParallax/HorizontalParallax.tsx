import { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";


import Animation from "../../assets/Schwebeball.json";
import HPara from "./HPara";

export default function HorizontalParallax() {
  //@parallax is the ref for the parallax container
  //@parallaxWidth is an Object containing the width of the parallax container
  //@scrollPosition is the current scroll position of the parallax container
  const parallax = useRef<IParallax>(null);
  const parallaxWidth = useRef<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    if (parallax.current) {
      setScrollPosition(parallax.current.current);
    }
  };

  useEffect(() => {
    const parallaxId = document.getElementById("parallaxId");
    console.log("useEffekt");

    if (parallax.current) {
      parallaxWidth.current = parallax.current.space * 2;
      console.log("parallaxWidth " + parallaxWidth.current);
    }

    if (parallaxId) {
      parallaxId.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (parallaxId) {
        parallaxId.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div style={{ background: "#dfdfdf" }}>
      <Parallax ref={parallax} pages={3} id="parallaxId" horizontal>
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <ParallaxLayer offset={1.4}>
        <HPara
            id="HPara1deded"
            scrollPos={scrollPosition}
            animData={JSON.stringify(Animation)}
            start={0.5}
            duration={2}
            width="300px"
          ></HPara>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <HPara
            id="HPara2deded"
            scrollPos={scrollPosition}
            animData={JSON.stringify(Animation)}
            start={0}
            duration={0.2}
          ></HPara>
        </ParallaxLayer>

        <ParallaxLayer offset={2}></ParallaxLayer>
      </Parallax>
    </div>
  );
}
