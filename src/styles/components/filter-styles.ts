import styled from "styled-components";

export const StyledFilterModal = {
    Overlay: styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: block; 
    `,

    Container: styled.div`
        position: fixed;
        box-sizing: border-box;
        bottom: 0;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        left: 0;
        right: 0;
        height: 50%;
        background: white;
        z-index: 1000;
        padding: 24px;
        transform: translateY(100%);
        animation: slideIn 0.4s forwards;

        @keyframes slideIn {
            to {
                transform: translateY(0);
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
