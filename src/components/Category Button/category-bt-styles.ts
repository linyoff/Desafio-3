import styled from 'styled-components';

export const StyledCatButton = styled.button`
  background-color: var(--colorsGreyLight_1);
  border: none;
  padding: 5px 18px;
  border-radius: 20px;
  font-size: 14px;
  color: var(--colorsGreyDark_1);
  cursor: pointer;

  &:hover {
    background-color: var(--colorsGreen);
    color: var(--colorsWhite);
  }
  
  &.selected {
    background-color: var(--colorsGreen);
    color: var(--colorsWhite);
  }
`;

export const StyledSortButton = styled.button`
  background-color: var(--colorsGreyLight_1);
  border: 1px solid;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: var(--colorsGreen);
    color: var(--colorsWhite);
  }

  &.selected {
    background-color: var(--colorsGreen);
    color: var(--colorsWhite);
  }

`;