export default function Card(props) {
  const { img, name, price } = props.data;
  const { handleAddToCart } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>{price}$</p>
        <a
          href="#"
          className="btn btn-primary"
          onClick={(e) => handleAddToCart(e, props.data)}
        >
          Add to Cart
        </a>
      </div>
    </div>
  );
}
