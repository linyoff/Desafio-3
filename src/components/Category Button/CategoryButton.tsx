import React from 'react';
import { StyledCatButton, StyledSortButton } from './category-bt-styles';

interface CategoryButtonProps {
  text: string;
  onClick?: () => void;
}

export const CategoryButton: React.FC<CategoryButtonProps & { isSelected?: boolean }> = ({
  text,
  onClick,
  isSelected,
}) => (
  <StyledCatButton onClick={onClick} className={isSelected ? "selected" : ""}>
    {text}
  </StyledCatButton>
);


export const CategoryButtonSort: React.FC<CategoryButtonProps & { isSelected?: boolean }> = ({
  text,
  onClick,
  isSelected,
}) => (
  <StyledSortButton onClick={onClick} className={isSelected ? "selected" : ""}>
    {text}
  </StyledSortButton>
);



