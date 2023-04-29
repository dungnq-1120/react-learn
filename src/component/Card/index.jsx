const Card = (props) => {
  const { item, outOfDate } = props;
  const { image, description, title, price } = item;
  return (
    <div className="card" style={{ width: "18rem" }}>
      {outOfDate && "out Of Date"}
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}$</p>
      </div>
    </div>
  );
};

export default Card;
