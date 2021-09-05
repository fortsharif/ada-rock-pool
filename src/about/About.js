import { withRouter } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Timeline from "./Timeline";
import image from "./final.png"
import './timeline.css'
const About = () => {

    return <Container>
        <div >
            <img src={image} height={200} className="image"></img>
        </div>
        {/* <p>ADARockPool is a mission driven pool. A pool that gives the delegators all the power. We  allow you, the delegators, the power to vote for what charity you think deserves a 2.5% donation for the following month.

            We are a small single pool operator who truly believe in the decentralisation of our beloved cardano network. We want to give back to the community who have chosen us to represent them.</p> */}

        <h1 className="center-text">What is ADARockPool?</h1>

        <p className="description">ADARockPool is a mission driven pool. A pool that gives the delegators all the power. We  allow you, the delegators, the power to vote for what charity you think deserves a 2.5% donation for the following month.

            We are a small single pool operator who truly believe in the decentralisation of our beloved cardano network. We want to give back to the community who have chosen us to represent them.</p>


        <Timeline />

    </Container>
}





export default withRouter(About)