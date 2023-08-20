import "moment/locale/fr";
import { PostCardContainer } from "./styles";

function PostCard({ project }) {
  let moment = require("moment");
  /*
 {
        "id": 419702890,
        "node_id": "R_kgDOGQQoag",
        "name": "ApiAppSchool",
        "full_name": "Saintrick-FM/ApiAppSchool",
        "private": false,
        "owner": {
            "login": "Saintrick-FM",
            "id": 55754974,
            "node_id": "MDQ6VXNlcjU1NzU0OTc0",
            "avatar_url": "https://avatars.githubusercontent.com/u/55754974?v=4",
            "url": "https://api.github.com/users/Saintrick-FM",
            "html_url": "https://github.com/Saintrick-FM",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/Saintrick-FM/ApiAppSchool",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/Saintrick-FM/ApiAppSchool",
        "created_at": "2021-10-21T11:53:37Z",
        "updated_at": "2021-10-21T11:56:59Z",
        "pushed_at": "2021-10-21T12:01:04Z",
        "git_url": "git://github.com/Saintrick-FM/ApiAppSchool.git",
        "clone_url": "https://github.com/Saintrick-FM/ApiAppSchool.git",
        "svn_url": "https://github.com/Saintrick-FM/ApiAppSchool",
        "homepage": null,
        "size": 2415,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    },
*/
  return (
    <PostCardContainer href={`/home/${project.id}`}>
      <header>
        <h1 style={{ color: "var(--blue)" }}>{project.name}</h1>
        <span>Dernier push : {moment(project.pushed_at).fromNow()}</span>
      </header>
      <main>
        <p>{project.description || "Projet sans description."} </p>
      </main>
    </PostCardContainer>
  );
}

export default PostCard;
