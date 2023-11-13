import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import OffGrid from "../pages/BusinessUnits/OffGrid/OffGrid";
import OnGrid from "../pages/BusinessUnits/OnGrid/OnGrid";
import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLAyout";
import Dashboard from "../admin/Dashboard/Dashboard";
import UserLists from "../Admin/User/UserLists";
import EditUser from "../Admin/User/EditUser";
import TeamLists from "../Admin/Team/TeamLists";
import EditTeam from "../Admin/Team/EditTeam";
import AlliancesLists from "../Admin/Alliances/AlliancesLists";
import BannerLists from "../Admin/Banner/BannerLists";
import EditBanner from "../Admin/Banner/EditBanner";
import ProductLists from "../Admin/Products/ProductLists";
import Hybrid from "../pages/BusinessUnits/Hybrid/Hybrid";
import Clients from "../pages/Clients/Clients";
import Partners from "../pages/Clients/Partners/Partners";
import Career from "../pages/Career/Career";
import NewsEvents from "../pages/NewsEvents/NewsEvents";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },
      {
        path: "/products/:category/:subCategory",
        element: <Products />,
      },
      {
        path: "/business-units/off-grid",
        element: <OffGrid />,
      },
      {
        path: "/business-units/on-grid",
        element: <OnGrid />,
      },
      {
        path: "/business-units/hybrid",
        element: <Hybrid />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/news-events",
        element: <NewsEvents />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/user/user-lists",
        element: <UserLists />,
      },
      {
        path: "/admin/user/edit-user/:id",
        element: <EditUser />,
      },
      {
        path: "/admin/team/team-lists",
        element: <TeamLists />,
      },
      {
        path: "/admin/team/edit-team/:id",
        element: <EditTeam />,
      },
      {
        path: "/admin/alliances/alliances-lists",
        element: <AlliancesLists />,
      },
      {
        path: "/admin/banner/banner-lists",
        element: <BannerLists />,
      },
      {
        path: "/admin/banner/edit-banner/:id",
        element: <EditBanner />,
      },
      {
        path: "/admin/product/product-lists",
        element: <ProductLists />,
      },
    ],
  },
]);
