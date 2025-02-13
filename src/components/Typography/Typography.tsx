import { StringLiteral } from "typescript";
import StyledFont from "./Typography.styles";

export type TypeographyProps = {
  font?: string;
  size?: string;
  weight?: string;
  fontStyle?: string;
  color?: string;
  letterSpacing?: string;
  children?: React.ReactNode;
  margin?: string;
  height?: string;
  width?: string;
};

const Typography: React.FC<TypeographyProps> = ({
  font,
  size,
  weight,
  fontStyle,
  color,
  letterSpacing,
  children,
  margin,
  height,
  width,
}) => {
  return (
    <StyledFont
      font={font}
      size={size}
      weight={weight}
      fontStyle={fontStyle}
      color={color}
      letterSpacing={letterSpacing}
      margin={margin}
      height={height}
      width={width}
    >
      {children}
    </StyledFont>
  );
};

export default Typography;
