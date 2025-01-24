import React from 'react';
import styled from 'styled-components';

interface CategoryButtonProps {
    text: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({text}) => (
    <StyledCatButton>{text}</StyledCatButton>
);

export default CategoryButton;

const StyledCatButton = styled.button`
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
`;