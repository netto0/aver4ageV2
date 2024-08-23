import "./App.css";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { GlobalContext } from "./providers/GlobalContext";

import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import MobileSubHeader from "./components/MobileSubHeader";
import SortMenu from "./components/SortMenu";
import DelSubModal from "./components/modals/DelSubModal";
import AddSubModal from "./components/modals/AddSubModal";
import SideMenu from "./components/SideMenu";
import MobileModal from "./components/MobileModal";
import MobileList from "./components/MobileList";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
          <DelSubModal />
          {activeModal == "add" && <><AddSubModal /> <MobileModal /></>}
          {activeModal == "side" && <SideMenu />}
          {activeModal == "edit" && <><AddSubModal edit={true} /> <MobileModal edit={true} /></>}
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
