import StyledFont from "./Typography.styles";

export type TypeographyProps = {
  font?: string;
  size?: string;
  weight?: string;
  fontStyle?: string;
  color?: string;
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
  children,
  margin,
  height,
  width
}) => {
  return (
    <StyledFont
      font={font}
      size={size}
      weight={weight}
      fontStyle={fontStyle}
      color={color}
      margin={margin}
      height={height}
      width={width}
    >
      {children}
    </StyledFont>
  );
};

export default Typography;
