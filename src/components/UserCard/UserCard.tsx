import { FC } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import CardRow from "./UserCardRow";

import { maxWidth } from "../../mediaQueries/mediaQueries";
import { UserCardTypes } from "../../types/types";

const Card = styled.div`
  width: 100%;
  height: 73px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 10px;

  background: #f3f3f3;
  border-radius: 8px;

  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }

  ${maxWidth.tablet} {
    min-height: 83px;
  }
`;

const MoreInfo = styled.a`
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;

  color: #4b51ef;

  &:hover {
    cursor: pointer;
  }

  ${maxWidth.tablet} {
    font-size: 10px;
  }
`;

const RowWithHref = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${maxWidth.tablet} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const UserCard: FC<UserCardTypes> = ({ name, city, companyName, id }) => {
  const history = useHistory();
  return (
    <Card>
      <CardRow title="ФИО" titleValue={name} />
      <CardRow title="город:" titleValue={city} />
      <RowWithHref>
        <CardRow title="компания:" titleValue={companyName} />
        <MoreInfo
          onClick={() => {
            history.push(`/user/${id}`);
          }}
        >
          Подробнее
        </MoreInfo>
      </RowWithHref>
    </Card>
  );
};

export default UserCard;
