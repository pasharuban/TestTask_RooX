import styled from "styled-components";

import { asideTabletHeight, asideWidth } from "../../constants/constants";
import { maxWidth } from "../../mediaQueries/mediaQueries";

const BaseContentContainer = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 19px;
  padding-bottom: 25px;

  margin-left: calc(${asideWidth}px + 34px);

  ${maxWidth.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 0;
    margin-top: calc(${asideTabletHeight}px * 1.5);
    padding: 25px;
  }
`;

export default BaseContentContainer;
