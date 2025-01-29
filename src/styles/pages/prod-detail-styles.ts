import styled from 'styled-components';

export const StyledProdDetail = {
    Container: styled.div`
        font-family: Arial, sans-serif;
        padding: 16px 0;
    `,

    Content: styled.div`padding: 0 24px;`,

    Price: styled.p`
        color: green;
        font-weight: bold;
    `,

    Title: styled.h1`
        font-size: 24px;
    `,

    Tabs: styled.div`
        display: flex;
        margin: 16px 0;
    `,

    Tab: styled.button<{ active?: boolean }>`
        background: none;
        border: none;
        font-weight: bold;
        font-size: 16px;
        color: ${(props) => (props.active ? 'black' : 'gray')};
        margin-right: 16px;
        cursor: pointer;
    `,

    ProductImage: styled.img`
        width: 100%;
        height: auto;
        border-radius: 8px;
    `,

    Details: styled.p`
        margin: 16px 0;
        color: gray;
    `,

    Reviews: styled.div`
        margin: 24px 0;
    `,

    Review: styled.div`
        display: flex;
        margin-bottom: 16px;
    `,

    ReviewerImage: styled.img`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 12px;
    `,

    ReviewContent: styled.div``,

    ReviewerName: styled.p`
        font-weight: bold;
    `,
    Stars: styled.div`
        color: gold;
        margin: 4px 0;
    `,

    ReviewText: styled.p`
        color: gray;
    `,

    PostedAt: styled.p`
        font-size: 12px;
        color: lightgray;
    `,

    FeaturedProducts: styled.section`
        margin-top: 20px;
        padding: 24px;
        background-color: var(--colorsGreyLight_1);
        overflow: hidden;
    `,

    SectionHeader: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            font-size: 18px;
            font-weight: 400;
        }

        button {
            background: none;
            border: none;
            font-size: 14px;
            color: var(--colorsGreyDark_1);
            text-decoration: none;
        }
    `,
}