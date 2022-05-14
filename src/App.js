import Home from "./Component/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
