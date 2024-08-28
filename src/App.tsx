import "./App.css";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { GlobalContext } from "./providers/GlobalContext";

import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import MobileSubHeader from "./components/MobileSubHeader";
import SortMenu from "./components/SortMenu";
import DelSubModal from "./components/modals/DelSubModal";
import SideMenu from "./components/modals/SideMenu";
import MobileList from "./components/MobileList";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import DebugScreen from "./components/DebugScreen";
import AddSubDesktop from "./components/modals/AddSubDesktop";
import AddSubMobile from "./components/modals/AddSubMobile";

function App() {
  const { activeModal, getSubjects } = React.useContext(GlobalContext);

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
          <MobileHeader />
          <MobileSubHeader />
          <SortMenu />
        </div>
        <div
          className={`w-full h-screen backdrop-blur-sm fixed z-50 ${
            !activeModal && "hidden"
          }`}
        >
          {activeModal == "add" && <><AddSubDesktop /> <AddSubMobile /></>}
          {activeModal == "edit" && <><AddSubDesktop edit={true} /> <AddSubMobile edit={true} /></>}
          {activeModal == "del" && <DelSubModal />}
          {activeModal == "side" && <SideMenu />}
        </div>
        {activeModal != "add" && <MobileList />}
        <Body />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
