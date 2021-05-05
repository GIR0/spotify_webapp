import { RiEmotionSadLine } from "react-icons/ri";

function Board({ tracks }) {
  return (
    <ul className="board">
      <div className="board-title">Your Top {tracks.length} Tracks</div>
      {tracks.map((item) => (
        <li key={item.id}>
          <a href={item.url}>
            {item.image ? <img src={item.image} /> : <RiEmotionSadLine />}
            <h2>{item.name}</h2>
            <h4>{item.artists}</h4>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Board;
