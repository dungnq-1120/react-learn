const Card = (props) => {
  const { item, outOfDate } = props;
  const { img, content, name } = item;
  return (
    <div className="card" style={{ width: "18rem" }}>
      {outOfDate && "out Of Date"}
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
