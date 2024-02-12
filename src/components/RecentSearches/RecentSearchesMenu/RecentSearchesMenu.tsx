import {
  ItemsList,
  HeaderContainer,
  HeaderTitleContainer,
  FooterContainer,
  Container,
  ClearButton,
} from "./RecentSearchesMenu.styles";
import RecentSearchesItem from "../RecentSearchesItem/RecentSearchesItem";

export type RecentSearchesItem = {
  key: number;
  text: string;
};

export type RecentSearchesMenuProps = {
  isOpen?: boolean;
  items: string[];
  handleClick: (item: string) => void;
  handleDelete: (item: string) => void;
  handleClear: () => void;
};

const RecentSearchesMenu: React.FC<RecentSearchesMenuProps> = (props) => {
  return (
    <Container>
      <HeaderContainer className="HeaderContainer">
        <HeaderTitleContainer>RECENT SEARCHES</HeaderTitleContainer>
        <ClearButton onMouseDown={props.handleClear}>CLEAR</ClearButton>
      </HeaderContainer>
      {props.isOpen && props.items && (
        <ItemsList>
          {props.items.map((item, index) => (
            <RecentSearchesItem
              key={index}
              text={item}
              handleDelete={() => {
                props.handleDelete(item);
              }}
              handleClick={() => props.handleClick(item)}
            />
          ))}
        </ItemsList>
      )}
      <FooterContainer />
    </Container>
  );
};

export default RecentSearchesMenu;
