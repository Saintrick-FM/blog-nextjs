"use client";
import PersonInfo from "../components/PersonInfos";
import {
  HomeContainer,
  HomeContent,
  SearchSection,
  ListSection,
} from "../components/Home";
import PostCard from "../components/PostCard";

// export const metadata = {
//     title: "Blog | Accueil",
//     description: "Page d'accueil du projet demo",
//   };

export default function Home() {
  return (
    <HomeContainer>
      <PersonInfo></PersonInfo>
      <HomeContent>
        <SearchSection>
          <div>
            <span>Posts</span>
            <small>11 posts</small>
          </div>
          <input
            type="text"
            // onBlur={(e) => fetchPosts(e.target.value)}
            placeholder="Search a Post"
          />
        </SearchSection>
        <ListSection>
          {/* {posts && */}
          {/* posts.map((post) => ( */}
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          {/* ))} */}
        </ListSection>
      </HomeContent>
    </HomeContainer>
  );
}
