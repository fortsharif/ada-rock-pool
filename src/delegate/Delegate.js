import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import DelegateInfo from "./DelegateInfo";
import './delegate.css'

const Delegate = (props) => {

    return <Container>
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
        <h1 className="title">How do I delegate?</h1>
        <h2 className="title-step">Requirements:</h2>
        <ul className="requirement-list">
            <li>Cardano/ADA</li>
            <li>Yoroi application</li>
        </ul>
        <h2 className="title-step">Delegating:</h2>
        <DelegateInfo />



        <h2 className="title-step-bottom">Why should I stake though?</h2>
        <p className="text">We give power to the delegators 🔋, what does this mean? we let delegators choose what charity gets funding every month.</p>
        <br>
        </br>
        <p className="text">We're a small single pool operator that LOVES ❤️ its delegators, each delegation no matter how big or small means the 🌎 to us.</p>
        <br></br>
        <p className="text">You help us grow 🌱 and we'll help you gain more rewards 💰</p>
        <br></br>


    </Container>
}

export default withRouter(Delegate)