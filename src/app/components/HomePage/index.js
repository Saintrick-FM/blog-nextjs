"use client";
import { HomeContainer } from "./styles";
import PersonInfo from "../../components/_person_infos";
import ListRepos from "./list_repos";

function HomePage() {
  const posts = [
    {
      id: 1,
      url: "https://github.com/Saintrick-FM",
      title: "Mon 1er post",
      githubUsername: "Saintrick-FM",
      createdAt: "11 Mai 2023",
      comments: 15,
      body: "![1er post](https://i.pinimg.com/originals/5c/46/c4/5c46c455955910be190adf26166f5470.jpg) In the waters shallow and wide Where the sun meets the horizon‘s side A sight of elegance and grace Red flamingos find their place. With feathers bright as the setting sun And long legs that seem to run Through the water with ease They wade and swim with gentle breeze. Their beaks curved like a crescent moon Sift through the mud for their next spoon Of tiny crustaceans and shrimp That make up their daily mealtime whim. Their beauty a true wonder to behold A symphony of red pink and gold As they...",
    },
    {
      id: 2,
      url: "https://github.com/Saintrick-FM",
      title: "Mon 2e post",
      githubUsername: "Saintrick-FM",
      createdAt: "11 Mai 2023",
      comments: 15,
      body: "![2e Projet](https://i.pinimg.com/originals/5c/46/c4/5c46c455955910be190adf26166f5470.jpg) In the waters shallow and wide Where the sun meets the horizon‘s side A sight of elegance and grace Red flamingos find their place. With feathers bright as the setting sun And long legs that seem to run Through the water with ease They wade and swim with gentle breeze. Their beaks curved like a crescent moon Sift through the mud for their next spoon Of tiny crustaceans and shrimp That make up their daily mealtime whim. Their beauty a true wonder to behold A symphony of red pink and gold As they...",
    },
    {
      id: 3,
      url: "https://github.com/Saintrick-FM",
      title: "Mon 3e post",
      githubUsername: "Saintrick-FM",
      createdAt: "11 Mai 2023",
      comments: 15,
      body: "![3e post](https://i.pinimg.com/originals/5c/46/c4/5c46c455955910be190adf26166f5470.jpg) In the waters shallow and wide Where the sun meets the horizon‘s side A sight of elegance and grace Red flamingos find their place. With feathers bright as the setting sun And long legs that seem to run Through the water with ease They wade and swim with gentle breeze. Their beaks curved like a crescent moon Sift through the mud for their next spoon Of tiny crustaceans and shrimp That make up their daily mealtime whim. Their beauty a true wonder to behold A symphony of red pink and gold As they...",
    },
    {
      id: 4,
      url: "https://github.com/Saintrick-FM",
      title: "Mon 4e post",
      githubUsername: "Saintrick-FM",
      createdAt: "11 Mai 2023",
      comments: 15,
      body: "![4e post](https://i.pinimg.com/originals/5c/46/c4/5c46c455955910be190adf26166f5470.jpg) In the waters shallow and wide Where the sun meets the horizon‘s side A sight of elegance and grace Red flamingos find their place. With feathers bright as the setting sun And long legs that seem to run Through the water with ease They wade and swim with gentle breeze. Their beaks curved like a crescent moon Sift through the mud for their next spoon Of tiny crustaceans and shrimp That make up their daily mealtime whim. Their beauty a true wonder to behold A symphony of red pink and gold As they...",
    },
  ];
  return (
    <HomeContainer>
      <PersonInfo></PersonInfo>
      <ListRepos />
    </HomeContainer>
  );
}

export default HomePage;
