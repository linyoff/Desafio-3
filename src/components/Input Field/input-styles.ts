import styled from "styled-components";
                                         //variavel para definir se o input é clicavel ou não
export const InputContainer = styled.div<{ $clickable: boolean }>`
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