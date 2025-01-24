import React from "react";
import styled from "styled-components";

interface InputFieldProps {
  type: string;
  placeholder: string;
  value?: string; //opcional em caso do campo ser clicável
  onChange?: React.ChangeEventHandler<HTMLInputElement>; //opcional em caso do campo ser clicável
  icon?: React.ReactNode; //opcional
  onClick?: React.MouseEventHandler<HTMLInputElement>; //se for clicável
  clickable?: boolean; //define se o campo é clicável
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
  onClick,
  clickable = false, //valor padrão é false para não clicável
}) => (
  //tipagem da prop como $clickable para ser usada apenas no styled-components e não ser passada para o DOM
  <InputContainer $clickable={clickable}>
    {icon && <div className="icon">{icon}</div>}
    <input
      type={type}
      placeholder={placeholder}
      value={clickable ? undefined : value} //ignora valor se for clicável
      onChange={clickable ? undefined : onChange} //ignora onChange se for clicável
      onClick={clickable ? onClick : undefined} //adiciona o onClick apenas se for clicável
      readOnly={clickable} //campo fica somente de leitura se for clicável
    />
  </InputContainer>
);

export default InputField;


const InputContainer = styled.div<{ $clickable: boolean }>`
  position: relative;
  margin-top: 20px;

  input {
    width: 100%;
    height: 50px;
    padding: 10px 45px;
    border: 1px solid var(--colorsGrey);
    border-radius: 10px;
    font-size: 0.9rem;
    background-color: "white";
  }

  input:hover {
    border: 1px solid var(--colorsGreenDark);
  }

  .icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--colorsGrey);
  }
`;
