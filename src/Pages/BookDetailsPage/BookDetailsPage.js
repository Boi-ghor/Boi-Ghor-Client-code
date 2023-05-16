import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar, AiFillCheckCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { MdDangerous } from "react-icons/md";
import { BsFillTagsFill } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import { LoaderContext } from "../../context/loader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import BookCard from "../../Component/Card/BookCard";

const BookDetailsPage = () => {
  const { slug } = useParams();

  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});
  const [activeTab, setActiveTab] = useState(1);

  // Context
  const { isLoading } = useContext(LoaderContext);

  const { bookName, price, quantity, sellCount, description, author, publisher, category } =
    book;

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(books.length / itemsPerSlide);

  const swiperParams = {
    navigation: true,
    pagination: true,
    slidesPerView: 1,
    slidesPerColumn: itemsPerSlide,
    slidesPerColumnFill: "row",
    spaceBetween: 10,
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    if (slug) fetchBook();
  }, [slug]);

  useEffect(() => {
    loadBooks();
  }, []);

  const fetchBook = async () => {
    isLoading(true);
    try {
      const { data } = await axios.get(`/books/${slug}`);
      if (data.length > 0) {
        setBook(data[0]);
        isLoading(false);
      }
    } catch (error) {
      console.error("Error fetching book:", error);
      isLoading(false);
    }
  };

  const loadBooks = async () => {
    isLoading(true);
    try {
      const { data } = await axios.get(`/books`);
      console.log(data);
      setBooks(data);
      isLoading(false);
    } catch (error) {
      console.log(error);
      isLoading(false);
    }
  };

  return (
    <div className="py-16 bg-[#f1f2f4]">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-12 gap-6 shadow-md">
          <div className="col-span-8 xl:col-span-9 bg-white rounded-tl-lg rounded-bl-lg">
            <div className="grid grid-cols-12">
              <div className="col-span-5 xl:col-span-4 p-6">
                <div>
                  <img className="w-full object-cover" src={book?.photoURL} alt={bookName} />
                </div>
              </div>
              <div className="col-span-7 xl:col-span-8 p-6 pl-0">
                <div>
                  <h2 className="capitalize text-2xl mb-1">{bookName}</h2>
                  <p className="text-lg capitalize mb-2">
                    <span>by </span>
                    {author && author.length > 0 ? (
                      <Link
                        to={`/author/${author[0]?._id}`}
                        className="link link-hover link-primary"
                      >
                        {author[0]?.authorName}
                      </Link>
                    ) : null}
                  </p>
                  <p className="text-lg capitalize">
                    <span>Category: </span>
                    {category && category.length > 0 ? (
                      <Link
                        to={`/category/${category[0]?.slug}`}
                        className="link link-hover link-primary"
                      >
                        {category[0]?.name}
                      </Link>
                    ) : null}
                  </p>
                  <h3 className="text-2xl my-6">$ {price}</h3>
                  <p className="flex items-center gap-2 text-lg capitalize mb-3">
                    {sellCount < quantity ? (
                      <>
                        <AiFillCheckCircle size={18} className="text-success text-danger" />
                        {`In Stock(${quantity - sellCount})`}
                      </>
                    ) : (
                      <>
                        <MdDangerous size={18} className="text-primary" />
                        Out of stock
                      </>
                    )}
                  </p>
                  <p className="flex gap-2 text-success text-[17px] mb-10">
                    <span className="pt-1">
                      <BsFillTagsFill size={18} />
                    </span>
                    {book?.description}
                  </p>
                  <div className="btn-group w-full">
                    <button className="btn w-1/2 gap-1">
                      <IoBagCheckOutline size={20} /> checkout
                    </button>
                    <button className="btn btn-primary w-1/2 gap-1">
                      <AiOutlineShoppingCart size={20} /> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 xl:col-span-3 bg-white relative pb-2">
            <div className="absolute top-4 left-0 z-10 w-full px-4 xl:px-6">
              <h2 className="text-xl text-textColorLight  mb-5">Related Products</h2>
            </div>

            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper5 pt-16 pb-16 xl:pb-12"
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <SwiperSlide className="justify-start items-start text-start" key={slideIndex}>
                  <div className="w-full grid gap-4">
                    {books
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((book) => (
                        <div className="flex gap-3 px-4 xl:px-6" key={book?._id}>
                          <Link to={`/book/${book?.slug}`} className="flex-shrink-0">
                            <img
                              className="w-16 h-full object-cover"
                              src={book?.photoURL}
                              alt={book?.bookName}
                            />
                          </Link>
                          <div>
                            <h4 className="text-[17px]">
                              <Link
                                to={`/book/${book?.slug}`}
                                className="capitalize hover:text-primary duration-200"
                              >
                                {book?.bookName}
                              </Link>
                            </h4>
                            <p className="text-[14px]">
                              by{" "}
                              <Link
                                to={`/author/${book?.author[0]?._id}`}
                                className="capitalize hover:text-primary duration-200"
                              >
                                {book?.author[0]?.authorName}
                              </Link>
                            </p>
                            <div className="text-sm flex items-center my-1 text-orange-400">
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <span className="text-textColorLight ml-1 text-[13px]">
                                ({book?.review.length})
                              </span>
                            </div>
                            <h5 className="font-semibold text-[16px]">
                              Price: ${book?.price}
                            </h5>
                          </div>
                        </div>
                      ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/*  */}
        {/*  */}
        {/*  */}
        <div className="p-6 py-7 bg-white shadow mt-16 rounded-lg">
          <h2 className="text-xl text-textColorLight  mb-5">
            Product Specification & Summary
          </h2>

          <div className="flex border-b border-gray-300">
            <button
              className={`px-4 py-2 focus:outline-none ${
                activeTab === 1
                  ? "text-primary border-x border-t-[3px] border-t-primary rounded-t-lg -mb-[1px] bg-white"
                  : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              Specification
            </button>
            <button
              className={`px-4 py-2 focus:outline-none ${
                activeTab === 2
                  ? "text-primary border-x border-t-[3px] border-t-primary rounded-t-lg -mb-[1px] bg-white"
                  : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              Author
            </button>
            <button
              className={`px-4 py-2 focus:outline-none ${
                activeTab === 3
                  ? "text-primary border-x border-t-[3px] border-t-primary rounded-t-lg -mb-[1px] bg-white"
                  : ""
              }`}
              onClick={() => handleTabClick(3)}
            >
              Publisher
            </button>
          </div>
          <div className="mt-6">
            {activeTab === 1 && (
              <div className="overflow-x-auto">
                <table className="table table-compact w-full capitalize">
                  <tbody>
                    <tr>
                      <td className="text-[16px] py-3">Title</td>
                      <td className="text-[16px] py-3">{bookName}</td>
                    </tr>
                    <tr>
                      <td className="text-[16px] py-3">Category</td>
                      <td className="text-[16px] py-3">
                        {category && (
                          <Link
                            to={`/author/${category[0]?._id}`}
                            className="link link-hover link-primary"
                          >
                            {category[0]?.name}
                          </Link>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[16px] py-3">Author</td>
                      <td className="text-[16px] py-3">
                        {author && (
                          <Link
                            to={`/author/${author[0]?._id}`}
                            className="link link-hover link-primary"
                          >
                            {author[0]?.authorName}
                          </Link>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[16px] py-3">Publisher</td>
                      <td className="text-[16px] py-3">
                        {publisher && (
                          <Link
                            to={`/author/${publisher[0]?._id}`}
                            className="link link-hover link-primary"
                          >
                            {publisher[0]?.publisherName}
                          </Link>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[16px] py-3">Description</td>
                      <td className="text-[16px] py-3">{description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 2 && (
              <div className="flex flex-wrap sm:flex-nowrap gap-6">
                <div className="flex-shrink-0">
                  <Link to={`/author/${author[0]?._id}`} className="inline-block">
                    <img
                      className="w-36 h-36 rounded-full border"
                      src={author[0]?.photoURL}
                      alt={author[0]?.authorName}
                    />
                  </Link>
                </div>
                <div>
                  <h3 className="capitalize text-xl text-textColorLight font-semibold mb-4">
                    {author[0]?.authorName}
                  </h3>
                  <p className="text-lg">{author[0]?.aboutAuthor}</p>
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="flex flex-wrap sm:flex-nowrap gap-6">
                <div className="flex-shrink-0">
                  <Link to={`/publisher/${publisher[0]?._id}`} className="inline-block">
                    <img
                      className="w-36 h-36 rounded-full border"
                      src={publisher[0]?.photoURL}
                      alt={publisher[0]?.publisherName}
                    />
                  </Link>
                </div>
                <div>
                  <h3 className="capitalize text-xl text-textColorLight font-semibold mb-4">
                    {publisher[0]?.publisherName}
                  </h3>
                  <p className="text-lg">{publisher[0]?.aboutPublisher}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
