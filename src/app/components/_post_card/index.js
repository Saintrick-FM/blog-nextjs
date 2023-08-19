import { PostCardContainer } from "./styles";

function PostCard({ post }) {
  return (
    <PostCardContainer href={`/home/${post.id}`}>
      <header>
        <h1 style={{ color: "var(--blue)" }}>{post.title}</h1>
        <span>Il y&lsquo;a {post.comments} heures</span>
      </header>
      <main>
        <p>{post.body}</p>
      </main>
    </PostCardContainer>
  );
}

export default PostCard;
