import React, { Component } from 'react'
import styled from 'styled-components'
import landingpage from '../images/landing.png'


const LandingPageContainer = styled.div`
   height:100vh;
   background-color : black;
   display: flex;
   justify-content: center;
`

const BackgroundContainer = styled.div`
   height:100vh;
   width: 100vw;
   background-image: url(${landingpage});
   background-position: center;
   background-size: cover;
   object-fit: cover;
`

const TextContainer = styled.div`
   font-family : "Cormorant";
   font-size : 80px;
   text-align: center;
   align-self:center;
   color: white;
   padding-bottom: 0.7em;
   position: absolute;
   top: 45%;
   left: 50%;
   transform: translate(-50%, -40%);
   line-height: 90px;
`
const Credits = styled.div`
    font-family : "courier","Roboto";
    font-size : 31px;
    text-align: center;
    align-self:center;
    color: white;
    padding-bottom: 0.7em;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -40%);
`



export default function LandingPage(props) {
   return (
       
      <LandingPageContainer>
         <BackgroundContainer />
         <TextContainer>Who Really Runs Westwood?</TextContainer>
         <Credits>BY ZINNA FINN</Credits>
      </LandingPageContainer>
   )
}