import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import AreaOperation from "../pages/AboutUs/AreaOperation";
import CompanyProfile from "../pages/AboutUs/CompanyProfile";
import Manpower from "../pages/AboutUs/Manpower";
import MissionVision from "../pages/AboutUs/MissionVision";
import PurposeService from "../pages/AboutUs/PurposeService";
import Testimonials from "../pages/AboutUs/Testimonials";
import Home from "../pages/Home/Home";

import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";

import DashboardLayout from "../Layout/DashboardLAyout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../admin/Dashboard/Dashboard";

import OurTeam from "../pages/AboutUs/OurTeam";
import Career from "../pages/Career/Career";
import Clients from "../pages/Clients/Clients";
import About from "../pages/Dashboard/AboutUs/AboutUs";
import CompanyProfileSetting from "../pages/Dashboard/AboutUs/CompanyProfileSetting";
import EditTeamMember from "../pages/Dashboard/AboutUs/EditTeamMember";
import OurMissionSetting from "../pages/Dashboard/AboutUs/OurMissionSetting";
import OurTeamSetting from "../pages/Dashboard/AboutUs/OurTeamSetting";
import OurVisionSetting from "../pages/Dashboard/AboutUs/OurVisionSetting";
import AddTeamMember from "../pages/Dashboard/AboutUs/addTeamMember";
import AddBanner from "../pages/Dashboard/Banner/AddBanner";
import Banners from "../pages/Dashboard/Banner/Banner";
import CareerBanner from "../pages/Dashboard/Career/CareerBanner/CareerBanner";
import AddCategories from "../pages/Dashboard/Categories/AddCategories";
import Categories from "../pages/Dashboard/Categories/Categories";
import EditCategories from "../pages/Dashboard/Categories/EditCategories";
import AddClient from "../pages/Dashboard/Clients/AddClients";
import AllClients from "../pages/Dashboard/Clients/AllClients";
import ClientBanner from "../pages/Dashboard/Clients/ClientBanner";
import EditClient from "../pages/Dashboard/Clients/EditClient";
import ContactUs from "../pages/Dashboard/ContactUs/ContactUs";
import AllImpacts from "../pages/Dashboard/Impacts/AllImpacts";
import Logo from "../pages/Dashboard/Logo/Logo";
import AddNewsCategory from "../pages/Dashboard/NewsEvents/NewsCategory/AddNewsCategory";
import AllNewsCategories from "../pages/Dashboard/NewsEvents/NewsCategory/AllNewsCategories";
import EditNewsCategories from "../pages/Dashboard/NewsEvents/NewsCategory/EditNewsCategory";
import AddNewsEvent from "../pages/Dashboard/NewsEvents/NewsEvent/AddNewsEvent";
import AllNewsEvent from "../pages/Dashboard/NewsEvents/NewsEvent/AllNewsEvent";
import UpdateNewsEvent from "../pages/Dashboard/NewsEvents/NewsEvent/UpdateNewsEvent";
import AddSubCategories from "../pages/Dashboard/SubCategories/AddSubCategories";
import EditSubCategories from "../pages/Dashboard/SubCategories/EditSubCategories";
import SubCategories from "../pages/Dashboard/SubCategories/SubCategories";
import Advertisement from "../pages/NewsEvents/category/Advertisement";
import CSR from "../pages/NewsEvents/category/CSR";
import CorporateNews from "../pages/NewsEvents/category/CorporateNews";
import Events from "../pages/NewsEvents/category/Events";
import AddImpact from "../pages/Dashboard/Impacts/AddImpact";
import EditImpact from "../pages/Dashboard/Impacts/EditImpact";
import ImpactSection from "../pages/Dashboard/Impacts/ImpactSection";

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
        path: "/products/:category/:subCategory/:subSubCategory",
        element: <Products />,
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
        path: "/news-events/advertisement",
        element: <Advertisement />,
      },
      {
        path: "/news-events/corporate-news",
        element: <CorporateNews />,
      },
      {
        path: "/news-events/csr",
        element: <CSR />,
      },
      {
        path: "/news-events/events",
        element: <Events />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/about-us/company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "/about-us/mission-vision",
        element: <MissionVision />,
      },
      {
        path: "/about-us/purpose-service",
        element: <PurposeService />,
      },
      {
        path: "/about-us/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/about-us/manpower",
        element: <Manpower />,
      },
      {
        path: "/about-us/area-operation",
        element: <AreaOperation />,
      },
      {
        path: "/about-us/our-team",
        element: <OurTeam />,
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
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/career/banner",
        element: <CareerBanner />,
      },
      {
        path: "/admin/categories/all-categories",
        element: <Categories />,
      },
      {
        path: "/admin/categories/add-category",
        element: <AddCategories />,
      },
      {
        path: "/admin/categories/edit-category/:id",
        element: <EditCategories />,
      },
      {
        path: "/admin/categories/all-sub-categories",
        element: <SubCategories />,
      },
      {
        path: "/admin/categories/add-sub-category",
        element: <AddSubCategories />,
      },
      {
        path: "/admin/categories/edit-sub-category/:id",
        element: <EditSubCategories />,
      },
      {
        path: "/admin/clients/all-clients",
        element: <AllClients />,
      },
      {
        path: "/admin/clients/add-client",
        element: <AddClient />,
      },
      {
        path: "/admin/clients/edit-client/:id",
        element: <EditClient />,
      },
      {
        path: "/admin/clients/client-banner",
        element: <ClientBanner />,
      },
      {
        path: "/admin/about-us/details",
        element: <About />,
      },
      {
        path: "/admin/about-us/company-profile",
        element: <CompanyProfileSetting />,
      },
      {
        path: "/admin/about-us/our-mission",
        element: <OurMissionSetting />,
      },
      {
        path: "/admin/about-us/our-vision",
        element: <OurVisionSetting />,
      },
      {
        path: "/admin/about-us/our-team",
        element: <OurTeamSetting />,
      },
      {
        path: "/admin/about-us/add-member",
        element: <AddTeamMember />,
      },
      {
        path: "/admin/about-us/edit-member/:id",
        element: <EditTeamMember />,
      },

      {
        path: "/admin/front-end/logo",
        element: <Logo />,
      },
      {
        path: "/admin/front-end/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/admin/front-end/banner",
        element: <Banners />,
      },
      {
        path: "/admin/front-end/banner/add-banner",
        element: <AddBanner />,
      },

      // news $ events
      {
        path: "/admin/news-events/news-category",
        element: <AllNewsCategories />,
      },
      {
        path: "/admin/news-events/add-news-category",
        element: <AddNewsCategory />,
      },
      {
        path: "/admin/news-events/edit-news-category/:id",
        element: <EditNewsCategories />,
      },
      {
        path: "/admin/news-events/all-news-events",
        element: <AllNewsEvent />,
      },
      {
        path: "/admin/news-events/add-news-events",
        element: <AddNewsEvent />,
      },
      {
        path: "/admin/news-events/edit-news-events/:id",
        element: <UpdateNewsEvent />,
      },

      // impacts
      {
        path: "/admin/impacts/all-impacts",
        element: <AllImpacts />,
      },
      {
        path: "/admin/impacts/add-impact",
        element: <AddImpact />,
      },
      {
        path: "/admin/impacts/edit-impact/:id",
        element: <EditImpact />,
      },
      {
        path: "/admin/impacts/impact-section",
        element: <ImpactSection />,
      },
    ],
  },
]);
