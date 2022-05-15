import Home from "./Component/Home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TourDetails from "./Component/TourDetails/TourDetails";
import Navbar from "./Component/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
    </>
  );
}

export default App;
