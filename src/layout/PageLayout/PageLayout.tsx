import { PageContainer } from "./PageLayout.styles";
import FiltersLayout from "../BodyLayout/FiltersLayout/FiltersLayout";
import { modeArray } from "../BodyLayout/FiltersLayout/FilterLayout.types";

const PageLayout: React.FC = () => {
  return (
    <PageContainer>
      <FiltersLayout mode={modeArray[0]} />
    </PageContainer>
  );
};

export default PageLayout;
