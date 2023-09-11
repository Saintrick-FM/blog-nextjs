import DetailsRepos from "../../../components/PostDetailsPage";
import getAllUserRepos from "../../../helpers/githubRequests/getAllUserRepos";
import getSingleRepo from "../../../helpers/githubRequests/getSingleRepo";
import { cookies } from "next/headers";
import axios from "axios";

//Apply SSG instead of the default SSR component
// export async function generateStaticParams() {
//   let githubUsernameCookie = cookies().get("github_username");
//   let github_username = githubUsernameCookie?.value || "Saintrick-FM";
  
//   const resp = getAllUserRepos(github_username);
//   const allUserRepos = await resp;
//   return allUserRepos.map((userRepos) => ({ singleRepo: userRepos.name }));
// }

  export async function generateMetadata({ params, searchParams }, parent) {
  let githubUsernameCookie = cookies().get("github_username");
  let github_username = githubUsernameCookie?.value || "Saintrick-FM";

  const singleRepo = params.singleRepo;
  let resp = getSingleRepo({ username: github_username, repoName: singleRepo });
  let repo = await resp;
  return {
    title: `Dépot | ${repo.name}`,
    description: `Page relative au repos : ${repo.name}`,
  };
}

export default async function singleRepo({ params: { singleRepo } }) {
  // let result = await axios.get("/api/github_username");
  let github_username = cookies().get("github_username").value;
  const resp = getSingleRepo({
    username: github_username,
    repoName: singleRepo,
  });
  const repo = await resp;
  return <DetailsRepos repo={repo} />;
}
