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

const Image = styled("img")`
    display: block;
    /* max-width:1400px;
    max-height:1000px; */
    justify-content:center;
    margin:auto;
    width: 50%;
    height: auto;
`

const Credits = styled.div`
    font-family: Courier;
    font-size: 12px;
    color: grey;
    text-align: right;
    margin-right: 25%
`

export default function CenteredImage(props) {
    return(
        <Container>
            <Image src={props.src}/>
            <Credits>{props.caption}</Credits>
        </Container>
    )
}

CenteredImage.propTypes = {
 caption: PropTypes.string
};