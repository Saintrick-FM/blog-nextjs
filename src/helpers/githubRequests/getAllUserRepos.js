export default async function getAllUserRepos(username) {
  try {
    const resp = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {cache:"no-store" } 
      // {cache:"force-cache"} SSG 
      // {next:{revalidate: 60 }} => ISR
    );
    const data = resp.json();
    return data;
  } catch (error) {
    return undefined;
  }
}
