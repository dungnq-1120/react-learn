import { ButtonStyle, Link } from "./style";

const Button = (props) => {
  const { content, bgColor, ...rest } = props;
  return (
    <ButtonStyle bgColor={bgColor} {...rest}>
      <Link href="">{content}</Link>
    </ButtonStyle>
  );
};

export default Button;
