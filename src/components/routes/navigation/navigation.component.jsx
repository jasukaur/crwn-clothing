import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    const res = await signOutUser();
    console.log(res);
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div>
            <CrwnLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
