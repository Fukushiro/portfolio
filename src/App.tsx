import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { RoutesManager } from "./routes";

function App() {
  const GlobalStyle = createGlobalStyle`
   * { 
        margin:0;
        padding:0;
        box-sizing: border-box;
    }


    html{
        /* @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        } */
    }
    body {
      background-color: #121723;
      color: white;
    }
  `;
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesManager />
      </BrowserRouter>
    </>
  );
}

export default App;
