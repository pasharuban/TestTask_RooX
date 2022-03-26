import { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import ButtonElement from "../ButtonElement/ButtonElement";

import { updateEditingStatus } from "../../redux/actionCreators";

const ProfileHeaderWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
`;

const ProfileHeaderTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;

const ProfileHeader: FC = () => {
  const dispatch = useDispatch();
  return (
    <ProfileHeaderWraper>
      <ProfileHeaderTitle>Профиль пользоваетля</ProfileHeaderTitle>
      <ButtonElement
        typeOfButton="base"
        width="117px"
        height="27px"
        onClick={() => {
          dispatch(updateEditingStatus());
        }}
      >
        Редактировать
      </ButtonElement>
    </ProfileHeaderWraper>
  );
};

export default ProfileHeader;
