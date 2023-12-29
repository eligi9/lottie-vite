import { useEffect, useRef} from "react";
import "@lottiefiles/lottie-player";

interface HorizontalScrollProps {
  scrollPos: number;
  animData: string;
  id: string;
  start: number;
  duration: number;
  width?: string;
  height?: string;
}

const HorizontalScroll = (props: HorizontalScrollProps) => {
  const playerRef = useRef<any>(null);
  const totalFrames = useRef<number>(0);
  const playerMiddle = useRef<number>(0);
  const animationStart = useRef<number>(0);
  const animationEnd = useRef<number>(0);

  const getAnimationStart = (): number => {
    return playerMiddle.current - window.innerWidth * (1 - props.start);
  };

  const getAnimationEnd = (): number => {
    return  getAnimationStart() + window.innerWidth * (props.duration);
  };

  const getSeekFrame = (scrollPosition: number): number => {

    if (inAnimationRange(scrollPosition)) {
      let seekFrame = (scrollPosition - animationStart.current) /(getAnimationEnd() - animationStart.current);
      return Math.round(seekFrame * totalFrames.current);

    } else {
      return 0;
    }
  };

  const inAnimationRange= (scrollPosition: number): boolean => {
    if (scrollPosition >= animationStart.current && scrollPosition <= animationEnd.current) {
      return true;
    } else {
      return false;
    }
  };

  const initalizePlayerProps = () => {

     //store Frame Count of the Animation in totalFrames
    totalFrames.current = playerRef.current.getLottie().totalFrames;

    //get the Player Middle
    let player = document.getElementById(props.id);
    if (player) {
      playerMiddle.current = player.getBoundingClientRect().x + player.getBoundingClientRect().width / 2;
      animationStart.current = getAnimationStart();
      animationEnd.current = getAnimationEnd();
    }
    console.log(getAnimationEnd())
    console.log(getAnimationStart())


  }

  useEffect(() => {
    setTimeout(() => {
        initalizePlayerProps(); 
    }, 10);
  }, []);

  //Seek to the frame of the animation that is relative to the scroll position
  useEffect(() => {
      if (playerRef.current) {
        let seekFrame = getSeekFrame(props.scrollPos);
        playerRef.current.seek(seekFrame);
      }

  }, [props.scrollPos]);

  return (
    <lottie-player
      ref={playerRef}
      id={props.id}
      src={props.animData}
      style={{ width: props.width, height: props.height }}
    ></lottie-player>
  );
};

export default HorizontalScroll;
