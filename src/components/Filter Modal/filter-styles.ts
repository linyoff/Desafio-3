import styled from "styled-components";

export const StyledFilterModal = {
    //overlay para deixar parecido com sombreado abaixo do modal de filtro
    Overlay: styled.div`
        position: fixed; //fixo na tela cobrindo toda a área visivel
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999; //coloca acima de outros elementos na tela.
        display: block; 
    `,

    Container: styled.div`
        position: fixed;
        box-sizing: border-box;
        bottom: 0;
        border-top-left-radius: 50px; //arredonda o canto superior
        border-top-right-radius: 50px;
        left: 0;
        right: 0;
        height: 50%;
        background: white;
        z-index: 1000; //modal acima do overlay.
        padding: 24px;
        transform: translateY(100%); //posiciona o modal fora da tela
        animation: slideIn 0.4s forwards; //animação

        @keyframes slideIn {
            to {
                transform: translateY(0); //faz o modal deslizar até a posição final
            }
        }
    `,

    Header: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    Title: styled.h3`
        font-size: 24px;
    `,

    Content: styled.div`
        margin-top: 20px;
    `,

    Section: styled.div`
        margin-bottom: 7px;

        h4 {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 15px;
        }
    `,
    ButtonGroup: styled.div`
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    `,
};
