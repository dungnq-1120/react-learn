import styled from "styled-components";

export const SideBarWrapper = styled.div`
  width: ${(props) => (props.isOpen ? "40%" : "100px")};
  height: 100vh;
  background: blue;
  position: relative;

  overflow: hidden;

  transition: all 0.5s;

  ul {
    list-style: none;

    li {
      padding: 20px;
      padding-left: 0;
      white-space: nowrap;
    }
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 0px;
  transform: ${(props) => (props.isOpen ? "rotate(0deg)" : "rotate(180deg)")};
`;

export const IconMenu = styled.img`
  width: 30px;
  height: 30px;
  /* box-sizing: border-box; */
  margin-right: 32px;
`;
