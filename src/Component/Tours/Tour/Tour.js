import { Link } from "react-router-dom";
function Tour(props) {
  return props.dataArray.map((element) => {
    return (
      <Link to={`/city/:${element.id}`} key={element.id}>
        <div>
          <h1>{element.name}</h1>
          <img src={element.image} alt={element.name} />
        </div>
      </Link>
    );
  });
}
export default Tour;
