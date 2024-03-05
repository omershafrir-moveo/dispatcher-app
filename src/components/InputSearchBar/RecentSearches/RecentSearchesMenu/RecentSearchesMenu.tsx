import {
  ItemsList,
  HeaderContainer,
  HeaderTitleContainer,
  FooterContainer,
  ClearButton,
  RecentSearchesMenuContainer,
} from "./RecentSearchesMenu.styles";
import RecentSearchesItem from "../RecentSearchesItem/RecentSearchesItem";
import { Fade } from "react-awesome-reveal";

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
    <Fade duration={200}>
      <RecentSearchesMenuContainer className="RecentSearchesMenuContainer">
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
      </RecentSearchesMenuContainer>
    </Fade>
  );
};

export default RecentSearchesMenu;
