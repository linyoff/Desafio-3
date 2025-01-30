import React from 'react';
import { StyledHeader } from './header-styles';
import BackButton from '../Back Button/BackButton';

interface HeaderProps {
    text: string;
    onClick: () => void;
    icon: any;
}

const HeaderCostum: React.FC<HeaderProps> = ({ text, onClick, icon }) => (
    <StyledHeader.Container>
        <BackButton></BackButton>
        <h1>{text}</h1>
        <StyledHeader.IconButton onClick={onClick}>
            {icon}
        </StyledHeader.IconButton>
    </StyledHeader.Container>
);

export default HeaderCostum;