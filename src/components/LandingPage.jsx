import React, { Component } from 'react'
import styled from 'styled-components'
import landingpage from '../images/landing.png'

const mql = window.matchMedia(`(min-width: 800px)`);

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
         <div style={{
               "font-family" : "Cormorant",
               "font-size" : mql.matches ? "70px" : "50px",
               "text-align": "center",
               "align-self":"center",
               "color": "white",
               "padding-bottom": "0.7em",
               "position": "absolute",
               "top": "35%",
               "left": "50%",
               "transform": "translate(-50%, -40%)",
               "line-height":"15px;"
         }}
         >Who Really Runs Westwood?</div>
         <div style={{
                "font-family" : "courier, Roboto",
                "font-size" : mql.matches ? "31px" : "20px",
                "text-align": "center",
                "align-self":"center",
                "color": "white",
                "padding-bottom": "0.7em",
                "position": "absolute",
                "top": "68%",
                "left": "50%",
                "transform": "translate(-50%, -40%)"
         }}>BY ZINNA FINN
         </div>
      </LandingPageContainer>
   )
}