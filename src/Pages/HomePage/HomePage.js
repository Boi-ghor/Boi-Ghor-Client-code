import React from 'react';
import Hero from "../../Component/HomePage/Hero";
import PopularBooks from '../../Component/HomePage/PopularBooks';

const HomePage = () => {
    return (
        <div>
           <Hero></Hero>

           <PopularBooks/>
        </div>
    );
};

export default HomePage;