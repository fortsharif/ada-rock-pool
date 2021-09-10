import { Container, Row, Col, Card } from "react-bootstrap"
import "./delegate.css"

const DelegateInfo = (props) => {


    return <Container className="steps">
        <Row xs={1} md={5} className="g-4" >

            <Col >
                <Card className="card-shadow">

                    <Card.Body>
                        <Card.Title>Step 1. </Card.Title>
                        <Card.Text>
                            Download the Yoroi extension <a href="https://chrome.google.com/webstore/detail/yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb">here</a> and add it to your browser of choice. When installed and pinned to your browser, go ahead and click the Yoroi icon, this will take you through the basic set up.

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="card-shadow">

                    <Card.Body>
                        <Card.Title>Step 2.</Card.Title>
                        <Card.Text>
                            Create a Cardano wallet and give it a name which you can track easily. Decide on a secure password and make sure you write down your 15 word passphrase down on a piece of paper!!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="card-shadow">

                    <Card.Body>
                        <Card.Title>Step 3.</Card.Title>
                        <Card.Text>
                            Go ahead and click done, this is your Yoroi wallet created. Now you want to send ADA to this wallet, go ahead and click on the RECEIVE tab from the top menu. It will show your wallet address, go ahead and copy this.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="card-shadow">

                    <Card.Body>
                        <Card.Title>Step 4.</Card.Title>
                        <Card.Text>
                            Transfer your ADA from your exchange to the Yoroi address you copied earlier. It should take a few minutes before it shows up in your wallet.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="card-shadow">

                    <Card.Body>
                        <Card.Title>Step 5.</Card.Title>
                        <Card.Text>
                            Once your ADA is in your wallet, you now want to delegate to ADARockPool. To do this, click on the delegate list tab on the top menu. In the search bar search for ADARockPool or AROCK (our ticker). Then click on the delegate button underneath the pool.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>
}


export default DelegateInfo