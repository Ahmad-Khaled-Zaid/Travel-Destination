import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="Navbar">
          Home
        </Link>
        
      </nav>
    </>
  );
}
export default Navbar;
