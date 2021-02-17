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
    float:right;
`

const Image = styled("img")`
    /* max-width:1400px;
    max-height:1000px; */
    justify-content:center;
    margin:5px;
    width: 80%;
    height: auto;
`

const Credits = styled.div`
    font-family: Courier;
    font-size: 12px;
    color: grey;
`

export default function LeftImage(props) {
    return(
        <Container>
            <Image  src={props.src}/>
            <Credits>{props.caption}</Credits> 
        </Container>
    )
}

LeftImage.propTypes = {
 caption: PropTypes.string
};