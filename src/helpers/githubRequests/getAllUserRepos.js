export default async function getAllUserRepos(username) {
  try {
    const resp = await fetch(`https://api.github.com/users/${username}/repos`);
    console.log("resp = ",resp)
    const data = resp.json();
    return data;
  } catch (error) {
    return undefined;
  }
}
