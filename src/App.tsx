import { createGlobalStyle } from "styled-components";
import { reset } from "./styled/reset-style"; // node 16 이상부터 styled-reset 설치 가능, 하지만 사정상 현재 버전업 불가능

import Router from "./Router";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box
  }
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }
  a {
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
