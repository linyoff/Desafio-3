import React from "react";
import { InputContainer } from "../styles/components/input-styles";

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
