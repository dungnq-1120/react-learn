import { SideBarWrapper, Icon, IconMenu } from "./style";

import icon from "./icon.svg";
import iconMenu from "./icon-menu.svg";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <SideBarWrapper isOpen={isOpen}>
      <Icon
        src={icon}
        alt=""
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul>
        <li>
          <IconMenu src={iconMenu} /> {"Menu test 1234567889900S1"}
        </li>
        <li>
          <IconMenu src={iconMenu} /> {"Menu test 1234567889900S2"}
        </li>
        <li>
          <IconMenu src={iconMenu} /> {"Menu test 1234567889900S3"}
        </li>
        <li>
          <IconMenu src={iconMenu} /> {"Menu test 1234567889900S4"}
        </li>
        <li>
          <IconMenu src={iconMenu} /> {"Menu test 1234567889900S5"}
        </li>
        <li>
          <IconMenu src={iconMenu} /> {"Menu test 1234567889900S6"}
        </li>
      </ul>
    </SideBarWrapper>
  );
}
