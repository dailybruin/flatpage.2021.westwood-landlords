import PullQuote from "./PullQuote";
import styled, { css } from "styled-components";
import {mediaQueries} from '../shared/config';

const Container = styled.div`
    position: relative;
    margin: 0 350px;
    display: flex;
    
    ${mediaQueries.mobile}{
      margin: 0 20px;
      flex-direction: column;
    }
    ${mediaQueries.tablet}{
      margin: 0 40px;
      flex-direction: column;
    }
`
const Text = styled.div`
    width: calc(100% - 200px);
    font-family: Merriweather;
    font-size: 20px;
    color: #FFFFFF;
    text-align: left;
    font-weight: 300;
    line-height: 32px;
    margin-left: ${(props) => props.position == "right" ? "0px" : "200px"};
    ${mediaQueries.tablet}{
      width: 100%;
      margin-left: 0;
    }
`

const PullQuoteContainer = styled.div`
    position: absolute;
    left: ${(props) => props.position == "right" ? "500px" : "-350px"};
    ${mediaQueries.tablet}{
      left: 0;
      position: relative;
      margin-bottom: 10px;
    }
`

function PullQuoteText(props) {
  return (
    <Container>
      <PullQuoteContainer position={props.position}>
        <PullQuote />
      </PullQuoteContainer>
      <Text position={props.position}>
          {props.text}
      </Text>
      
    </Container>
  );
}

export default PullQuoteText;