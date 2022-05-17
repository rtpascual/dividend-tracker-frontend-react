import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    //dispatch(logout());
    //dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Dividend Tracker</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn">Logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}