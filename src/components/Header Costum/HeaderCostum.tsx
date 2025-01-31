import React from 'react';
import { useCart } from '../../context/CartContext';  // Importa o contexto do carrinho
import { StyledHeader } from './header-styles';
import BackButton from '../Back Button/BackButton';

interface HeaderProps {
  text: string;
  onClick: () => void;
  icon: any;  // O ícone do cabeçalho, que pode ser qualquer ícone
}

const HeaderCostum: React.FC<HeaderProps> = ({ text, onClick, icon }) => {
  const { totalItems } = useCart();  //pega qtd total de itens do carrinho

  return (
    <StyledHeader.Container>
      <BackButton />
      <h1>{text}</h1>
      <StyledHeader.IconButton onClick={onClick}>
        {icon}
        {/*verifica se o ícone é o carrinho e exibe a quantidade de itens */}
        {icon.type?.displayName === 'ShoppingCart' && totalItems > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '37px',
              right: '12px',
              backgroundColor: 'var(--colorsGreen)',
              color: 'white',
              borderRadius: '50%',
              padding: '4px 6px',
              fontSize: '8px',
            }}
          >
            {totalItems}
          </div>
        )}
      </StyledHeader.IconButton>
    </StyledHeader.Container>
  );
};

export default HeaderCostum;
