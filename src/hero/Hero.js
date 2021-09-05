import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Introduction from './Introduction'
import Scroller from './Scroller'
import './hero.css'
import rockvideo from './video.mp4'


const Hero = (props) => {
    return <div id="home" >
        <video autoPlay loop muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1",
                backgroundSize: 'contain'
            }}>
            <source src={rockvideo} type="video/mp4" />
        </video>
        <Introduction />
        <Scroller />



    </div >
}

export default withRouter(Hero)