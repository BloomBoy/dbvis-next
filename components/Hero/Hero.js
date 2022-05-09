/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "styles/Home.module.css";

function Hero({ data }) {
  return (
    <div className="text-center h-[calc(100vh_-_96px)] flex items-center justify-center">
      
      <div className="z-10 relative">
        <div className="max-w-4xl">
        <h1 className="text-8xl font-bold">{data?.fields?.mainHeader}</h1>
        <h3 className="text-5xl font-normal mt-5">{data?.fields?.subHeader}</h3>
        
        {data?.fields?.buttons?.map((button) => (
          <a
            href={button.fields?.link}
            className={"m-10 inline-block btn--primary btn--large tracking-wider " + button.fields?.size + " " + button.fields?.color}
            key={button?.sys?.id}
          >
            {button.fields?.buttonText}
          </a>
        ))}

      </div>
      </div>

      <img
          src={data?.fields?.image?.fields?.imageFile?.fields?.file?.url}
          alt={data?.fields?.image?.fields?.alt}
          loading="lazy"
          className="absolute z-0"
        />

    </div> 
  );
}

Hero.propTypes = {
  data: PropTypes.object,
};

export default Hero;
