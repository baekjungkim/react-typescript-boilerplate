import Home from "../pages/Home";

export interface IRoutesProps {
  path: string;
  component: React.ReactElement;
  exact?: boolean;
}

const CommonRoutes: IRoutesProps[] = [
  { path: "/", component: <Home />, exact: true },
];

export default CommonRoutes;
