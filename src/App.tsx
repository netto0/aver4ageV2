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
import Grades from "./pages/Grades";
import Footer from "./components/Footer";
// import DebugScreen from "./components/DebugScreen";
import AddSubDesktop from "./components/modals/AddSubDesktop";
import AddSubMobile from "./components/modals/AddSubMobile";
import Charts from "./pages/Charts";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {
  const { activeModal, getSubjects, setShowSortMenu } =
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

  return (
    <>
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
        <Grades />
        {/* <Charts /> */}
        {/* <Settings /> */}
        {/* <Profile /> */}

        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
