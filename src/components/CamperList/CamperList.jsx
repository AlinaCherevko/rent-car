import PropTypes from "prop-types";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css";
import { useSelector } from "react-redux";
import {
  selectFilterAdvertsByLocation,
  selectLocationFilter,
} from "../../store/catalogSlice.selectors";

export default function CamperList({ catalogData }) {
  const locationFilter = useSelector(selectLocationFilter);
  const filteredDataByLocation = useSelector(selectFilterAdvertsByLocation);

  const adverts = locationFilter !== "" ? filteredDataByLocation : catalogData;

  return (
    <div className={css.listWrapper}>
      <ul className={css.camperList}>
        {catalogData.length > 0 &&
          adverts.map((data) => (
            <CamperItem key={data.name} data={data}></CamperItem>
          ))}
      </ul>
    </div>
  );
}
CamperList.propTypes = {
  catalogData: PropTypes.array.isRequired,
};
