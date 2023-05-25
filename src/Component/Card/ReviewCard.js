import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/useAuth";
import { toast } from "react-toastify";
import axios from "axios";

const ReviewCard = ({ bookId, review }) => {
  const [auth, setAuth] = useAuth();
  const [reviews, setReviews] = useState(review || []);

  useEffect(() => {
    setReviews(review || []);
  }, [review]);

  const handleAddReview = (e) => {
    e.preventDefault();

    if (auth?.token) {
      const reviewText = e.target.reviewInput.value;
      const name = auth.user.firstName + " " + auth.user.lastName;
      const userId = auth.user._id;

      const payload = {
        bookId,
        userId,
        name,
        review: reviewText,
      };

      axios
        .post("/add-review", payload)
        .then((res) => {
          if (res.status === 200) {
            toast.success(<h1 className="capitalize">{res.data.message}</h1>);
            setReviews([...reviews, payload]); // Add the new review to the state
          } else {
            toast.error("Try again");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("You have to login first!");
    }
  };

  return (
    <div>
      <form onSubmit={handleAddReview}>
        <div className="input-group w-full mb-8">
          <input
            type="text"
            name="reviewInput"
            className="form-control w-full border px-4 border-primary"
            placeholder="Comment..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-primary" type="submit" id="button-addon2">
            Add Review
          </button>
        </div>
      </form>

      {reviews.map((reviewItem) => (
        <div className="flex gap-4 mb-4" key={reviewItem._id}>
          <img
            className="w-12 h-12 rounded-full"
            src="https://kalingatv.com/wp-content/uploads/2022/12/lensa-ai-app.jpg"
            alt=""
          />

          <div>
            <div>
              <h4>
                <strong>{reviewItem.name}</strong>
              </h4>
            </div>
            <div>
              <p>{reviewItem.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
