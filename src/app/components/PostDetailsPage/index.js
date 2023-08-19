"use client";
import {
  NavButton,
  PostDetailCard,
  PostDetailContainer,
  PostDetailContent,
} from "./styles";

import { IoMdArrowRoundBack } from "react-icons/io";
function PostDetailsPage({ postId }) {
  const post = {
    id: postId,
    url: "https://github.com/Saintrick-FM",
    title: `Mon ${postId}e${postId === 1 ? "r" : ""} post`,
    githubUsername: "Saintrick-FM",
    createdAt: "11 Mai 2023",
    comments: 15,
    body: `${postId}e${postId === 1 ? "r" : ""} post!
    
  (https://i.pinimg.com/originals/5c/46/c4/5c46c455955910be190adf26166f5470.jpg) In the waters shallow and wide Where the sun meets the horizon‘s side A sight of elegance and grace Red flamingos find their place. With feathers bright as the setting sun And long legs that seem to run Through the water with ease They wade and swim with gentle breeze. Their beaks curved like a crescent moon Sift through the mud for their next spoon Of tiny crustaceans and shrimp That make up their daily mealtime whim. Their beauty a true wonder to behold A symphony of red pink and gold As they...`,
  };

  return (
    <PostDetailContainer>
      <PostDetailCard>
        <header>
          <NavButton href="/home" type="button">
            {/* <i className="fa-solid fa-chevron-left"></i> */}
            <IoMdArrowRoundBack />
            Back
          </NavButton>
          <a href={post.url} target="_blank">
            See on Github
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>
        <div>
          <h1>{post.title}</h1>
        </div>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            {post.githubUsername}
          </span>
          <span>
            <i className="fa-solid fa-calendar"></i>
            {post.createdAt}
          </span>
          <span>
            <i className="fa-solid fa-comment"></i>
            {post.comments} Comments
          </span>
        </footer>
      </PostDetailCard>
      <PostDetailContent>
        <div>{post.body}</div>
      </PostDetailContent>
    </PostDetailContainer>
  );
}

export default PostDetailsPage;
