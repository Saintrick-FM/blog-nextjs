import Image from "next/image";
import profil_picture from "../../../public/assets/images/My_resized_photo.jpeg";
import getUserData from "../../helpers/githubRequests/getUserData";

import { BsGithub } from "react-icons/bs";
import { FaUsers, FaHotel } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import DisconnectUser from "./disconnect_user";

export default async function UserData({ github_username }) {
  const resp = getUserData(github_username);
  const { name, followers, login, company, html_url, avatar_url, bio } =
    await resp;
  return (
    <>
      <Image
        priority
        src={avatar_url}
        width={148}
        height={148}
        alt="Image profil"
      />
      <div>
        <header>
          <h1>{name}</h1>
          <a href={html_url} target="_blank">
            GITHUB
            <BsBoxArrowUpRight style={{ marginBottom: "2.5px" }} />
          </a>
          <DisconnectUser />
        </header>

        <footer>
          <span>
            <BsGithub />
            {login}
          </span>
          <span>
            <FaHotel />
            {company || "Non spécifié"}
          </span>
          <span>
            <FaUsers />
            {followers} Follower{parseInt(followers) > 1 && "s"}
          </span>
        </footer>
      </div>
    </>
  );
}
