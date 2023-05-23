import React from 'react';
import loader2 from "../../Assets/img/loader2.gif"

const InLoader = () => (
    <div className="flex items-center justify-center">
        <img
            src={loader2}
            alt="Loading..."
            className="w-16 h-16 animate-spin"
        />
    </div>
);


export default InLoader;