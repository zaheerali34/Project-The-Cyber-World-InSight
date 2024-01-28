import { Outlet } from "react-router-dom";
import "./App.css";
import "./ReponsiveDesign.css"
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <>  
    <Header />
    <Outlet />
    {/* <Footer /> */}
    </>
  );
}

export default App;
