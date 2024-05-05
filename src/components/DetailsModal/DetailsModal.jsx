//import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { LuMapPin } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";

import css from "./DetailsModal.module.css";
import { useState } from "react";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import { Link } from "react-router-dom";

const DetailsModal = ({ data, onClose }) => {
  const [activeTab, setActiveTab] = useState("features");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  //console.log(data);
  const { name, price, rating, location, description, gallery, reviews } = data;
  return (
    <div className={css.modal}>
      <button className={css.closeBtn}>
        <HiOutlineXMark className={css.closeIcon} onClick={onClose} />
      </button>
      <h2 className={css.name}>{name}</h2>
      <div className={css.locationWrapper}>
        <div className={css.ratingWrapper}>
          <FaStar className={css.starIcon} />
          <p>{rating}</p>
          <p>({reviews.length} Reviews)</p>
        </div>
        <div className={css.location}>
          <LuMapPin />
          <p>{location}</p>
        </div>
      </div>
      <h2 className={css.price}>${price},00</h2>
      <ul className={css.photoList}>
        {gallery.map((photo) => (
          <li className={css.photoItem} key={photo}>
            <img className={css.img} src={photo} alt={name} />
          </li>
        ))}
      </ul>
      <p className={css.description}>{description}</p>
      <div className={css.detailsWrapper}>
        <div className={css.linkWrapper}>
          <Link
            className={activeTab === "features" ? css.active : css.link}
            onClick={() => handleTabChange("features")}
          >
            Features
          </Link>
          <Link
            className={activeTab === "reviews" ? css.active : css.link}
            onClick={() => handleTabChange("reviews")}
          >
            Reviews
          </Link>
        </div>
        {activeTab === "features" && <Features data={data} />}
        {activeTab === "reviews" && <Reviews reviews={reviews} />}
      </div>
    </div>
  );
};
DetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
    adults: PropTypes.number.isRequired,
    engine: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    gallery: PropTypes.array.isRequired,
  }).isRequired,
};
export default DetailsModal;
