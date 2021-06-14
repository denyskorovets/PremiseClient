import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import MainWrapper from "./containers/MainWrapper";
import ConfigProvider from "./utils/providers/ConfigProvider";
import React from "react";

function App() {
  return (
      <BrowserRouter>
        <ConfigProvider>
          <MainWrapper>
            <Pages />
          </MainWrapper>
        </ConfigProvider>
      </BrowserRouter>
  );
}

export default App;
