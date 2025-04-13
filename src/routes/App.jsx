import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import FetchmyItem from "../components/FetchmyItem";



function App() {
  return (
    <>
      <Header />
      <FetchmyItem />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;