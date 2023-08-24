import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  height: auto;
  img {
    width: 100%;
  }
`;
export const HeaderTitle = styled.h2`
  color: #3294f8;
  position: absolute;
  top: 105px;

  @media (max-width: 800px) {
    top: 25px;
    font-size: 1em;
  }
`;
