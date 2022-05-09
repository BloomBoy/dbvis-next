/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "styles/Home.module.css";

function Hero({ data }) {
  return (
    <div className="mt-10">
      <h1 className="">{data?.fields?.mainHeader}</h1>
      <h3>{data?.fields?.subHeader}</h3>
      <img
        src={data?.fields?.image?.fields?.imageFile?.fields?.file?.url}
        alt={data?.fields?.image?.fields?.alt}
        loading="lazy"
        className="mt-10"
      />
      {data?.fields?.buttons?.map((button) => (
        <a
          href={button.fields?.link}
          className={
            "btn--primary " + button.fields?.size + " " + button.fields?.color
          }
          key={button?.sys?.id}
        >
          {button.fields?.buttonText}
        </a>
      ))}
    </div>
  );
}

Hero.propTypes = {
  data: PropTypes.object,
};

export default Hero;
