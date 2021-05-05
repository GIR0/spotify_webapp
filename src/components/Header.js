import { FaSpotify } from "react-icons/fa";
import Button from "./Button";
import { useHistory } from "react-router";
import { makeLoginUrl } from "../utils/auth";

function Header({ title, isLoggedIn }) {
  const history = useHistory();
  const login = () => {
    window.location.replace(makeLoginUrl());
  };

  const logout = () => {
    var wnd = window.open("https://www.spotify.com/us/logout/");
    history.push({
      pathname: "/",
      state: { token: null },
    });
  };

  return (
    <div className="header">
      <div className="header-title">
        <h1>{title}</h1>
        <FaSpotify />
      </div>
      {!isLoggedIn ? (
        <Button text="Login" color="black" onClick={login} />
      ) : (
        <Button text="Log out" color="grey" onClick={logout} />
      )}
    </div>
  );
}

export default Header;

Header.defaultProps = {
  title: "Spotify Buddy",
};
