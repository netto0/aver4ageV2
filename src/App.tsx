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

function App() {
  const { activeModal } = React.useContext(GlobalContext);
  return (
    <>
      <div className="min-h-screen h-fit-content flex flex-col bg-color2">
        <Header />
        <div className="sticky top-0 z-40 bg-color1">
          <MobileHeader />
          <MobileSubHeader />
        </div>
        <MobileList />
        {activeModal == "add" && <MobileModal />}
        {activeModal == "false" && <MobileList />}
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
