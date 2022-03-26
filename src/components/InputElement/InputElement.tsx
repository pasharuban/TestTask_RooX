import { FC, useState } from "react";
import styled from "styled-components";

import InputLabel from "../InputLabel/InputLabel";

import { baseInputStyles } from "../../constants/baseInputStyles";
import { InputElementTypes } from "../../types/types";

const Input = styled.input<{ disabled: boolean; isCorrect: boolean }>`
  width: 100%;

  padding: 5px 10px;
  margin-bottom: 10px;

  color: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.3)" : "#000000")};

  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};

  border: ${(props) =>
    props.isCorrect ? "1px solid #d8d8d8" : "1px solid #D91313;"};

  ${baseInputStyles()}
`;

const InputElement: FC<InputElementTypes> = ({
  label,
  value,
  type,
  name,
  disabled,
  required,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isCorrect, setIsCorrect] = useState(true);

  return (
    <InputLabel>
      {label}
      <Input
        type={type}
        value={inputValue}
        name={name}
        isCorrect={isCorrect}
        onChange={(e) => {
          if (!e.target.value) setIsCorrect(false);
          else setIsCorrect(true);
          setInputValue(e.target.value);
        }}
        disabled={disabled}
        required={required}
      />
    </InputLabel>
  );
};

export default InputElement;
