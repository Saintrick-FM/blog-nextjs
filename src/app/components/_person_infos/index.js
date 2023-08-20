"use client";
import { PersonInfoContainer } from "./styles";
import UserData from "./user_data";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaUsers, FaHotel } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

function PersonInfo() {
  return (
    <PersonInfoContainer>
      <UserData />
    </PersonInfoContainer>
  );
}

export default PersonInfo;
