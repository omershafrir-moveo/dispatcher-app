import React, { useState } from "react";
import ReactImageFallback from "react-image-fallback";
import styled from "styled-components";
import useMobile from "../../hooks/useMobile";

const noImageUrl =
  "https://usercontent.one/wp/www.vocaleurope.eu/wp-content/uploads/no-image.jpg?media=1642546813";

const Image: React.FC<{ src: string; alt: string }> = (props) => {
  const isMobile = useMobile();

  return (
    <ReactImageFallback
      src={props.src}
      fallbackImage={noImageUrl}
      alt={props.alt}
      style={{
        width: "100%",
        maxWidth: `${isMobile ? "none" : "244px"}`,
        height: "242px",
        objectFit: "cover",
        overflow: "hidden",
        borderRadius: `${
          isMobile ? "20px 20px 0px 0px " : "20px 0px 0px 20px"
        }`,
      }}
    />
  );
};

export default Image;
