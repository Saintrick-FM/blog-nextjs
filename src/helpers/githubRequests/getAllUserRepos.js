export default async function getAllUserRepos(username) {
  try {
    const resp = await fetch(
      `https://api.github.com/users/${username}/repos`
      // {next:{revalidate: 60 }}
    );
    const data = resp.json();
    return data;
  } catch (error) {
    return undefined;
  }
}
