import styled from 'styled-components';

export const StyledProdDetail = {
  Container: styled.div`
    font-family: Arial, sans-serif;
    padding: 16px 0;
  `,

  Price: styled.p`
    color: var(--colorsGreen);
    font-weight: bold;
    font-size: 16px;
    margin-top: 18px;
  `,

  Title: styled.h1`
    font-size: 28px;
    font-weight: bold;
    margin-top: 6px;
  `,

  Tabs: styled.div`
    display: flex;
    margin: 16px 0;
  `,
  Tab: styled.button<{ active?: boolean }>`
  font-weight: 400;
  font-size: 16px;
  background: none;
  border: none;
  margin-right: 34px;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.active &&
    `
    &::after {
      content: "";
      position: absolute; 
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 40%;
      height: 3px;
      background-color: var(--colorsGreen);
      border-radius: 5px;
    }
  `}
`,

  ProductImage: styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
  `,

  Overview: styled.div`
    
  `,

  Features: styled.div`
    padding: 0 24px;
    min-height: 50vh;
  `,

  Details: styled.p`
    font-size: 14px;
  `,

  Reviews: styled.div`
    margin: 24px 0;

    h3 {
      font-size: 16px;
      font-weight: 400;
      margin: 25px 0;
    }
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

  ReviewContent: styled.div`
    font-weight: 400;
  `,

  ReviewerName: styled.p`
    font-size: 16px;
  `,

  Stars: styled.div`
    color: gold;
    margin: 4px 0;
  `,

  ReviewText: styled.p`
    font-weight: 400;
    font-size: 14px;
  `,

  PostedAt: styled.p`
    font-size: 12px;
    margin: 4px 0;
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
};
