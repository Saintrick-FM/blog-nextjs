import { PersonInfoContainer } from "./styles";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaUsers, FaHotel } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import profil_picture from "../../../assets/images/My_resized_photo.jpeg";

function PersonInfo() {
  return (
    <PersonInfoContainer>
      <Image
        priority
        src={profil_picture}
        alt="Image profil"
        style={{ width: "148px", height: "148px" }}
      />

      {/* <img width={148} height={148} src={userInfo?.imgUrl} alt="Person Photo" /> */}
      <div>
        <header>
          <h1>Francy</h1>
          <a href="https://github.com/Saintrick-FM" target="_blank">
            GITHUB
            <BsBoxArrowUpRight style={{ marginBottom: "2.5px" }} />
          </a>
        </header>

        {/* <main>
          <p>Mon blog</p>
        </main> */}
        <footer>
          <span>
            <BsGithub />
            Saintrick-FM
          </span>
          <span>
            <FaHotel />
            Ginov Digital
          </span>
          <span>
            <FaUsers />
            10 Followers
          </span>
        </footer>
      </div>
    </PersonInfoContainer>
  );
}

export default PersonInfo;
