import React from 'react';
import { StyledCatButton, StyledSortButton } from '../styles/components/category-bt-styles';

interface CategoryButtonProps {
    text: string;
    onClick?: () => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({text, onClick}) => (
    <StyledCatButton onClick={onClick}>{text}</StyledCatButton>
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
  


