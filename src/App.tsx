import styled from "styled-components";

import AppSwitch from "./routes/AppSwitch";

import { maxWidth } from "./mediaQueries/mediaQueries";

const AppContainer = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  ${maxWidth.tablet} {
    flex-direction: column;
  }
`;

function App() {
  return (
    <AppContainer>
      <AppSwitch />
    </AppContainer>
  );
}

export default App;
