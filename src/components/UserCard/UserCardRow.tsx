import React, { FC } from "react";
import styled from "styled-components";
import { UserCardRowTypes } from "../../types/types";

import { maxWidth } from "../../mediaQueries/mediaQueries";

const Row = styled.div`
  display: flex;

  margin-bottom: 7px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.p`
  font-size: 11px;
  line-height: 13px;

  color: #a3a3a3;

  ${maxWidth.tablet} {
    font-size: 9px;
  }
`;
const TitleValue = styled(Title)`
  margin-left: 7px;
  color: #000000;
  font-weight: 500;
`;

const CardRow: FC<UserCardRowTypes> = ({ title, titleValue }) => {
  return (
    <Row>
      <Title>{title}</Title>
      <TitleValue>{titleValue}</TitleValue>
    </Row>
  );
};

export default CardRow;
