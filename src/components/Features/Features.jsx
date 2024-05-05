//import React from "react";
import PropTypes from "prop-types";
import { LuUsers } from "react-icons/lu";
import { TbAutomaticGearbox } from "react-icons/tb";
import { LuWind } from "react-icons/lu";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import { LiaCompactDiscSolid } from "react-icons/lia";
import { TbCooker } from "react-icons/tb";

import { BiRadio } from "react-icons/bi";

import css from "./Features.module.css";
import BookForm from "../BookForm/BookForm";

function Features({ data }) {
  const {
    adults,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    details,
  } = data;
  return (
    <div className={css.featuresContainer}>
      <div className={css.featuresWrapper}>
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
              <LuWind />
              <span>AC</span>
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
              <TbAirConditioning />
              <span>{details.airConditioner} air conditioner</span>
            </div>
          </div>
          <div className={css.buttonsWrapper}>
            <div className={css.adultsWrapper}>
              <LiaCompactDiscSolid />
              <span>CD</span>
            </div>
          </div>
          <div className={css.buttonsWrapper}>
            <div className={css.adultsWrapper}>
              <BiRadio />
              <span>Radio</span>
            </div>
          </div>
          <div className={css.buttonsWrapper}>
            <div className={css.adultsWrapper}>
              <TbCooker />
              <span>hob</span>
            </div>
          </div>
        </div>
        <h2 className={css.text}>Vehicle details</h2>
        <ul className={css.detailsWrapper}>
          <li className={css.detailsItem}>
            <span className={css.detailsText}>Form</span>
            <span className={css.detailsText}>{form}</span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsText}>Length</span>
            <span className={css.detailsText}>{length}</span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsText}>Width</span>
            <span className={css.detailsText}>{width}</span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsText}>Height</span>
            <span className={css.detailsText}>{height}</span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsText}>Tank</span>
            <span className={css.detailsText}>{tank}</span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsText}>Consumption</span>
            <span className={css.detailsText}>{consumption}</span>
          </li>
        </ul>
      </div>
      <BookForm />
    </div>
  );
}
Features.propTypes = {
  data: PropTypes.shape({
    reviews: PropTypes.array.isRequired,
    details: PropTypes.object.isRequired,
    adults: PropTypes.number.isRequired,
    form: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    consumption: PropTypes.string.isRequired,
    tank: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    gallery: PropTypes.array.isRequired,
  }).isRequired,
};
export default Features;
