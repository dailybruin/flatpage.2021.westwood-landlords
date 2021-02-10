import React from "react";
import styled, { css } from "styled-components";
import { colors, fonts, mediaQueries } from "../shared/config";

const Container = styled.div`
  color: ${colors.white};
  font-family: ${fonts.text};
  width: 390px;
  height: 220px;
  border: 2px solid white;
  display: grid;
  place-items: center;
  font-size: 21px;
  position: absolute;
  margin: 100px;
  ${mediaQueries.tablet} {
    /* width: 360px;
    height: 130px; */
    width: 100%;
    position: static;
    margin: auto;
  }
`;
const TextContainer = styled.div`
  width: 330px;
  height: 180px;
  ${mediaQueries.mobile} {
    height: auto;
    width: auto;
    padding: 20px;
  }
`;
const QuoteShared = css`
  position: absolute;
  font-family: ${fonts.text};
  color: ${colors.white};
  font-size: 64px;
  height: 50px;
  ${mediaQueries.mobile} {
    height: 40px;
    font-size: 48px;
  }
`;
const QuoteOpen = styled.div`
  ${QuoteShared}
  left: -20px;
  top: 18px;
  ${mediaQueries.mobile} {
    top: 5px;
  }
`;
const QuoteClose = styled.div`
  ${QuoteShared}
  right: -20px;
  bottom: 18px;
  ${mediaQueries.mobile} {
    bottom: 5px;
  }
`;

const PullQuote = () => {
  return (
    <>
      <Container>
        <QuoteOpen>“</QuoteOpen>
        <TextContainer>
          Duis integer vivamus amet in nulla. Ultricies fames etiam mi sed
          tempor. Gravida eget donec dolor, morbi nibh purus. Semper rutrum
          massa amet aliquet auctor.
        </TextContainer>
        <QuoteClose>”</QuoteClose>
      </Container>
    </>
  );
};

export default PullQuote;