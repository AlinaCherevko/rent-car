//import React from "react";
import PropTypes from "prop-types";
import BookForm from "../BookForm/BookForm";
import css from "./Reviews.module.css";

function Reviews({ reviews }) {
  console.log(reviews);

  return (
    <div className={css.reviewsContainer}>
      <div className={css.reviewsWrapper}>
        <ul className={css.reviewsList}>
          {Array.isArray(reviews) &&
            reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
              <li key={reviewer_name} className={css.reviewsItem}>
                <div className={css.imgWrapper}>
                  <div className={css.fakeImg}>
                    {reviewer_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className={css.name}>{reviewer_name}</p>
                    <p>{reviewer_rating} rating</p>
                  </div>
                </div>
                <p>{comment}</p>
              </li>
            ))}
        </ul>
      </div>
      <BookForm />
    </div>
  );
}
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default Reviews;
