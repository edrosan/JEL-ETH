import { Link } from "react-router-dom";
import './BalanceEffect.css';
import './MetalicBackground.css';

function Logo() {
  return (
    <Link className="metaliccard" to="/">
      <h1>JEL</h1>
    </Link>
  );
}

export { Logo };
