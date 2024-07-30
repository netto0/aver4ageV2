import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import MobileList from "./components/MobileList";
import MobileSubHeader from "./components/MobileSubHeader";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col bg-color2">
        <Header />
        {/* <div className="sticky top-0 z-50"> */}
        <div className="sticky top-0 z-50 bg-color1">
          <MobileHeader />
          <MobileSubHeader />
        </div>
        <MobileList />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
