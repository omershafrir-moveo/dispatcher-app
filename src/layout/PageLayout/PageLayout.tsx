import { PageContainer, BodyContainer, Line } from "./PageLayout.styles";
import FiltersLayout from "../BodyLayout/FiltersLayout/FiltersLayout";
import { modeArray } from "../BodyLayout/FiltersLayout/FilterLayout.types";
import Header from "../../components/Header/Header";
import BodyLayout from "../BodyLayout/BodyLayout";
import { articlesArrayMock } from "../BodyLayout/BodyLayout";
import SeparatorLine from "../../components/Icons/SeparatorLine";
import { useContext } from "react";
import { SearchContext } from "../../components/SearchContext/SearchContext";
import { InputProvider } from "../../components/SearchContext/SearchContext";
import SearchContextApi from "../../api/SearchContextApi";

const PageLayout: React.FC = () => {
  const { filterValue, filtersValues, sortMode, datesRange, searchValue } =
    useContext(SearchContext);
  console.log("RERENDER!");
  console.log(searchValue);
  return (
    <PageContainer>
      <Header />
      <BodyContainer>
        <FiltersLayout mode={filterValue} />
        <Line>
          <SeparatorLine />
        </Line>
        <BodyLayout articles={articlesArrayMock} />
      </BodyContainer>
    </PageContainer>
  );
};

export default PageLayout;
