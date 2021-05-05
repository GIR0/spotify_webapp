import Header from "./Header";
import Dashboard from "./Dashboard";
import { RiEmotionSadLine } from "react-icons/ri";
import { useLocation } from "react-router";
import video from "../assets/pexels-ron-lach-7645602.mp4";

let inMemoryToken;

function HomePage({ token }) {
  const location = useLocation();

  if (location.state) {
    inMemoryToken = location.state.token;
  }

  return (
    <div>
      <Header title="Spotify Buddy" isLoggedIn={inMemoryToken ? true : false} />
      {inMemoryToken ? (
        <Dashboard token={inMemoryToken} />
      ) : (
        // <div id="login-msg">
        //   <RiEmotionSadLine />
        //   <h4>You need to be logged in to use this service.</h4>
        // </div>
        <div className="hero">
          <h1>TRACK YOUR TASTE PROFILE TODAY</h1>
          <video className="video-bg" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}

// HomePage.defaultProps = {
//   token: none,
// };

export default HomePage;
