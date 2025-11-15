import React, { useEffect, useState } from "react";
import DetailedPortfolio from "./DetailedPortfolio";
import LandingPage from "./LandingPage";

const VIEWS = {
  LANDING: "landing",
  DETAILS: "details",
};

const App = () => {
  const [view, setView] = useState(() => (window.location.hash === "#details" ? VIEWS.DETAILS : VIEWS.LANDING));

  useEffect(() => {
    const handleHashChange = () => {
      setView(window.location.hash === "#details" ? VIEWS.DETAILS : VIEWS.LANDING);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const showDetails = () => {
    if (window.location.hash !== "#details") {
      window.location.hash = "#details";
    } else {
      setView(VIEWS.DETAILS);
    }
  };

  const showLanding = () => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    setView(VIEWS.LANDING);
  };

  return view === VIEWS.DETAILS ? (
    <DetailedPortfolio onBack={showLanding} />
  ) : (
    <LandingPage onViewDetails={showDetails} />
  );
};

export default App;
