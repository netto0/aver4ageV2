import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import MobileList from "./components/MobileList";
import MobileModal from "./components/MobileModal";
import MobileSubHeader from "./components/MobileSubHeader";
import { GlobalContext } from "./providers/GlobalContext";
import AddSubModal from "./components/modals/AddSubModal";
import DelSubModal from "./components/modals/DelSubModal";
import { ToastContainer } from "react-toastify";
import SideMenu from "./components/SideMenu";
import SortMenu from "./components/SortMenu";

function App() {
  const { activeModal, getSubjects } = React.useContext(GlobalContext);
  const [showSortMenu, setShowSortMenu] = useState(false);

  function toggleSortMenu() {
    setShowSortMenu(!showSortMenu);
  }

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <>
      <div
        id="teste"
        className={`w-full h-screen flex flex-col ${
          activeModal && "overflow-hidden"
        }`}
      >
        <Header />
        <div className="sticky top-0 z-30 bg-color1">
          <MobileHeader />
          <MobileSubHeader
            sortMenuFunc={toggleSortMenu}
            showSort={showSortMenu}
          />
          <SortMenu show={showSortMenu} />
        </div>
        <div
          className={`w-full h-screen backdrop-blur-sm fixed z-50 ${
            !activeModal && "hidden"
          }`}
        >
          {activeModal == "del" && <DelSubModal />}
          {activeModal == "add" && <AddSubModal />}
          {activeModal == "side" && <SideMenu />}
          {activeModal == "edit" && <AddSubModal edit={true} />}
          {activeModal == "edit" && <MobileModal edit={true} />}
        </div>
        {activeModal == "add" && <MobileModal />}
        {activeModal != "add" && <MobileList />}
        <Body />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
