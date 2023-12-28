import { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Click from "../Click";
import LottiePlayer from "../Lottie-Player";
import Chain from "../Chain";
import ClickLink from "../ClickLink";
import styles from "./styles.module.css";
import HorizontalScroll from "../HorizontalScroll";

export default function HorizontalParallax() {
  const parallax = useRef<IParallax>(null);
  const parallaxWidth = useRef<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  
  const handleScroll = () => {
    if(parallax.current) {
      //console.log(parallax.current)
      setScrollPosition(parallax.current.current)
    }
  };

  useEffect(() => {
    const parallaxId = document.getElementById("parallaxId");

    if(parallax.current) {
      parallaxWidth.current = parallax.current.space*2;
      console.log("parallaxWidth "+parallaxWidth.current)
    }
    
    if(parallaxId) {
      parallaxId.addEventListener('scroll', handleScroll);
    }

    return () => {
      if(parallaxId){
        parallaxId.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div style={{ background: "#dfdfdf" }}>
      <Parallax ref={parallax} pages={3} id="parallaxId" horizontal>
        <div className={styles.container}>
          Test
        </div>
        <ParallaxLayer offset={0}>
          <LottiePlayer />
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <HorizontalScroll scrollPosition={scrollPosition} parallaxWidth={parallaxWidth.current}/>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <Click/>
        </ParallaxLayer>

        <ParallaxLayer offset={3}>
          <ClickLink/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
