import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Admin } from './components/admin-panel/AdminDashboard';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  {
    path: "/admin-panel-dashboard",
    requireAuth: true,
    element: <Admin />,
    roles: ["Admin"],
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
