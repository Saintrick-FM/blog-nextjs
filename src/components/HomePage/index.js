
"use client"
import { HomeContainer } from "./styles";
import PersonInfo from "../../components/_person_infos";
import ListRepos from "./list_repos";
import {useSelector} from "react-redux"
import useSWR from 'swr'
import { Suspense } from 'react'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function HomePage() {
  const github_username = useSelector((state) => state.user.github_username);
  const { data, loading, error } = useSWR(`https://api.github.com/users/${github_username}/repos`, fetcher)

  if (error) {
    console.log("error = ", error)
    return {
      error: true,
    }
  }
  if (loading) {
    console.log("loading...")
    return {
      loading: true,
    }
  }
  // if ( data.message.includes("API rate")) {
  //   return {
  //     error: true,
  //   }
  // }
  
  return (
    <HomeContainer>
       <Suspense fallback={<p>Chargemenent des infos ...</p>}>
        
      <PersonInfo ></PersonInfo>
      </Suspense>
      
      <ListRepos allRepos={data}/>
      
    </HomeContainer>
  );
}

export default HomePage;
