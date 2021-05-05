import Card from "./Card";

function Panel({ topItems }) {
  return (
    <div className="panel">
      <div className="panel-banner">Your Top {topItems.length} Artists</div>
      {topItems.map((item) => (
        <Card key={item.id} cardItem={item} />
      ))}
    </div>
  );
}

export default Panel;
