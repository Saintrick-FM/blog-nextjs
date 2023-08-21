import DetailsRepos from "../../components/PostDetailsPage"
import getAllUserRepos from "../../../helpers/githubRequests/getAllUserRepos"
import getSingleRepo from "../../../helpers/githubRequests/getSingleRepo"

//Apply SSG instead of the default SSR component
export async function generateStaticParams() {
  const resp = getAllUserRepos("Saintrick-FM");
  const allUserRepos = await resp;
  return allUserRepos.map((userRepos) => ({ singleRepo: userRepos.name }));

}

export async function generateMetada({ params, searchParams }, parent){
  const singleRepo = params.singleRepo;
  let resp = getSingleRepo({username: "Saintrick-FM",repoName:singleRepo});
  let repo = await resp;
  return {
    title: `Dépot | ${repo.name}`,
    description: `Page relative au repos : ${repo.name}`,
  };
}
export default async function singleRepo({ params: {singleRepo} }) {
  const resp = getSingleRepo({ username: "Saintrick-FM", repoName:singleRepo });
  const repo = await resp;
  console.log("reponame = ", singleRepo);
  return (
    <DetailsRepos repo={repo}/>
  );
}

