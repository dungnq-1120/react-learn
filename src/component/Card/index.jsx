const Card = (props) => {
  const { item, outOfDate } = props;
  const { img, content, name } = item;
  return (
    <div class="card" style={{ width: "18rem" }}>
      {outOfDate && "out Of Date"}
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
