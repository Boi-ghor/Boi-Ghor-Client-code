import React from 'react';
import { Link } from "react-router-dom";
import BlogCard from "../../Component/Card/BlogCard";
//
const InputStyle = {
    width: "92rem",
    border: "solid 1px #ff4157",
    padding: "0px 20px"
}
const array=[1,2,3,4,5]

const Blogs = () => {
    return (
        <div className="px-6 py-8">
            <div className="border-1 px-6 py-8 mx-auto max-w-7xl">
                <div className="mb-8">

                    {
                        array.map(x=> <BlogCard>s</BlogCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Blogs;