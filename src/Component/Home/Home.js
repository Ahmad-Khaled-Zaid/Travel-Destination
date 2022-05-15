import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Data from "../../data/db.json";
import Tours from "../Tours/Tours";
import "./Home.css";
function Home() {
  return (
    <>
      <Header />
      <Tours data={Data} />
      <Footer />
    </>
  );
}
export default Home;
