import React from 'react';
import { StyledCatButton } from '../styles/components/category-bt-styles';

interface CategoryButtonProps {
    text: string;
    onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({text, onClick}) => (
    <StyledCatButton onClick={onClick}>{text}</StyledCatButton>
);

export default CategoryButton;

