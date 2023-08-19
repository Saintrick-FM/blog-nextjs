import Link from "next/link";
import styled from "styled-components";

export const PostCardContainer = styled(Link)`
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;

  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  border: 2px solid transparent;

  height: 260px;
  overflow: hidden;

  transition: border 0.2s;

  cursor: pointer;
  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    h1 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
      color: ${(props) => props.theme["base-title"]};
      text-align: justify;
    }

    span {
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  main {
    height: 112px;
    overflow: hidden;
    p {
      height: 100%;
      text-align: justify;
      color: ${(props) => props.theme["base-text"]};
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
    box-shadow: 0 14px 25px var(--red-low-opacity),
      0 10px 10px var(--red-low-opacity),
      -10px -10px 25px var(--red-low-opacity);
  }
`;
