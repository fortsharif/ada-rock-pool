import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { AiOutlineDownCircle } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { Container, Button } from 'react-bootstrap'
import './hero.css'
import { gotoAbout } from '../utils/utils';
import { gotoDelegate } from '../utils/utils';

const Scroller = (props) => {


    return <Container id="scroller">
        <Button variant="outline-light" onClick={() => gotoAbout(props)}>About</Button>{' '}
        <Button variant="light" className="delegate" onClick={() => gotoDelegate(props)}>Delegate</Button>{' '}
    </Container>
}

export default withRouter(Scroller)