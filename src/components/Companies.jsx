import { Col, Container, Row } from "react-bootstrap";
import { clients } from "../constants";
import { useMediaQuery } from "@uidotdev/usehooks";

export const Companies = () => {
    const media = useMediaQuery("(max-width: 575px)");
    return (
        <section className="companies py-5">
            <Container>
                <figure className="center-y-between flex-wrap">
                    {
                        clients.map(
                            client => {
                                const {id, logo} = client;
                                return (<img src={logo} width={250} key={id} alt="Companies Logo" />)
                            }
                        )
                    }
                </figure>
                <Row className="p-5 center-y service rounded my-5">
                    <Col className="col-12 col-md-6">
                        <h2>Let’s try our service now!</h2>
                        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </Col>
                    <Col className={`col-12 col-md-6 ${media ? "text-center" : "text-end"}`}>
                        <button id="special-button">Get Started</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}