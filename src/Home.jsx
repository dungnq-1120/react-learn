import Button from "./component/Button";

export default function Home(props) {
  const { button } = props;
  console.log(button);
  return (
    <div>
      <Button content={button} />
      <Button content="Download" />
      <Button content="submit" />
      <Button content="Button" />
      <Button content="contact" />
    </div>
  );
}
