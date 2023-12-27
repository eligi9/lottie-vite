import lottie from "@lottiefiles/lottie-player";

const Base = () => {
  return (
    <>
      <lottie-player
        autoplay
        controls
        loop
        mode="normal"
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style="width: 320px"
      ></lottie-player>
    </>
  );
};

export default Base;
