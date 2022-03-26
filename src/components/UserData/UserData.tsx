import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ProfileHeader from "../ProfileHeader/ProfileHeader";
import UserDataForm from "../UserDataForm/UserDataForm";

import { initialStateType } from "../../redux/reducer";

const UserDataWrapper = styled.div`
  width: 100%;
  max-width: 438px;
  display: flex;
  flex-direction: column;
`;

const UserData: FC = () => {
  const editingStatus = useSelector(
    (state: initialStateType) => state.editingStatus
  );
  return (
    <UserDataWrapper>
      <ProfileHeader />
      <UserDataForm disabled={editingStatus} />
    </UserDataWrapper>
  );
};

export default UserData;
