import { useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

const ClickLink = () => {
  const clickLinkRef = useRef<HTMLElement>(null);
  const prevSrc = useRef

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
      //console.log("Linkloaded")
    };

    if (clickLinkRef.current) {
      clickLinkRef.current.addEventListener('load', handleLoad);

      return () => {
        clickLinkRef.current?.removeEventListener('load', handleLoad);
      };
    }
  }, []); // Leeres Array als Abhängigkeitsliste stellt sicher, dass der Effekt nur einmalig nach dem ersten Rendern ausgeführt wird

  return (
      <lottie-player
        ref={clickLinkRef}
        id='LinkClick'
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style={{ width: '320px'}}
      ></lottie-player>
  );
};

export default ClickLink;
