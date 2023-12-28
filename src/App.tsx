import "./App.css";
import Example from "./components/Lottie";
import LottiePlayer from "./components/Lottie-Player";
import HorizontalParallax from "./components/HorizontalParallax/HorizontalParallax";
import Methods from "./components/Methods";

function App() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "green",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Lottie-React</h1>
        <Example />
      </div>

      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Lottie-Interactivity-Player</h1>
        <LottiePlayer />
      </div>

      <div
        style={{ height: "100vh", width: "100vw", backgroundColor: "beige" }}
      >
        <HorizontalParallax />
      </div>
    </>
  );
}

export default App;
