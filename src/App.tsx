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
  // scrollBarPosition = document.documentElement.scrollTop || document.body.scrollTop;

  return (
    <>
      <div
        id="teste"
        className={`w-full h-screen flex flex-col ${
          activeModal && "overflow-hidden"
        }`}
      >
        <Header />
        {/* <span className="text-yellow-300 absolute z-50 right-20 top-4">
          {JSON.stringify(activeModal)}
        </span> */}
        <div className="sticky top-0 z-30 bg-color1">
          <MobileHeader />
          <MobileSubHeader />
        </div>
        <div
          className={`w-full h-screen backdrop-blur-sm fixed z-40 ${
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
