import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../../data/db.json";
import "./TourDetails.css";
import Button from "react-bootstrap/Button";

function TourDetails() {
  let [readButton, setReadButton] = useState(true);

  const handleButton = () => {
    setReadButton(!readButton);
    console.log(readButton);
  };
  let { id } = useParams();
  let result = data.filter((data) => `:${data.id}` === id);

  return (
    <>
      <div key={result[0].id} className="citySection">
        <h1> {result[0].name.toUpperCase()} </h1>
        <img src={result[0].image} alt={result[0].name} />
        <h2>{`Price :${result[0].price}$`}</h2>

        {readButton && <p>{`${result[0].info.substring(0, 200)}......`}</p>}
        {!readButton && <p>{result[0].info}</p>}
        <Button variant="secondary" onClick={handleButton}>
          {readButton ? "Read More" : "Read Less"}
        </Button>
      </div>
    </>
  );
}
export default TourDetails;
