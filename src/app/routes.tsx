import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Reservas } from "./pages/Reservas";
import { Dashboard } from "./pages/Dashboard";
import { ElClub } from "./pages/ElClub";
import { Precios } from "./pages/Precios";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "reservas", Component: Reservas },
      { path: "dashboard", Component: Dashboard },
      { path: "el-club", Component: ElClub },
      { path: "precios", Component: Precios },
    ],
  },
]);
