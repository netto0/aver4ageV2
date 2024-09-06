import "./App.css";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { GlobalContext } from "./providers/GlobalContext";

import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import DelSubMobile from "./components/modals/DelSubMobile";
import SideMenu from "./components/modals/SideMenu";
import Footer from "./components/Footer";
// import DebugScreen from "./components/DebugScreen";
import AddSubDesktop from "./components/modals/AddSubDesktop";
import AddSubMobile from "./components/modals/AddSubMobile";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./RoutesComponent";
import DelSubDesktop from "./components/modals/DelSubDesktop";

function App() {
  const {
    activeModal,
    setActiveModal,
    getSubjects,
    setShowSortMenu,
    closeModal,
  } = React.useContext(GlobalContext);
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
        <div
          id="blur"
          onClick={closeModal}
          className={`w-full h-screen fixed transition-all duration-300 ${
            activeModal ? "z-50 backdrop-blur-sm" : "z-0 backdrop-blur-none"
          }`}
        ></div>

        <AddSubMobile />
        <AddSubDesktop />
        <DelSubMobile />
        <DelSubDesktop />
        <SideMenu />
        <RoutesComponent />
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
