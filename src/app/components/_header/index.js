"use client";
import techBg from "../../../assets/images/tech-bg.svg";
import { HeaderContainer } from "./styles";
import Image from "next/image";

function Header() {
  return (
    <HeaderContainer>
      <Image
        priority
        src={techBg}
        alt={"BLOG Image"}
        style={{
          position: "relative",
          top: "-15px",
          zIndex: "-1",
          height: "auto",
        }}
      />
    </HeaderContainer>
  );
}

export default Header;
