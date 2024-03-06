import {
  PageContainer,
  BodyContainer,
  HorizontalLine,
} from "./PageLayout.styles";
import FiltersLayout from "../FiltersLayout/FiltersLayout";
import Header from "../../../components/Header/Header";
import BodyLayout from "../BodyLayout";
import { useContext } from "react";
import { SearchContext } from "../../../components/SearchContext/SearchContext";
import useViewport, { Viewport } from "../../../hooks/useViewport";
import useDesktop from "../../../hooks/useDesktop";
import MobileFiltersToolbar from "../../../components/MobileFiltersToolbar/MobileFiltersToolbar";
import useMobile from "../../../hooks/useMobile";

const PageLayout: React.FC = () => {
  const { filterValue, filtersValues, sortMode, datesRange, searchValue } =
    useContext(SearchContext);
  const isDesktop = useDesktop();
  return (
    <PageContainer className="pageContainer">
      <Header />
      <BodyContainer className="BodyContainer">
        {isDesktop ? (
          <FiltersLayout mode={filterValue} />
        ) : (
          <MobileFiltersToolbar mode={filterValue} />
        )}
        {isDesktop && <HorizontalLine />}
        <BodyLayout />
      </BodyContainer>
    </PageContainer>
  );
};

export default PageLayout;
