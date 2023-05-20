import React from 'react';
import { useLottie } from "lottie-react";
import error from "../../Assets/lottie/page-not-found-404.json";
import error2 from "../../Assets/lottie/404-page-animation.json";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const options = {
        animationData: error2,
        loop: true
    };

    const { View } = useLottie(options);

    return (
        // <div className="flex flex-col items-center justify-center bg-[#FDE3FD]">
        <div className="flex flex-col items-center justify-center">
            <div className="mb-4">{View}</div>
            <div className="mb-4">
                <Link to="/" className="btn btn-primary btn-lg">
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
