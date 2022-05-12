import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Data from "../../data/db.json";
import Tour from "../Tour/Tours";
function Home() {
  return (
    <>
      <Header />
      {Data.map((element) => (
        <Tour TourName={element.name} TourImage={element.image} />
      ))}
      <Footer />
    </>
  );
}
export default Home;
