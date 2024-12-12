import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen-minus-240 pt-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer>jhj</Footer>
    </div>
  );
};

export default MainLayout;
