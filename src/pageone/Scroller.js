import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { AiOutlineDownCircle } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { Container, Button } from 'react-bootstrap'
import './hero.css'

const Scroller = (props) => {


    return <Container id="scroller">
        <Button variant="outline-light">About</Button>{' '}
        <Button variant="outline-light">Delegate</Button>{' '}
    </Container>
}

export default withRouter(Scroller)