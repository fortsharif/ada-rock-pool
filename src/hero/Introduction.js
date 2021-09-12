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
                    strings: ['Welcome to ADARockPool', 'Single Pool Operator - Helping To Decentralise The Network', '2.5% Donated to Charity!', 'From the community, For the community', 'Stake ADA, Stake AROCK'],
                    autoStart: true,
                    delay: 50,
                    loop: true

                }} />
        </h1>
        <h4 id="text">ADARockPool is a mission driven pool. A pool that gives the delegators all the power. We  allow you, the delegators, the power to vote for what charity you think deserves a 2.5% donation for the following month. </h4>

    </Container>
}

export default withRouter(Introduction)