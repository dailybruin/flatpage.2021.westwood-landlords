import React from 'react';
import styled from 'styled-components';

const Creds = styled.div` 
    width: 100%;
    font-family: Courier;
    font-size: 18px;
    text-align: center;
    margin: 30px auto;
    color: #FFFFFF;
`

export default function CredsUnderLanding(props){
    return(
        <>
            <Creds>
                {props.children}
            </Creds>
        </>
    )
}