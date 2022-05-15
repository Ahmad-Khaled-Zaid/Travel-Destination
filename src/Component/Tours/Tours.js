import "./Tours.css";
import Tour from "./Tour/Tour";
function Tours(props) {
  let dataArray = props.data;

  return <Tour dataArray={dataArray} />;
}
export default Tours;
