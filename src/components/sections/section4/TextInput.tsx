import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 8px;
  color: #fff;
  font-weight: 500;
`;

const Input = styled.input`
  flex: 1;
  padding: 16px;
  font: inherit;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 3px 16px 5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
`;

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  as?: undefined; // This is for handling type differences between styled components input and extended input props
}

function TextInput(props: Props) {
  const { label, name, ...otherProps } = props;

  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input {...otherProps} id={name} name={name} />
    </InputContainer>
  );
}

export default TextInput;
