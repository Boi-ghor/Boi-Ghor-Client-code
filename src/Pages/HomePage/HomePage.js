import React from 'react';
import Hero from "../../Component/HomePage/Hero";
import PopularBooks from '../../Component/HomePage/PopularBooks';
import TopAuthors from '../../Component/HomePage/TopAuthors';

const HomePage = () => {
    return (
        <div>
           <Hero></Hero>

           <PopularBooks/>
           <TopAuthors/>
        </div>
    );
};

export default HomePage;