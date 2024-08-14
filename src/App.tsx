import React from "react";
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

function App() {
  const { activeModal } = React.useContext(GlobalContext);

  return (
    <>
      {/* <span className="text-yellow-300 fixed left-1/2 top-3 z-50">
        Modal: {JSON.stringify(activeModal)}
      </span> */}
      <div
        id="teste"
        className={`w-full h-screen flex flex-col ${
          activeModal && "overflow-hidden"
        }`}
      >
        <Header />
        <div className="sticky top-0 z-30 bg-color1">
          <MobileHeader />
          <MobileSubHeader />
        </div>
        <div
          className={`w-full h-screen backdrop-blur-sm fixed z-50 ${
            !activeModal && "hidden"
          }`}
        >
          {activeModal == "del" && <DelSubModal />}
          {activeModal == "add" && <AddSubModal />}
          {activeModal == "edit" && <AddSubModal edit={true} />}
          {activeModal == "edit" && <MobileModal edit={true} />}
        </div>
        {activeModal == "add" && <MobileModal />}
        {activeModal != "add" && <MobileList />}
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
