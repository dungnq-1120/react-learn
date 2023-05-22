import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Card = (props) => {
  const { item, outOfDate } = props;
  const { image, description, title, price, id } = item;
  return (
    <div className="card" style={{ width: "18rem" }}>
      {outOfDate && "out Of Date"}
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}$</p>
        <Link to={`/product/${id}`} className="input-default">
          Go to detail
        </Link>
      </div>
    </div>
  );
};

export default Card;
