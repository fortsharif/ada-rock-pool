import React, { useEffect, useState, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import './hero.css'

const Introduction = (props) => {
    const index = useRef(0)
    const [hero, setHero] = useState('')
    const text = 'Welcome to ADA Rock Pool...'



    useEffect(() => {

    }, [])

    console.log('hmm')


    return <Container id="introduction">

        <h1>

            <Typewriter
                options={{
                    strings: ['Welcome to ADA Rock Pool', 'Single SPO', '2.5% Donated to Charity!'],
                    autoStart: true,
                    delay: 50,
                    loop: true

                }} />
        </h1>
        <p id="text">'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'</p>

    </Container>
}

export default withRouter(Introduction)