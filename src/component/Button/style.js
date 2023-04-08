import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: ${(props) => props.bgColor || "red"};
`;

export const Link = styled.a`
  color: black;
`;
