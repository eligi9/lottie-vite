import { useLottie, InteractivityProps } from "lottie-react";
import Lottie from "lottie-react";
import Animation from "../assets/Rakete-hebt-ab_V1.json";


const Example = () => {
  /*
  const options = {
    animationData: likeButton,
  };
  const lottieObj = useLottie(options);
*/
  const style = {
    height: 800,
    width: 800,
  };

  const options = {
    animationData: Animation,
  };

  const lottieObj = useLottie(options);

  const interactivity: InteractivityProps = {
    lottieObj: lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.5],
        type: "loop",
        frames: [1],
      },

      {
        visibility: [0.5, 0.7],
        type: "seek",
        frames: [0, 135],
      },
    ],
  };

  console.log(options);

  return (
    <>
      <Lottie
        animationData={Animation}
        style={style}
        interactivity={interactivity}
      />
    </>
  );
};

export default Example;
