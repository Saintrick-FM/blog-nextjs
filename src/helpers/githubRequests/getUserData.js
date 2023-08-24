export default async function getUserData(username) {
  // let github_username = sessionStorage.getItem("github_username")
  try {
    const resp = await fetch(`https://api.github.com/users/${username}`);
    const data = resp.json();
    return data;
  } catch (error) {
    return undefined;
  }
}
