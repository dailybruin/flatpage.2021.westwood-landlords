import React, { Component } from 'react'
import styled from 'styled-components'
import PRIME2 from '../images/PRIME2.svg'

export default function Banner(props) {
    return (
        <div style={{"padding": "100px 0px"}}>
            <img src={PRIME2} alt="PRIME" width="100%"/>
        </div>
    )
 }