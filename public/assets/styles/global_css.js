import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-text"]}; 
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: Montserra, "400 1rem Nunito", 'sans-serif';
  }
  :root {
    --red: rgb(255, 75, 43);
    --red-low-opacity: rgba(255, 75, 43, 0.25);
    --blue: #3294F8;
    --bg-dark: #071422;
    --body-bg-white: #f6f5f7;
    --card-linear-gradient: linear-gradient(to right, var(--red), var(--bg-dark), var(--red));
  }
  
  body {
    background: var(--bg-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    height: 100vh;
  }
  
  
  .footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
  }
  
  .footer p {
    margin: 10px 0;
  }
  
  .footer i {
    color: red;
  }
  
  footer a {
    color: #3c97bf;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
    /* Scrollbar */
::-webkit-scrollbar {
  width: 10px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: ${(props) => props.theme["base-profile"]};
}

::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.blue};
}
`;
