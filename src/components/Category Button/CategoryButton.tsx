import React from 'react';
import { StyledCatButton, StyledSortButton } from './category-bt-styles';

interface CategoryButtonProps {
  text: string;
  onClick?: () => void;
}

//primeiro botao de categorias de headset e headphones 
export const CategoryButton: React.FC<CategoryButtonProps & { isSelected?: boolean }> = ({
  text,
  onClick,
  isSelected,
}) => (
  <StyledCatButton onClick={onClick} className={isSelected ? "selected" : ""}>
    {text}
  </StyledCatButton>
);

//botoes usados no filtro de pesquisa
export const CategoryButtonSort: React.FC<CategoryButtonProps & { isSelected?: boolean }> = ({
  text,
  onClick,
  isSelected,
}) => (
  <StyledSortButton onClick={onClick} className={isSelected ? "selected" : ""}>
    {text}
  </StyledSortButton>
);



