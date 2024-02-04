import { Col, Container, Row } from "react-bootstrap"
import image_1 from "../assets/Discount.svg";
import image_2 from "../assets/robot.png";
import { stats } from "../constants/index.js";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
export const Landing = () => {
    const [myState, method] = useState(false);
    return (
        <main className="landing text-white">
            <Container>
                <Row className="main-landing">
                    <Col className="col-12 col-lg-6">
                        <p className="text-uppercase d-flex center-y mt-3"><img src={image_1} className="me-3" alt="Discount" /> 20% discount for 1 month account</p>
                        <h1>The Next <span className="d-block">Generation</span> Payment Method.</h1>
                        <p className="mt-3 lh-lg">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
                    </Col>
                    <Col className="col-12 col-lg-6">
                        <img className="img-fluid" src={image_2} alt="Robot" />
                    </Col>
                </Row>
                <div className="stats py-5 d-grid">
                    {
                        stats.map(
                            (state, index) => {
                                const {id, title, value, symbol, million, dollar} = state;
                                return (
                                    <div className="state center-y column-gap-3" key={id}>
                                        <ScrollTrigger onEnter={() => method(true)} onExit={() => method(false)}>
                                            <span>{dollar}{myState && <CountUp start={0} end={value} duration={1} delay={.5} />}{million}{symbol}</span>
                                        </ScrollTrigger>
                                        <p className="mb-0">{title}</p>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </Container>
        </main>
    )
}