import { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ButtonElement from "../ButtonElement/ButtonElement";

import { setSortType } from "../../redux/actionCreators";
import { maxWidth } from "../../mediaQueries/mediaQueries";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${maxWidth.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const SortTitle = styled.p`
  font-size: 12px;
  line-height: 14px;

  color: #000000;
`;

const SortUserPanel: FC = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <SortTitle>Сортировка</SortTitle>
      <ButtonElement
        onClick={() => {
          dispatch(setSortType("city"));
        }}
        typeOfButton="base"
        marginTop="10px"
      >
        по городу
      </ButtonElement>
      <ButtonElement
        onClick={() => {
          dispatch(setSortType("company"));
        }}
        typeOfButton="base"
        marginTop="10px"
      >
        по компании
      </ButtonElement>
    </Container>
  );
};

export default SortUserPanel;
