import { createBrowserHistory, History } from "history";
import * as React from "react";
import { hot } from "react-hot-loader";
import { Router } from "react-router";
import { ThemeProvider } from "styled-components";
import { mergedReducer } from "../../context/reducers";
import { GlobalStateContext, initialState } from "../../context/store";
import { defaultTheme } from "../../themes/defaultTheme";
import { useAsyncReducer } from "../../tools/hooks";
import MainPage from "../pages/MainPage/MainPage";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

const history: History = createBrowserHistory();

const App: React.FC = () => {
   const [globalState, dispatchToGlobal] = useAsyncReducer(mergedReducer, initialState);

   return (
      <ErrorBoundary>
         <GlobalStateContext.Provider value={{ state: globalState, dispatch: dispatchToGlobal }}>
            <ThemeProvider theme={defaultTheme}>
               <GlobalStyles />
               <Router history={history}>
                  <MainPage />
               </Router>
            </ThemeProvider>
         </GlobalStateContext.Provider>
      </ErrorBoundary>
   );
};

export default hot(module)(App);
