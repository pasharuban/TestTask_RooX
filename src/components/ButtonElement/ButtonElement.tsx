import styled from "styled-components";
import { maxWidth } from "../../mediaQueries/mediaQueries";
import { ButtonElementTypes } from "../../types/types";

const ButtonElement = styled.button<ButtonElementTypes>`
  height: ${(props) => (props.height ? props.height : "25px")};
  width: ${(props) => (props.width ? props.width : "auto")};

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  border-radius: 5px;

  padding: 5px 15px;

  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};

  background-color: ${(props) => {
    return (
      (props.disabled && "#AFAFAF") ||
      (props.typeOfButton === "base" && "#4B51EF") ||
      (props.typeOfButton === "submit" && "#52CF4F")
    );
  }};

  color: white;

  transition: all 0.5s;
  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    background-color: ${(props) => {
      return (
        (props.disabled && "none") ||
        (props.typeOfButton === "base" && "#393db6") ||
        (props.typeOfButton === "submit" && "#3b9b3a")
      );
    }};
  }

  ${maxWidth.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-left: 15px;
  }
`;

export default ButtonElement;
