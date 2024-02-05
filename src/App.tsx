import "./App.css";
import Header from "./components/Header/Header";
import RecentSearchesMenu from "./components/RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import WidgetsSection from "./components/Widget/WidgetsSection/WidgetsSection";
import { useState, useContext, useRef } from "react";
import BodyLayout from "./layout/BodyLayout/BodyLayout";
import FiltersLayout from "./layout/BodyLayout/FiltersLayout/FiltersLayout";
import {
  InputProvider,
  SearchContext,
} from "./components/SearchContext/SearchContext";
import SearchContextApi from "./api/SearchContextApi";
import useDict from "./hooks/useDict";
import { modeArray } from "./layout/BodyLayout/FiltersLayout/FilterLayout.types";
import DatePicker from "./components/DatePicker/DatePicker";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import PageLayout from "./layout/PageLayout/PageLayout";

function App() {
  return (
    <>
      <InputProvider userInputAPI={SearchContextApi}>
        <PageLayout />
      </InputProvider>
    </>
  );
}

export default App;
