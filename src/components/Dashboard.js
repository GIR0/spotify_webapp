import Button from "./Button";
import { useState } from "react";
import { getArtists, getTracks } from "../utils/spotify_helper";
import Panel from "./Panel";
import Board from "./Board";

function Dashboard({ token }) {
  const [artists, setArtists] = useState(null);
  const [tracks, setTracks] = useState(null);
  const generateData = () => {
    getArtists(token).then((data) => setArtists(data));
    getTracks(token).then((data) => setTracks(data));
  };

  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      {/* <p>{token}</p> */}
      {artists ? (
        <Panel topItems={artists} />
      ) : (
        <Button color="#05A005" text="Start" onClick={generateData} />
      )}
      {tracks && <Board tracks={tracks} />}
    </div>
  );
}

export default Dashboard;
