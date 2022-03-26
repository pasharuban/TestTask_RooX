import { FC } from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import InputElement from "../InputElement/InputElement";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ButtonElement from "../ButtonElement/ButtonElement";
import TextareaElement from "./../TextareaElement/TextareaElement";

import { getFormData } from "../../utils/helperFunctions";
import { routes } from "../../routes/routes";

import { updateEditingStatus } from "../../redux/actionCreators";
import { UserDataType } from "../../types/types";
import { getUser } from "../../utils/api";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 438px;
  height: 463px;
  min-height: 463px;

  border: 1px solid #f3f3f3;
  border-radius: 8px;

  padding: 12px 20px;
`;

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const UserDataForm: FC<{ disabled: boolean }> = ({ disabled }) => {
  const [userData, setUserData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      getUser(id)
        .then((response) => {
          setUserData(response.data);
          const {
            name,
            username,
            email,
            address,
            phone,
            website,
          }: UserDataType = response.data;

          const formattedData = [
            [name, "text", "Name", "name"],
            [username, "text", "User name", "userName"],
            [email, "email", "E-mail", "email"],
            [address.street, "text", "Street", "street"],
            [address.city, "text", "City", "city"],
            [address.zipcode, "text", "Zip code", "zipCode"],
            [phone, "tel", "Phone", "phone"],
            [website, "text", "Website", "website"],
          ];

          setUserData(formattedData);

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

  const { id }: { id: string } = useParams();

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <Form
      name="userData"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = getFormData(event.target, userData.length + 1);
        console.log(formData);
        dispatch(updateEditingStatus());
        history.push(routes.userList);
      }}
    >
      <Container>
        {userData.map((user) => {
          const [value, type, label, name] = user;
          return (
            <InputElement
              value={value}
              name={name}
              type={type}
              label={label}
              key={value}
              disabled={disabled}
              required={true}
            />
          );
        })}
        <TextareaElement
          name="text"
          value=""
          label="Comment"
          disabled={disabled}
          required={false}
        />
      </Container>
      <ButtonElement
        typeOfButton="submit"
        type="submit"
        width="85px"
        marginTop="10px"
        disabled={disabled}
      >
        Отправить
      </ButtonElement>
    </Form>
  );
};

export default UserDataForm;
