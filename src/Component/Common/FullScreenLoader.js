import React, { useContext } from "react";
import { LoaderContext } from "../../context/loader";
import fullscreenloader from "../../Assets/lottie/book-animation-for-loader.json";
import {useLottie} from "lottie-react";

const FullScreenLoader = () => {
  const { loading } = useContext(LoaderContext);
    const options = {
        animationData: fullscreenloader,
        loop: true
    };

    const { View } = useLottie(options);
  return (
    <div className={`ProcessingDiv ${loading ? "" : "hidden"}`}>
      <div className="center-screen">
          {View}
      </div>
    </div>
  );
};

export default FullScreenLoader;
