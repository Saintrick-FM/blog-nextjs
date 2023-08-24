"use client";
import { HomeContainer } from "./styles";
import PersonInfo from "../../components/_person_infos";
import ListRepos from "./list_repos";
import {useSelector} from "react-redux"

function HomePage() {
  
  const github_username = useSelector((state) => state.user.github_username);
  return (
    <HomeContainer>
      <PersonInfo ></PersonInfo>
      <ListRepos github_username={github_username}/>
    </HomeContainer>
  );
}

export default HomePage;
