import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/interior/About";
import Team from "./pages/interior/Team";
import FounderPartnerships from "./pages/interior/FounderPartnerships";
import InvestmentModel from "./pages/interior/InvestmentModel";
import Regions from "./pages/interior/Regions";
import Portfolio from "./pages/interior/Portfolio";
import Insights from "./pages/interior/Insights";
import Contact from "./pages/interior/Contact";

function Root() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "founder-partnerships", Component: FounderPartnerships },
      { path: "investment-model", Component: InvestmentModel },
      { path: "regions", Component: Regions },
      { path: "portfolio", Component: Portfolio },
      { path: "insights", Component: Insights },
      { path: "contact", Component: Contact },
    ],
  },
]);
