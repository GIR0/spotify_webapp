function Card({ cardItem }) {
  return (
    <div className="card">
      <h2>{cardItem.name}</h2>
      <a href={cardItem.url}>
        <img src={cardItem.image} />
      </a>
    </div>
  );
}

export default Card;
