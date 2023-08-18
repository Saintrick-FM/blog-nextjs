import { PersonInfoContainer } from "./styles";
import Image from "next/image";

function PersonInfo() {
  return (
    <PersonInfoContainer>
      {/* <Image
      priority
      src={twitterIcon}
      alt="Follow us on Twitter"/> */}

      {/* <img width={148} height={148} src={userInfo?.imgUrl} alt="Person Photo" /> */}
      <div>
        <header>
          <h1>Francy</h1>
          <a href="https://github.com/Saintrick-FM" target="_blank">
            GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>

        <main>
          <p>Mon blog</p>
        </main>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            Saintrick-FM
          </span>
          <span>
            <i className="fa-solid fa-building"></i>
            Ginov Digital
          </span>
          <span>
            <i className="fa-solid fa-user-group"></i>
            10 Followers
          </span>
        </footer>
      </div>
    </PersonInfoContainer>
  );
}

export default PersonInfo;
