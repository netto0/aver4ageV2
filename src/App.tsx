import "./App.css";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { GlobalContext } from "./providers/GlobalContext";

import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import MobileSubHeader from "./components/MobileSubHeader";
import SortMenu from "./components/SortMenu";
import DelSubModal from "./components/modals/DelSubModal";
import SideMenu from "./components/modals/SideMenu";
import Footer from "./components/Footer";
// import DebugScreen from "./components/DebugScreen";
import AddSubDesktop from "./components/modals/AddSubDesktop";
import AddSubMobile from "./components/modals/AddSubMobile";
import Routes from "./RoutesComponent";
import { BrowserRouter as Router } from "react-router-dom";

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
        className={`w-full h-screen flex flex-col ${
          activeModal && "overflow-hidden"
        }`}
      >
        <Header />
        {/* <DebugScreen /> */}
        <div className="sticky top-0 z-30 bg-color1">
          <MobileHeader
            toggleSubHeader={toggleSubHeader}
            subHeaderStatus={subHeader}
          />
          {subHeader && (
            <>
              <MobileSubHeader /> <SortMenu />
            </>
          )}
        </div>
        <div
          id="modals"
          className={`w-full h-screen backdrop-blur-sm fixed z-50 ${
            !activeModal && "hidden"
          }`}
        >
          {activeModal == "add" && (
            <>
              <AddSubDesktop /> <AddSubMobile />
            </>
          )}
          {activeModal == "edit" && (
            <>
              <AddSubDesktop edit={true} /> <AddSubMobile edit={true} />
            </>
          )}
          {activeModal == "del" && <DelSubModal />}
          {activeModal == "side" && <SideMenu />}
        </div>

        <Routes />
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
