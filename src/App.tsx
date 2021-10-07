import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { isDarkModeVar, isLoggedInVar } from "./apollo";
import { GlobalStyles, darkTheme, lightTheme } from "./styles";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import NotFound from "./pages/NotFound";
import CommonRoutes from "./routes/CommonRoutes";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import LoggedOutRoutes from "./routes/LoggedOutRoutes";

const App = () => {
  // 로그인 체크
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  // 다크모드
  const darkMode = useReactiveVar(isDarkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          {/* 공통 라우터 */}
          {CommonRoutes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              exact={route.exact || false}
            >
              {route.component}
            </Route>
          ))}
          {/* 로그인 or 로그아웃 라우터 */}
          {isLoggedIn
            ? LoggedInRoutes.map((route) => (
                <Route
                  path={route.path}
                  key={route.path}
                  exact={route.exact || false}
                >
                  {route.component}
                </Route>
              ))
            : LoggedOutRoutes.map((route) => (
                <Route
                  path={route.path}
                  key={route.path}
                  exact={route.exact || false}
                >
                  {route.component}
                </Route>
              ))}
          {/* Page not found */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
