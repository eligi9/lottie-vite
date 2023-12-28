import { useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import Animation from "../assets/Schwebeball.json";

interface HorizontalScrollProps {
  scrollPosition: number;
  parallaxWidth: number;
}

/**
 * @throws Error: handleLoad is not called through event "load"
 * Try -> componentDidMount
 */
const HorizontalScroll = (props: HorizontalScrollProps) => {
  const clickRef = useRef<any>(null);

  const mapValueToRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };
  

  useEffect(() => {
    const handleLoad = () => {

      //console.log(props.scrollPosition)
      /** HORIZONTALER SCROLL
       * Option 1 - LottiInteractive: Man könnte mit redefineOptions() die Animation neu definieren, um sie horizontal scrollbar zu machen
       * Option 2 - LottiPlayer: Man könnte die horizontale scroll position indezieren und auf seek() mappen
       */
      // Option 2
      if (clickRef.current) {
        const normalizedScrollPosition = mapValueToRange(props.scrollPosition, 0, props.parallaxWidth, 0, 100);
        const percentage = `${Math.round(normalizedScrollPosition)}%`;
        console.log(percentage)
        clickRef.current.seek(percentage);
      }

      /*
      create({
        mode: 'scroll',
        player: '#horizonralScrollLottie',
        container: "#relativeContainer",
        actions: [
          {
            visibility: [0, 1],
            type: 'seek',
            frames: [0, 100],
          },
        ],
      });
      */
    };

    handleLoad();
  }, [props.scrollPosition]);

  return (
    <div>
      <lottie-player
        ref={clickRef}
        id="horizonralScrollLottie"
        src={JSON.stringify(Animation)}
        style={{ width: "600px", height: "600px" }}
      ></lottie-player>
      <div id="relativeContainer">
      Only working in y - Scroll Realtive to this containter
      </div>
    </div>
  );
};

export default HorizontalScroll;
