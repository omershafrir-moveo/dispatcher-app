import { ButtonContainer } from "../IconButton/IconButton.styles";

const IconButton: React.FC<{
  children: React.ReactElement;
  handleClick: () => void;
}> = ({ children, handleClick }) => {
  return (
    <ButtonContainer className="ButtonContainer" onClick={handleClick}>
      {children}
    </ButtonContainer>
  );
};

export default IconButton;
