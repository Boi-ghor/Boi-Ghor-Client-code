import React, { useContext, useEffect, useState } from "react";
import { ImHome } from "react-icons/im";
import { AiFillRead } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import BookCard from "../../Component/Card/BookCard";
import { LoadAll } from "../../ApiRequest/ApiRequest";
import { LoaderContext } from "../../context/loader";

const BookPage = () => {
  const [books, setBooks] = useState([]);
  const [price, setPrice] = useState(500);
  const [showFilterArea, setShowFilterArea] = useState(false);
  const [isListView, setIsListView] = useState(false);

  // Context
  const { isLoading } = useContext(LoaderContext);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    isLoading(true);
    LoadAll("/books")
      .then((data) => {
        setBooks(data);
        isLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleListView = () => {
    setIsListView(!isListView);
  };

  const handleSortBooks = (event) => {
    const selected = event.target.value;

    if (selected === "dateNewToOld") {
      const sortedBooks = [...books].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setBooks(sortedBooks);
      console.log(sortedBooks);
    } else if (selected === "dateOldToNew") {
      const sortedBooks = [...books].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setBooks(sortedBooks);
      console.log(sortedBooks);
    } else if (selected === "featured") {
      const sortedBooks = [...books].sort((a, b) => b.isFeatured - a.isFeatured);
      setBooks(sortedBooks);
      console.log(sortedBooks.map((item) => item.isFeatured));
    } else if (selected === "bestSelling") {
      const sortedBooks = [...books].sort((a, b) => b.sold - a.sold);
      setBooks(sortedBooks);
    } else if (selected === "priceLowToHight") {
      const sortedBooks = [...books].sort((a, b) => a.price - b.price);
      setBooks(sortedBooks);
    } else if (selected === "priceHighToLow") {
      const sortedBooks = [...books].sort((a, b) => b.price - a.price);
      setBooks(sortedBooks);
    } else if (selected === "alphabetically_A_Z") {
      const sortedBooks = [...books].sort((a, b) => a.name.localeCompare(b.name));
      setBooks(sortedBooks);
    } else if (selected === "alphabetically_Z_A") {
      const sortedBooks = [...books].sort((a, b) => b.name.localeCompare(a.name));
      setBooks(sortedBooks);
    }
  };

  return (
    <>
      <div
        className="h-80 relative before:absolute before:content-[''] before:w-full before:h-full before:bg-black before:bg-opacity-60  hidden items-center"
        style={{
          backgroundImage:
            "url(https://www.shutterstock.com/image-vector/stacks-books-reading-pile-textbooks-260nw-1988002235.jpg)",
        }}
      >
        <div className="container mx-auto px-3">
          <div className="bannerContent relative text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold mb-4">
              Discover new worlds between the pages
            </h1>
            <div className="breadcrumbs text-lg">
              <ul>
                <li>
                  <Link>
                    <ImHome />
                    <span className="ms-2">Home</span>
                  </Link>
                </li>
                <li>
                  <AiFillRead />
                  <span className="ms-2">Home</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-3">
          <div className="grid grid-cols-12 gap-10">
            <div
              className={`col-span-3 flex flex-col gap-10 bg-white fixed lg:static top-0 ${
                showFilterArea ? "left-0" : "-left-72"
              } duration-300 w-72 max-w-full lg:w-full h-screen lg:h-full overflow-y-auto px-4 py-6 lg:px-0 lg:py-0 shadow-2xl lg:shadow-none`}
            >
              <div>
                <div
                  className="cursor-pointer hover:opacity-70 duration-200 flex justify-end mb-1 lg:hidden"
                  onClick={() => setShowFilterArea(!showFilterArea)}
                >
                  <GrClose size={22} />
                </div>
                <h3 className="font-semibold text-xl mb-2">Sort By</h3>
                <div className="sortOptions">
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="dateNewToOld"
                        defaultChecked
                      />
                      <span>Date, new to old</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="dateOldToNew"
                      />
                      <span>Date, old to new</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="featured"
                      />
                      <span>Featured</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="bestSelling"
                      />
                      <span>Best selling</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="priceLowToHight"
                      />
                      <span>Price, low to high</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="priceHighToLow"
                      />
                      <span>Price, high to low</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="alphabetically_A_Z"
                      />
                      <span>Alphabetically, A-Z</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="alphabetically_Z_A"
                      />
                      <span>Alphabetically, Z-A</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">Category</h3>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Price</h3>
                <div>
                  <div>
                    <Slider
                      min={9.99}
                      max={1500}
                      value={500}
                      onAfterChange={(changedPrice) => setPrice(changedPrice)}
                    />
                    <h4 className="text-primary font-semibold mt-2 flex justify-between">
                      <span>$9.99 - $1500</span>
                      <span>${price}</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    window.location.reload();
                  }}
                  className="btn btn-block btn-primary"
                >
                  Reset All
                </button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-9">
              <div className="border bg-white p-3 rounded-md shadow-md flex justify-between items-center mb-16">
                <p className="text-lg flex items-center gap-2">
                  12 Products
                  <span
                    className="cursor-pointer hover:opacity-70 duration-200 lg:hidden"
                    onClick={() => setShowFilterArea(!showFilterArea)}
                  >
                    <FaFilter />
                  </span>
                </p>
                <div className="flex gap-3">
                  <span
                    onClick={handleListView}
                    className={`${!isListView && "bg-gray-200"} p-2 rounded cursor-pointer`}
                  >
                    <IoGrid size={20} />
                  </span>
                  <span
                    onClick={handleListView}
                    className={`${isListView && "bg-gray-200"} p-2 rounded cursor-pointer`}
                  >
                    <FaList size={20} />
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-14">
                {books.map((book) => {
                  return <BookCard key={book?._id} book={book} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPage;
