//import React from "react";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { LuWind } from "react-icons/lu";

import css from "./CamperItem.module.css";

const CamperItem = ({ data }) => {
  console.log(data);

  const {
    // _id,
    name,
    price,
    rating,
    location,
    adults,
    //children,
    engine,
    transmission,
    //form,
    //length,
    //width,
    //height,
    //tank,
    //consumption,
    //description,
    details,
    gallery,
    reviews,
  } = data;
  return (
    <li className={css.camperItem}>
      <div className={css.imageWrapper}>
        <img className={css.image} src={gallery[0]} alt={name} />
      </div>
      <div className={css.textWrapper}>
        <div className={css.nameWrapper}>
          <div>
            <h2 className={css.name}>{name}</h2>
          </div>
          <div className={css.priceWrapper}>
            <h2 className={css.price}>${price}.00</h2>
            <button className={css.likeBtn}>
              <FaRegHeart className={css.icon} />
            </button>
          </div>
        </div>
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
        <div className={css.descriptionWrapper}>
          <p>The pictures shown here are example vehicles of the respective.</p>
        </div>
        <div className={css.wrapper}>
          <div className={css.buttonsWrapper}>
            <div className={css.adultsWrapper}>
              <LuUsers />
              <span>{adults} adults</span>
            </div>
          </div>
          <div className={css.buttonsWrapper}>
            <div className={css.adultsWrapper}>
              <TbAutomaticGearbox />
              <span>{transmission}</span>
            </div>
          </div>
          <div className={css.buttonsWrapper}>
            <div className={css.adultsWrapper}>
              <MdOutlineLocalGasStation />
              <span>{engine}</span>
            </div>
          </div>
          <div className={css.buttonsWrapper}>
            <div className={css.adultsWrapper}>
              <TbToolsKitchen2 />
              <span>kitchen</span>
            </div>
          </div>
          <div className={css.buttonsWrapper}>
            <div className={css.adultsWrapper}>
              <IoBedOutline />
              <span>{details.beds} beds</span>
            </div>
          </div>
          <div className={css.buttonsWrapper}>
            <div className={css.adultsWrapper}>
              <LuWind />
              <span>AC</span>
            </div>
          </div>
        </div>
        <div>
          <button className={css.btn}>Show more</button>
        </div>
      </div>
    </li>
  );
};
CamperItem.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
    details: PropTypes.object.isRequired,
    adults: PropTypes.number.isRequired,
    engine: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    gallery: PropTypes.array.isRequired,
  }).isRequired,
};

export default CamperItem;
