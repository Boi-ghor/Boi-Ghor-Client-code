import React, { useContext } from "react";
import loader from "../../Assets/img/loader2.gif";
import { LoaderContext } from "../../context/loader";

const FullScreenLoader = () => {
  const { loading } = useContext(LoaderContext);

  return (
    <div className={`ProcessingDiv ${loading ? "" : "hidden"}`}>
      <div className="center-screen">
        <img className="loader-size" src={loader} alt="Loader" />
      </div>
    </div>
  );
};

export default FullScreenLoader;
