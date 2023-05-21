import React from 'react';
import loader from "../../Assets/img/loader2.gif";

const ScreenLoader = () => {
    return (
        <div className={`ProcessingDiv `}>
            <div className="center-screen">
                <img className="loader-size" src={loader} alt="Loader" />
            </div>
        </div>
    );
};

export default ScreenLoader;