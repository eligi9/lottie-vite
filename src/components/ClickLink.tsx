import { useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

const ClickLink = () => {
  const myRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      create({
        mode: 'cursor',
        player: '#LinkClick',
        actions: [
          {
            type: "click",
            forceFlag: false,
          },
        ],
      });
      console.log("Linkloaded")
    };

    if (myRef.current) {
      myRef.current.addEventListener('load', handleLoad);

      return () => {
        myRef.current?.removeEventListener('load', handleLoad);
      };
    }
  }, []); // Leeres Array als Abhängigkeitsliste stellt sicher, dass der Effekt nur einmalig nach dem ersten Rendern ausgeführt wird

  return (
      <lottie-player
        ref={myRef}
        id='LinkClick'
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style={{ width: '320px'}}
      ></lottie-player>
  );
};

export default ClickLink;
