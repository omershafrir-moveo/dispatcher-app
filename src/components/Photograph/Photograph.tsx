import React, { useState } from "react";
import styled from "styled-components";

const noImageUrl =
  "https://usercontent.one/wp/www.vocaleurope.eu/wp-content/uploads/no-image.jpg?media=1642546813";

const Photograph: React.FC<{ src: string; alt: string }> = (props) => {
  const [imgSrc, setImgSrc] = useState(props.src);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.stopPropagation();
    setImgSrc(noImageUrl);
  };

  // const PhotoContainer = styled.image<{
  //   src: string;
  //   alt: string;
  // }>`
  //   border-radius: 20px 0px 0px 20px;
  //   overflow: hidden;
  //   width: "244px";
  //   height: "242px";
  // `;

  return (
    <img
      src={imgSrc}
      alt={props.alt}
      onError={handleError}
      // style={{ width: "100%", objectFit: "cover" }}
    />
  );
};

export default Photograph;
