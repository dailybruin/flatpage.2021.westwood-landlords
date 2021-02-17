import './App.css';
import FullImage from './components/Full-Image.js';
import PullQuoteText from "./components/PullQuoteText";
import styled, { css } from "styled-components";
//import YouTube from 'react-youtube';
import {mediaQueries} from './shared/config';
import React, { useState, useEffect } from "react";
import CredsUnderLanding from './components/CredsUnderLanding'
import LandingPage from './components/LandingPage'
import SideBySideImage from './components/SideBySideImage'
import CenteredImage from './components/CenteredImage'
import Description from './components/Description'
import Banner from './components/Banner'
import LeftImage from './components/LeftImage'

require('typeface-cormorant')
require('typeface-karla')

const Paragraph = styled.div`
  font-family: Karla;
  font-weight: 300;
  font-size: 21px;
  margin: 0 200px;
  text-align: left;
  line-height: 32px;
  margin-bottom: 20px !important;
  ${mediaQueries.mobile}{
    margin: 0 20px;
  }
  ${mediaQueries.tablet}{
    margin: 0 40px;
  }
`

const Note = styled.div`
  font-family: Merriweather;
  font-weight: 300;
  font-size: 16px;
  color: #FFFFFF;
  margin: 0 350px;
  text-align: center;
  line-height: 32px;
  margin-bottom: 40px !important;
  ${mediaQueries.mobile}{
    margin: 0 20px;
  }
  ${mediaQueries.tablet}{
    margin: 0 40px;
  }
`

const Credits = styled.div`
  font-family: Courier;
  font-size: 12px;
  color: white;
  text-align: right;
  margin: 0 350px;
  ${mediaQueries.mobile}{
    margin: 0 20px;
  }
  ${mediaQueries.tablet}{
    margin: 0 40px;
  }
  margin-bottom: 20px !important;
`

const BottomCreds = styled.div`
  font-family: Courier;
  font-size: 13px;
  color: grey;
  border-top: 2px solid black;
  padding: 20px 0 200px 0;
  margin-top: 200px !important;;
  margin: 0 350px;
  ${mediaQueries.mobile}{
    margin: 0 20px;
  }
  ${mediaQueries.tablet}{
    margin: 0 40px;
  }
`

const Subheader = styled.div`
  color: white;
  font-weight: bold;
  font-family: Courier;
  font-size: 28px;
  text-transform: uppercase;
  margin: 0 350px;
  text-align: left;
  margin-bottom: 20px !important;
  ${mediaQueries.mobile}{
    margin: 0 20px;
  }
  ${mediaQueries.tablet}{
    margin: 0 40px;
  }
`


function App() {
  const  [ data, setData ] = useState({})

	useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/prime/prime.westwood-landlords/")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])
  return (
    <div className="App">
      <LandingPage title={data.landing_text}/>
      <Description />
      <Banner/>
      
      {data.content &&
        data.content.map((block, index) => {
          if (block.type == "paragraph") {
            return (
              <Paragraph >{block.content}</Paragraph>
            )
          } else if (block.type === "full-image") {
            return(
              <FullImage src={block.image_link} caption={block.image_credits}/>
            )
          } else if (block.type == "side-by-side-images") {
            return (
            <SideBySideImage src1={block.image_link1} src2={block.image_link2} caption={block.image_credits} />
            )
          } else if (block.type == "centered-image") {
            console.log("centered");
            return (
            <CenteredImage src={block.image_link} caption={block.image_credits} />
            )
          }
         else if (block.type == "left-image") {
          return (
          <LeftImage src={block.image_link} caption={block.image_credits} />
          )
        }
            else {
            return(<></>)
          }
        })
      }
      <BottomCreds>
        Developed by Mattie Sanseverino and Denise Wang. Designed by Samantha Joseph.
      </BottomCreds>
    </div>
  );
}

export default App;
