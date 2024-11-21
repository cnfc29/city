import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTER } from "./router.config";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import Background from "./ui/Background/Background";
import Plug from "./pages/Plug/Plug";
import Citizen from "./pages/Citizen/Citizen";
import Developer from "./pages/Developer/Developer.JSX";
import Integrator from "./pages/Integrator/Integrator.jsx";
import ManagementCompany from "./pages/ManagementCompany/ManagementCompany.jsx";

const routes = [
  {
    element: <Background />,
    children: [
      { path: ROUTER.main, element: <MainPage /> },
      { path: ROUTER.plug, element: <Plug /> },
      { path: ROUTER.citizen, element: <Citizen /> },
      { path: ROUTER.developer, element: <Developer /> },
      { path: ROUTER.integrator, element: <Integrator /> },
      { path: ROUTER.managementCompany, element: <ManagementCompany /> },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
