import {
  HomeContainer,
  HomeContent,
  SearchSection,
  ListSection,
} from "./styles";

import { useSelector } from "react-redux";
import PostCard from "../../components/_post_card";
import getAllUserRepos from "../../helpers/githubRequests/getAllUserRepos";
// import { cookies } from 'next/headers'

async function ListRepos({ github_username }) {
  const resp = getAllUserRepos(github_username);
  const projects = await resp;
  return (
    <HomeContent>
      <SearchSection>
        <div>
          <span>Projets</span>
          <small>
            {projects ? projects.length : 0} repos
            {projects && projects.length > 1 ? " publics " : "public"}
          </small>
        </div>
        <input
          type="text"
          // onBlur={(e) => fetchPosts(e.target.value)}
          placeholder="Rechercher an projet"
        />
      </SearchSection>
      <ListSection>
        {projects &&
          projects.map((project) => (
            <PostCard key={project.id} project={project}></PostCard>
          ))}
      </ListSection>
    </HomeContent>
  );
}

export default ListRepos;
