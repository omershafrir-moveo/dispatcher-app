import { PageContainer, BodyContainer } from "./PageLayout.styles";
import FiltersLayout from "../FiltersLayout/FiltersLayout";
import Header from "../../../components/DropdownMenu/Header/Header";
import BodyLayout from "../BodyLayout";
import SeparatorLine from "../../../components/Icons/SeparatorLine";
import { useContext } from "react";
import { SearchContext } from "../../../components/SearchContext/SearchContext";

const PageLayout: React.FC = () => {
  const { filterValue, filtersValues, sortMode, datesRange, searchValue } =
    useContext(SearchContext);
  return (
    <PageContainer className="pageContainer">
      <Header />
      <BodyContainer className="BodyContainer">
        <FiltersLayout mode={filterValue} />
        <SeparatorLine />
        <BodyLayout />
      </BodyContainer>
    </PageContainer>
  );
};

export default PageLayout;
