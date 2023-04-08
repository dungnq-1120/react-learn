import { ButtonStyle, Link } from "./style";

const Button = (props) => {
  const { content, bgColor } = props;
  return (
    <ButtonStyle bgColor={bgColor}>
      <Link href="">{content}</Link>
    </ButtonStyle>
  );
};

export default Button;
