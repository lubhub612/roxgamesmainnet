import styled, { css } from "styled-components";
// import { motion } from "framer-motion";

export const Illustration = styled.div`
  height: 100vw;
  max-height: 304px;
  padding: 0 24px;
  z-index: 5;

  @media (min-width: 768px) {
    grid-area: illustration;
    max-height: 460px;
    padding: 0;
  }

  @media (min-width: 1025px) {
    max-height: 754px;
  }
`;
export const SliderInnerDiv = styled.div`
  margin-top: 62px;
  min-width:100%;
  display: flex;
  justify-content: center;
`;
export const SliderDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 100%;
  justify-content: center;
  max-width: ${(props) => props.mobileImgWidth};
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: ${(props) => props.tabletImgWidth};
  }

  @media (min-width: 1025px) {
    max-width: ${(props) => props.desktopImgWidth};
  }
`;
export const Image = styled.div`
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  max-width: 450px;
  margin: 0 auto;

  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    width: 110px;
    height: 150px;
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateX(-50%);
  }

  @media (min-width: 768px) {
    max-width: 450px;
    &::before {
      top: 55%;
      width: 163px;
      height: 200px;
    }
  }

  @media (min-width: 1025px) {
    max-width:450px;

    &::before {
      top: 66%;
    }
  }

  ${(props) =>
    props.geo
      ? css`
          &::before {
            background-image: url(${props.geo});
          }
        `
      : ""};
`;
