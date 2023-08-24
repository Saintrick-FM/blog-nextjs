import "moment/locale/fr";
import { PostCardContainer } from "./styles";
import { Badge, Button, Avatar } from "antd";
import { LikeOutlined } from "@ant-design/icons";

function PostCard({ project }) {
  let moment = require("moment");
  /*
  {
            background: "var(--card-linear-gradient)",
            webkitTextFillColor: "transparent",
            webkitBackgroundClip: "text",
          }
 */
  return (
    <PostCardContainer href={`/home/${project.name}`}>
      <header>
        <h1 style={{ color: "var(--blue)" }}>{project.name}</h1>
        <Badge
          count={project.stargazers_count}
          showZero
          style={{ background: "var(--card-linear-gradient)" }}
        >
          <Avatar shape="square" icon={<LikeOutlined color="var(--blue)" />} />
        </Badge>
      </header>
      <main>
        <p>{project.description || "Projet sans description."} </p>
      </main>
      <footer
        style={{ display: "inline-flex", justifyContent: "space-between" }}
      >
        <h5 style={{ color: "var(--body-bg-white)" }}>
          <span style={{ color: "var(--blue)" }}>Créé :</span>{" "}
          {moment(project.created_at).fromNow()}
        </h5>
        <h5 style={{ color: "var(--body-bg-white)" }}>
          <span style={{ color: "var(--blue)" }}>Dernier push :</span>{" "}
          {moment(project.pushed_at).fromNow()}
        </h5>
      </footer>
    </PostCardContainer>
  );
}

export default PostCard;
