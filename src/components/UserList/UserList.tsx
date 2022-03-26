import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import UserCard from "../UserCard/UserCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { getUsers } from "../../utils/api";
import { UserDataType } from "../../types/types";
import { maxWidth } from "../../mediaQueries/mediaQueries";
import { initialStateType } from "../../redux/reducer";

const UserListWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const UserListContainer = styled.div`
  width: 100%;
  max-width: 420px;

  ${maxWidth.tablet} {
    padding: 0 20px;
    width: 100%;
    max-width: 100%;
  }
`;

const UserListTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #000000;

  margin-bottom: 17px;
`;

const UserListInfo = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  text-align: right;

  color: #000000;
`;

const UserList: FC = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const sortType = useSelector((state: initialStateType) => state.sortType);

  useEffect(() => {
    try {
      getUsers()
        .then((response) => {
          setUserList(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.toString());
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  }, []);

  const getSortedUserList = () => {
    if (sortType === "city")
      return [...userList].sort((a: UserDataType, b: UserDataType) =>
        a.address.city.localeCompare(b.address.city)
      );

    if (sortType === "company")
      return [...userList].sort((a: UserDataType, b: UserDataType) =>
        a.company.name.localeCompare(b.company.name)
      );

    return userList;
  };

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  const sortedUserList = getSortedUserList();

  return (
    <UserListWrapper>
      <UserListContainer>
        <UserListTitle>Список пользователей</UserListTitle>
        {sortedUserList.map((user) => {
          const { id, name, address, company }: UserDataType = user;
          return (
            <UserCard
              name={name}
              city={address.city}
              companyName={company.name}
              id={id}
              key={id}
            />
          );
        })}
        <UserListInfo>Найдено {userList.length} пользователей</UserListInfo>
      </UserListContainer>
    </UserListWrapper>
  );
};

export default UserList;
