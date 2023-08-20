import {
  HomeContainer,
  HomeContent,
  SearchSection,
  ListSection,
} from "./styles";

import PostCard from "../../components/_post_card";
import getUserRepos from "../../../helpers/getUserRepos";

async function ListRepos() {
  const resp = getUserRepos("Saintrick-FM");
  const projects = await resp;

  return (
    <HomeContent>
      <SearchSection>
        <div>
          <span>Projets</span>
          <small>
            {projects ? projects.length : 0} post{projects && "s"}
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
