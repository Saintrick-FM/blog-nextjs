import { PostCardContainer } from "./styles";

function PostCard() {
  return (
    <PostCardContainer href="/">
      <header>
        <h1>Mon post</h1>
        <span>11 Mai 2023</span>
      </header>
      <main>
        <p>Francy post</p>
      </main>
    </PostCardContainer>
  );
}

export default PostCard;
