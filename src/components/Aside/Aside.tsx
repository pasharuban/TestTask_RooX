import { FC } from "react";
import styled from "styled-components";

import SortUserList from "../SortUserPanel/SortUserPanel";

import { asideTabletHeight, asideWidth } from "../../constants/constants"; //нужно,т.к aside fixed (для margin-left) на ширину aside
import { maxWidth } from "../../mediaQueries/mediaQueries";

const AsideWrapper = styled.aside`
  width: ${asideWidth}px;
  max-width: ${asideWidth}px;
  height: 100%;

  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: #bdbdbd;

  ${maxWidth.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 100%;
    height: ${asideTabletHeight}px;
  }
`;

const AsideContent = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${maxWidth.tablet} {
    margin-top: 0;
  }
`;

const Aside: FC = () => {
  return (
    <AsideWrapper>
      <AsideContent>
        <SortUserList />
      </AsideContent>
    </AsideWrapper>
  );
};

export default Aside;
