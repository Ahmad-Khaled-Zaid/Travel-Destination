function Tour(props) {
  return (
    <div>
      <h1> {props.TourName}</h1>
      <img src={props.TourImage} alt={props.TourName} />
    </div>
  );
}
export default Tour;
