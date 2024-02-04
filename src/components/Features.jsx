import { Container, Col, Row } from "react-bootstrap"
import { features } from "../constants";
import bill from "../assets/bill.png";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import card from "../assets/card.png";
import { feedback } from "../constants";
import image from "../assets/quotes.svg";

export const Features = () => {
    return (
        <section className="features text-white">
            <Container>
                <Row className="feat-1 row-gap-5 py-5">
                    <Col className="col-md-6 col-12">
                        <h2>You do the business, we’ll handle the money.</h2>
                        <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                        <button id="special-button">Get Started</button>
                    </Col>
                    <Col className="col-md-6 col-12">
                        {
                            features.map(
                                feature => {
                                    const {id, icon, title, content} = feature;
                                    return (
                                        <div className="feat d-flex" key={id}>
                                            <figure className="mb-0 me-3"><img src={icon} alt="Icon" /></figure>
                                            <div className="description">
                                                <h3>{title}</h3>
                                                <p>{content}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </Col>
                </Row>
                <Row className="feat-2 row-gap-5 py-5">
                    <Col className="col-12 col-md-6">
                        <img className="img-fluid" src={bill} alt="Bill" />
                    </Col>
                    <Col className="col-12 col-md-6">
                        <h2 className="mb-5">Easily control your billing & invoicing.</h2>
                        <p className="mb-5">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                        <figure>
                            <img className="me-4" src={apple} alt="Apple Store" />
                            <img src={google} alt="Google Play" />
                        </figure>
                    </Col>
                </Row>
                <Row className="feat-3 row-gap-5 py-5">
                    <Col className="col-12 col-md-6">
                        <h2>Find a better card deal in few easy steps.</h2>
                        <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                        <button id="special-button">Get Started</button>
                    </Col>
                    <Col className="col-12 col-md-6">
                        <img src={card} alt="Card" className="img-fluid" />
                    </Col>
                </Row>
                <Row className="feat-4 row-gap-5 py-5 center-y">
                    <Col className="col-12 col-md-6"><h2>What people are saying about us</h2></Col>
                    <Col className="col-12 col-md-6"><p className="mb-0">Everything you need to accept card payments and grow your business anywhere on the planet.</p></Col>
                </Row>
                <div className="feat-5 py-5 d-grid">
                    {
                        feedback.map(
                            feedback => {
                                const {id, img, content, name, title} = feedback;
                                return (
                                    <div className="my-card rounded" key={id}>
                                        <img src={image} width={42} className="img-fluid mb-3" alt="Quotes" />
                                        <p>{content}</p>
                                        <figure className="center-y column-gap-3">
                                            <img src={img} width={48} alt="Users" className="img-fluid"/>
                                            <figcaption>
                                                <h6>{title}</h6>
                                                <p className="mb-0">{name}</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </Container>
        </section>
    )
}