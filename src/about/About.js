import { withRouter } from "react-router-dom";
import { Container, Button, Row, Col } from 'react-bootstrap'
import Timeline from "./Timeline";
import { gotoDelegate } from "../utils/utils";
import './timeline.css'
import { AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai'
import { IconContext } from "react-icons";
import rockBackground from "./rock-background.jpg"
import { Helmet } from "react-helmet"

const About = (props) => {

    return <Container>

        {/* <p>ADARockPool is a mission driven pool. A pool that gives the delegators all the power. We  allow you, the delegators, the power to vote for what charity you think deserves a 2.5% donation for the following month.

            We are a small single pool operator who truly believe in the decentralisation of our beloved cardano network. We want to give back to the community who have chosen us to represent them.</p> */}
        <div
            style={{
                backgroundColor: "#080808",
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

        </div>

        <h1 className="center-text">What is ADARockPool?</h1>

        <p className="description">ADARockPool is a mission driven pool. A pool that gives the delegators all the power. We  allow you, the delegators, the power to vote for what charity you think deserves a 2.5% donation for the following month.

            We are a small single pool operator who truly believe in the decentralisation of our beloved cardano network. We want to give back to the community who have chosen us to represent them.</p>

        <h1 className="center-text">Our Timeline</h1>


        <Timeline />

        <h1 className="center-text">Our Pool</h1>
        <div className="our-pool">
            <iframe width="500" height="400" frameborder="0" src="https://js.adapools.org/widget.html?pool=39025777f1d7c42746bc961b03b1690c26db08153d458dc74fcb034b"><a href="https://adapools.org/pool/39025777f1d7c42746bc961b03b1690c26db08153d458dc74fcb034b">Detail</a></iframe>
        </div>


        <h1 className="center-text1">Please Consider Delegating, It Would Mean The World To Us 😊</h1>
        <Button variant="outline-light" className="Delegate" onClick={() => gotoDelegate(props)} >Delegate</Button>{' '}
        <br>
        </br>

        {/* <a class="twitter-timeline" data-width="500" data-height="500" href="https://twitter.com/ADAROCKPOOL?ref_src=twsrc%5Etfw">Tweets by ADAROCKPOOL</a>

        <Helmet>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        </Helmet> */}

        <h1 className="center-text1">Contact us on our socials! </h1>
        <div className="center-socials">
            <IconContext.Provider value={{ color: "white", size: "3em", style: { verticalAlign: 'middle' } }}>

                <a href="https://twitter.com/ADAROCKPOOL"><AiOutlineTwitter />{'    '}</a>


                <a href="https://www.facebook.com/ADAROCKPOOL" >{' '}<AiOutlineFacebook /></a>

            </IconContext.Provider>
        </div>
        <br>
        </br>


    </Container>
}





export default withRouter(About)