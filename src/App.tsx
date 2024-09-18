import "./App.css";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { GlobalContext } from "./providers/GlobalContext";

import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
// import DebugScreen from "./components/DebugScreen";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./RoutesComponent";
import ModalSection from "./components/ModalSection";

function App() {
  const { activeModal, setActiveModal, getSubjects, setShowSortMenu } =
    React.useContext(GlobalContext);
  const [subHeader, setSubHeader] = useState(false);

  function toggleSubHeader() {
    if (subHeader) {
      setShowSortMenu(false);
    }
    setSubHeader(!subHeader);
  }

  useEffect(() => {
    getSubjects();
  }, []);

  let url = location.href;
  document.body.addEventListener(
    "click",
    () => {
      requestAnimationFrame(() => {
        if (url !== location.href) {
          setActiveModal(false);
          url = location.href;
        }
      });
    },
    true
  );

  return (
    <Router>
      <div
        className={`w-full h-screen flex flex-col overflow-x-hidden ${
          activeModal && "overflow-hidden"
        }`}
      >
        <Header />
        {/* <DebugScreen /> */}
        <div className="top-0 bg-color1">
          <MobileHeader
            toggleSubHeader={toggleSubHeader}
            subHeaderStatus={subHeader}
          />
        </div>
        {activeModal && <ModalSection />}
        <RoutesComponent />
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
