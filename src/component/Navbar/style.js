import styled from "styled-components";

export const NavBarWrapper = styled.div`
  /* width: ${(props) => (props.isOpen ? "30%" : "50px")}; */
  width: 30%;
  height: 100vh;
  background-color: red;
  display: flex;
  justify-content: flex-end;
  transition: all 0.5s;
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
