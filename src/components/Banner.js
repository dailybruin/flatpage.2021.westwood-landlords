import React, { Component } from 'react'
import styled from 'styled-components'
import PRIME from '../images/PRIME.png'

export default function Banner(props) {
    return (
        <div>
            <div style={{
                "padding": "50px",
                "text-align": "right",
                "font-family": "Barlow",
                "font-style": "italic",
                "font-size": "40px",
            }}>
                AN ONLINE EXCLUSIVE BY
            </div>
            <div style={{
                "float": "right", 
                "margin-right": "50px", 
                "transform": "translate(-25px, -25px)"
            }}>
                <img src={PRIME} alt="PRIME" width="100%"/>
            </div>
            <div style={{
                padding: "25px",
                "background-color": "black"
            }}/>
            <div style={{
                "text-align": "right",
                "font-family": "Barlow",
                "font-style": "italic",
                "font-size": "40px",
                "color": "white",
                "padding": "100px",
                "padding-right": "50px",
                "background-color": "black"
            }}>
                FROM THE DAILY BRUIN
            </div>
        </div>
    )
 }