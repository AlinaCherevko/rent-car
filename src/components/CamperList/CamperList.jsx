import PropTypes from "prop-types";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css";

export default function CamperList({ catalogData }) {
  return (
    <div className={css.listWrapper}>
      <ul className={css.camperList}>
        {catalogData.length > 0 &&
          catalogData.map((data) => (
            <CamperItem key={data.name} data={data}></CamperItem>
          ))}
      </ul>
    </div>
  );
}
CamperList.propTypes = {
  catalogData: PropTypes.array.isRequired,
};
