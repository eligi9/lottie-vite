import { useEffect, useRef} from "react";
import "@lottiefiles/lottie-player";

interface HorizontalScrollProps {
  scrollPosition: number;
  containerWidth: number;
  animationData: string;
  id: string;
  start: number;
  duration: number;
}

/**
 * @throws Error: handleLoad is not called through event "load"
 * Try -> componentDidMount
 */
const HorizontalScroll = (props: HorizontalScrollProps) => {
  const playerRef = useRef<any>(null);
  const totalFrames = useRef<number>(0);
  const playProps = useRef<any>(null);
  const playerMiddle = useRef<number>(0);
  const offsetStart = useRef<number>(window.innerWidth * props.start);
  const offsetEnd = useRef<number>(
    window.innerWidth * (1 - (props.start + props.duration))
  );

  const getSeekFrame = (scrollPosition: number): number => {
    if (playerIsVisible(scrollPosition)) {
      let seekFrame =
        (scrollPosition - (playerMiddle.current + offsetStart.current - window.innerWidth)) /
        (window.innerWidth * props.duration);
      return Math.round(seekFrame * totalFrames.current);
    } else {
      return 0;
    }
  };

  const playerIsVisible = (scrollPosition: number): boolean => {
    if (
      scrollPosition + window.innerWidth > playerMiddle.current + offsetStart.current &&
      scrollPosition <= Math.abs(playerMiddle.current - offsetEnd.current)
    ) {
      console.log("playerIsVisible");
      return true;
    } else {
      console.log("playerIsNotVisible");
      return false;
    }
  };

  useEffect(() => {

    //store Frame Count of the Animation in totalFrames
    totalFrames.current = playerRef.current.getLottie().totalFrames;

    //get the offset of the player and BoundingProps
    let player = document.getElementById(props.id);
    if (player) {
      playProps.current = player.getBoundingClientRect();
      playerMiddle.current = playProps.current.x + playProps.current.width / 2;
      if (playerMiddle.current > window.innerWidth) {
        playerRef.current.seek(1);
      }
    }
  }, [props.containerWidth]);

  //Seek to the frame of the animation that is relative to the scroll position
  useEffect(() => {
    const handleLoad = () => {
      if (playerRef.current) {
        let seekFrame = getSeekFrame(props.scrollPosition);
        console.log("MySEEK: " + seekFrame);
        playerRef.current.seek(seekFrame);
      }
    };

    handleLoad();
  }, [props.scrollPosition]);

  return (
    <lottie-player
      ref={playerRef}
      id={props.id}
      src={props.animationData}
      style={{ width: "600px", height: "600px" }}
    ></lottie-player>
  );
};

export default HorizontalScroll;
