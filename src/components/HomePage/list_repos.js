import {
  HomeContainer,
  HomeContent,
  SearchSection,
  ListSection,
} from "./styles";
import { Suspense } from 'react'

import PostCard from "../../components/_post_card";
// import getAllUserRepos from "../../helpers/githubRequests/getAllUserRepos";

function ListRepos({ allRepos }) {
  const projects = allRepos;
  return (
    <HomeContent>
      <SearchSection>
        <div>
          <span>Projets</span>
          
        <Suspense fallback={<p>Chargement...</p>}>
          <small>
            {projects ? projects.length : 0} repos
            {projects && projects.length > 1 ? " publics " : "public"}
          </small>
        </Suspense>
        </div>
        <input
          type="text"
          placeholder="Rechercher un projet"
        />
      </SearchSection>

      <Suspense fallback={<p>Chargement...</p>}>
      <ListSection>
        {projects &&
          projects.map((project) => (
            <PostCard key={project.id} project={project}></PostCard>
          ))}
      </ListSection>
      </Suspense>
    </HomeContent>
  );
}

export default ListRepos;
