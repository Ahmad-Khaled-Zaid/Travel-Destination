import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Data from "../../data/db.json";
import Tour from "../Tour/Tours";
import "./Home.css";
function Home() {
  return (
    <>
      <Header />
      {Data.map((element) => (
        <Tour
          TourName={element.name.toUpperCase()}
          TourImage={element.image}
          key={element.id}
        />
      ))}
      <Footer />
    </>
  );
}
export default Home;
