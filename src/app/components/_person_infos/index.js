"use client";
import { PersonInfoContainer } from "./styles";
import UserData from "./user_data";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaUsers, FaHotel } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

import {useSelector} from "react-redux";

function PersonInfo() {
  const github_username= useSelector((state)=> state.user.github_username)

  return (
    <PersonInfoContainer>
      <UserData github_username={github_username}/>
    </PersonInfoContainer>
  );
}

export default PersonInfo;
