// import React from 'react';
import { useNavigate } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

import css from "./Home.module.css";

const slides = [
  {
    url: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
    title: "photo1",
  },
  {
    url: "https://ftp.goit.study/img/campers-test-task/2-1.webp",
    title: "photo2",
  },
  {
    url: "https://ftp.goit.study/img/campers-test-task/3-1.webp",
    title: "photo3",
  },
  {
    url: "https://ftp.goit.study/img/campers-test-task/4-1.webp",
    title: "photo4",
  },
  {
    url: "https://ftp.goit.study/img/campers-test-task/4-2.webp",
    title: "photo5",
  },
  {
    url: "https://ftp.goit.study/img/campers-test-task/3-2.webp",
    title: "photo6",
  },
  {
    url: "https://ftp.goit.study/img/campers-test-task/5-1.webp",
    title: "photo7",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className={css.favoriteSection}>
      <h2 className={css.preTitle}>Welcome to,</h2>
      <h1 className={css.title}>CAMPER RENT IN UKRAINE </h1>
      <p className={css.afterTitle}>
        Buying a camper is an important decision. Among the many options, it is
        easy to get confused when choosing the perfect house on wheels. If you
        choose a house on wheels and look at different trailers, you can arrange
        a test drive by renting a camper. This is an ideal option in the
        conditions of such a variety of campers on the market. We offer the
        option of short-term rentals (from 2 days to several weeks) and are
        ready to offer long-term rentals from several weeks.
      </p>
      <ImageSlider slides={slides} />
      <button className={css.button} onClick={() => navigate("/catalog")}>
        Show options
      </button>
    </section>
  );
};

export default Home;
