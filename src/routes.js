import Auth from "./pages/Auth";
import Expenses from "./pages/Expenses";
import Incomes from "./pages/Incomes";
import MainPage from "./pages/MainPage";
import {
  EXPENSES_ROUTE,
  INCOMES_ROUTE,
  LOGIN_ROUTE,
  MAIN_PAGE_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";

export const publicRoutes = [
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
];

export const privateRoutes = [
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: `/:id${INCOMES_ROUTE}`,
    Component: Incomes,
  },
  {
    path: `/:id${EXPENSES_ROUTE}`,
    Component: Expenses,
  },
];
