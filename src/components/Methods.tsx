import Chain from "./Chain";
import Click from "./Click";
import ClickLink from "./ClickLink";
import Scroll from "./Scroll";

const Methods = () => {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "lightgreen",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Click</h1>
      </div>

      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "lightgreen",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>ClickLink</h1>
        <ClickLink />
      </div>

      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "orange",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Chain</h1>
        <Chain />
      </div>

      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "beige",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Scroll</h1>
        <Scroll />
      </div>
    </div>
  );
};

export default Methods;
