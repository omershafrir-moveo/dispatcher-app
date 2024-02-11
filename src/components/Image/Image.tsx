import React, { useState } from "react";
import { PhotoContainer } from "./Image.styles";

const Image: React.FC<{ src: string; alt: string }> = (props) => {
  const [source, setSource] = useState(props.src);

  return <PhotoContainer src={props.src} alt={props.alt} />;
};

export default Image;
