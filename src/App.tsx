import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import MobileSubHeader from "./components/MobileSubHeader";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col bg-color2">
        <Header />
        <MobileHeader />
        <MobileSubHeader />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
