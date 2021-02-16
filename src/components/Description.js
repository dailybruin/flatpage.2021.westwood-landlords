import React, { Component } from 'react'
import styled from 'styled-components'

const DescriptionText = styled.div`
    font-family: "Karla";
    font-size : 33px;
    text-align: center;
    align-self:center;
    color: black;
    padding-bottom: 0.7em;
    position: absolute;
    top: 145%;
    left: 50%;
    transform: translate(-50%, -40%);
    line-height: 40px;
    

`

const LandingPageContainer = styled.div`
   height:100vh;
   background-color : white;
   display: flex;
   justify-content: center;
`

const BackgroundContainer = styled.div`
   height:100vh;
   width: 100vw;
   background-position: center;
   background-size: cover;
   object-fit: cover;
`

export default function Description(props) {
    return (
        <>
       <LandingPageContainer>
           <BackgroundContainer>
               <DescriptionText>COVID-19 brought out the worst in Westwood landlords. But living in Westwood has always been a struggle of predatory landlords and ramshackle apartments.</DescriptionText>
            </BackgroundContainer>
       </LandingPageContainer>
       </>
    )
 }