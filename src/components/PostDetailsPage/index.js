"use client";
import {
  NavButton,
  PostDetailCard,
  PostDetailContainer,
  PostDetailContent,
} from "./styles";
import "moment/locale/fr";
import { CgWebsite } from "react-icons/cg";
import { TbWorldWww } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";

function DetailsRepos({ repo }) {
  let moment = require("moment");
  return (
    <PostDetailContainer>
      <PostDetailCard>
        <header>
          <NavButton href="/home" type="button">
            {/* <i className="fa-solid fa-chevron-left"></i> */}
            <IoMdArrowRoundBack />
            Retour
          </NavButton>
          <a href={repo?.html_url} target="_blank">
            Voir sur le site
            <TbWorldWww style={{ marginBottom: "2.5px" }} />
          </a>
        </header>
        <div>
          <h1>{repo?.name}</h1>
        </div>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            {repo?.owner?.login}
          </span>
          <span>
            <i className="fa-solid fa-calendar"></i>
            {repo?.createdAt}
          </span>
          <span>
            <i className="fa-solid fa-comment"></i>
            Dernier push :{repo && moment(repo?.pushed_at).fromNow()}
          </span>
        </footer>
      </PostDetailCard>
      <PostDetailContent>
        <div>{repo?.description}</div>
      </PostDetailContent>
    </PostDetailContainer>
  );
}

export default DetailsRepos;
