import "./style.css";

const Button = (props) => {
  const { content, bgColor } = props;
  //c1 dùng style attribute

  // const styles = {
  //   backgroundColor: bgColor,
  // };

  // su dung class
  console.log("button render");
  function renderClass() {
    if (bgColor) {
      return "btn red";
    }
    return "btn";
  }

  // console.log(styles);
  return <button className={renderClass()}>{content}</button>;
};

export default Button;
