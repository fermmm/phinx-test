import { createBrowserHistory, History } from "history";
import * as React from "react";
import { hot } from "react-hot-loader";
import { Route, Router, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../themes/defaultTheme";
import SimpleComponent from "../pages/SimpleComponent/SimpleComponent";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

const history: History = createBrowserHistory();

export const App: React.FC = () => {
   return (
      <ErrorBoundary>
         <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Router history={history}>
               <Switch>
                  <Route path={"/"} component={SimpleComponent} />
               </Switch>
            </Router>
         </ThemeProvider>
      </ErrorBoundary>
   );
};

export default hot(module)(App);
