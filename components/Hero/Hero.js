/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "styles/Home.module.css";

function Hero({ data }) {
  return (
    <div>
      <p className={styles.description}>{data?.fields?.internalName}</p>
      <img
        src={data?.fields?.image?.fields?.imageFile?.fields?.file?.url}
        alt={data?.fields?.image?.fields?.alt}
        loading="lazy"
      />
    </div>
  );
}

Hero.propTypes = {
  data: PropTypes.object,
};

export default Hero;
