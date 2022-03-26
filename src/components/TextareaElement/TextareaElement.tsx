import { FC, useState } from "react";
import styled from "styled-components";

import InputLabel from "../InputLabel/InputLabel";

import { InputElementTypes } from "../../types/types";
import { baseInputStyles } from "../../constants/baseInputStyles";

const Textarea = styled.textarea<{ disabled: boolean }>`
  resize: none;

  width: 100%;
  max-width: 420px;
  height: 55px;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};

  ${baseInputStyles()};
`;

const TextareaElement: FC<InputElementTypes> = ({
  label,
  value,
  name,
  disabled,
  required,
}) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <InputLabel>
      {label}
      <Textarea
        value={inputValue}
        name={name}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        disabled={disabled}
        required={required}
      />
    </InputLabel>
  );
};

export default TextareaElement;
