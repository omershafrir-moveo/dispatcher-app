import React, { useState } from "react";
import ReactImageFallback from "react-image-fallback";
import styled from "styled-components";

const noImageUrl =
  "https://usercontent.one/wp/www.vocaleurope.eu/wp-content/uploads/no-image.jpg?media=1642546813";

const Image: React.FC<{ src: string; alt: string }> = (props) => {
  const PhotoContainer = styled(ReactImageFallback)<{
    src: string;
    alt: string;
  }>`
    border-radius: 20px 0px 0px 20px;
    overflow: hidden;
    width: "244px";
    height: "242px";
  `;

  return (
    <PhotoContainer
      src={props.src}
      fallbackImage={noImageUrl}
      alt={props.alt}
      style={{ width: "100%", height: "242px", objectFit: "cover" }}
    />
  );
};

export default Image;
