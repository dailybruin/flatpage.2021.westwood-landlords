import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';


// https://cdn.vanderbilt.edu/vu-news/files/20190808112649/GettyImages-1084222130.jpg

const Container = styled("div")`
    font-size: 12px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 400;
    font-style: normal;
    text-align:center;
    justify-content:center;
    margin: 20px auto;
`

const ImageLeft = styled("img")`
    margin-top:50px;
    margin-right:0px;
    width: 60%;
    height: auto;
`

const ImageRight = styled("img")`
    margin-left: 0px;
    margin:auto;
    width: 60%;
    height: auto;
`

const Credits = styled.div`
    font-family: Courier;
    font-size: 12px;
    color: grey;
`

const Row = styled.div `
display: flex;

`
  
const Column1 = styled.div `
    text-align: right;
  flex: 30%;
  padding: 5px;
` 
const Column2 = styled.div `

  flex: 30%;
  padding: 5px;
  text-align: left;
` 

export default function SideBySideImage(props) {
    console.log("here")
    return(
<Container>
            <Row>
                <Column1>
                    <ImageLeft src={props.src1} />
                </Column1>
                <Column2>
                    <ImageRight src={props.src2}  />
                    <Credits>{props.caption}</Credits>
                </Column2>
            </Row>
            
</Container>
    )
}

SideBySideImage.propTypes = {
 caption: PropTypes.string
};