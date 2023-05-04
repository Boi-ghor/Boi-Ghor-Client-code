import React from "react";
import Hero from "../../Component/HomePage/Hero";
import PopularBooks from "../../Component/HomePage/PopularBooks";
import TopAuthors from "../../Component/HomePage/TopAuthors";
import NewBooks from "../../Component/HomePage/NewBooks";
import TopPublishers from "../../Component/HomePage/TopPublishers";

const HomePage = () => {
  return (
    <div>
      <Hero></Hero>

      <PopularBooks />
      <NewBooks />
      <TopAuthors />
      <TopPublishers />
    </div>
  );
};

export default HomePage;
