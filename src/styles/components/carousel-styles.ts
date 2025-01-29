import styled from 'styled-components';
import { Swiper } from "swiper/react";

export const StyledCarousel = styled(Swiper)`
  margin-top: 20px;

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    background: var(--colorsDefault);
  }
`;