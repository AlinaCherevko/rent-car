// import React from 'react';
import css from "./Home.module.css";

const Home = () => {
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
      <ul className={css.photoList}>
        <li>
          <img src="/src/img/Container 1.jpg" alt="photo1" />
        </li>
        <li>
          <img src="/src/img/Container 2.jpg" alt="photo2" />
        </li>
        <li>
          <img src="/src/img/Container 3.jpg" alt="photo3" />
        </li>
        <li>
          <img src="/src/img/Container 4.jpg" alt="photo4" />
        </li>
      </ul>
    </section>
  );
};

export default Home;
