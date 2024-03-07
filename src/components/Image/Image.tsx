import React, { useState } from "react";
import ReactImageFallback from "react-image-fallback";
import styled from "styled-components";

const noImageUrl =
  "https://usercontent.one/wp/www.vocaleurope.eu/wp-content/uploads/no-image.jpg?media=1642546813";

const Image: React.FC<{ src: string; alt: string }> = (props) => {
  return (
    <ReactImageFallback
      src={props.src}
      fallbackImage={noImageUrl}
      alt={props.alt}
      style={{
        width: "100%",
        height: "242px",
        objectFit: "cover",
        overflow: "hidden",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
      }}
    />
  );
};

export default Image;
