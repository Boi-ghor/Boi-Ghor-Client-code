import React from 'react';
import {Link} from "react-router-dom";

const BlogCard = () => {
    const id='123'
    return (
        <div>
            <div className="card mx-auto pb-5 mb-5" style={{ width: "56rem" }}>
                <h5 style={{fontSize: "2rem", fontWeight: "700"}}>Introduction to JavaScript: For Beginner</h5>
                <img src="https://www.itgeared.com/wp-content/uploads/simple_JavaScript_image_thumbnail_viewer.jpg" style={{ height: "18rem" }} className="card-img-top" alt="..." />
                <div className="card-body">

                    <p style={{fontSize: "14px", fontWeight: "600"}}>Author: Sakib Rahman</p>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur molestias impedit explicabo ab quas, necessitatibus quam qui cumque nam, nesciunt eaque id placeat blanditiis hic magni sit pariatur veritatis dignissimos! Quaerat explicabo dicta illo aperiam, consequatur earum porro ex tempore aliquid, consectetur rerum aliquam iusto similique modi obcaecati cum. Voluptates! Quaerat explicabo dicta illo aperiam, consequatur earum porro ex tempore aliquid, consectetur rerum aliquam iusto similique modi obcaecati cum. Voluptates! </p>
                    <Link to={`/blogs/${id}`} className='text-primary'>Read more</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;