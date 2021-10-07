import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { DARK_MODE, LOCALSTORAGE_TOKEN } from "./constants";

const lsToken = localStorage.getItem(LOCALSTORAGE_TOKEN);
export const isLoggedInVar = makeVar(Boolean(lsToken));
export const authTokenVar = makeVar(lsToken);

export const logUserIn = (token: string) => {
  localStorage.setItem(LOCALSTORAGE_TOKEN, token);
  isLoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem(LOCALSTORAGE_TOKEN);
  window.location.href = "/";
};

const lsDarkMode = localStorage.getItem(DARK_MODE);
export const isDarkModeVar = makeVar(Boolean(lsDarkMode));

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  isDarkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  isDarkModeVar(false);
};

const httpLink = createHttpLink({
  uri: process.env.BACKEND_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-jwt": authTokenVar() || "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {},
  }),
});
