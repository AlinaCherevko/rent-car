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
import { useState } from "react";
import Modal from "../Modal/Modal";
import DetailsModal from "../DetailsModal/DetailsModal";

import css from "./CamperItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../store/catalogSlice";
import { favoritesCatalog } from "../../store/catalogSlice.selectors";

const CamperItem = ({ data }) => {
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    details,
    gallery,
    reviews,
  } = data;

  const favorites = useSelector(favoritesCatalog);
  console.log(favorites);

  const isFavorite = favorites.some(({ data }) => data._id === _id);
  console.log(isFavorite);

  //const [isFavorite, setIsFavorite] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const handleLikeClick = () => {
    if (isFavorite === true) {
      dispatch(deleteFavorite(_id));
    }
    if (isFavorite === false) {
      dispatch(addFavorite({ data }));
    }
  };
  return (
    <>
      {details && (
        <li className={css.camperItem}>
          <div className={css.imageWrapper}>
            {Array.isArray(gallery) && (
              <img className={css.image} src={gallery[0]} alt={name} />
            )}
          </div>
          <div className={css.textWrapper}>
            <div className={css.nameWrapper}>
              <div>
                <h2 className={css.name}>{name}</h2>
              </div>
              <div className={css.priceWrapper}>
                <h2 className={css.price}>${price},00</h2>
                <button className={css.likeBtn} onClick={handleLikeClick}>
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
              <p>
                The pictures shown here are example vehicles of the respective.
              </p>
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
              <button onClick={handleOpenModal} className={css.btn}>
                Show more
              </button>
            </div>
          </div>
        </li>
      )}
      {isVisible && (
        <Modal onClose={handleCloseModal}>
          <DetailsModal data={data} onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};
CamperItem.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
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
