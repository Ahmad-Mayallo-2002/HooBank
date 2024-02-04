import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { footerLinks } from "../constants";
export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="my-5">
                    <Col className="col-lg-3 col-md-6 col-12">
                        <img src={logo} className="img-fluid" width={200} alt="Logo" />
                        <p className="mt-5">A new way to make the payments easy, reliable and secure.</p>
                    </Col>
                    {
                        footerLinks.map(
                            (link) => {
                                const {title, links} = link;
                                return (
                                    <Col key={title} className="col-lg-3 col-md-6 col-12">
                                        <h4>{title}</h4>
                                        {links.map((link, index) => <a className="d-block text-decoration-none" href="/" key={index}>{link.name}</a>)}
                                    </Col>
                                )
                            }
                        )
                    }
                </Row>
                <div className="foot center-y-between">
                    <p className="mb-0">Copyright &copy; 2024 HooBank. All Rights Reserved.</p>
                    <a variant="success" href="https://github.com/Ahmad-Mayallo-2002" rel="noreferrer" target="_blank" className="btn btn-primary mb-0">
                        <i className="fa-brands fa-github me-2"></i>
                        GitHub
                    </a>
                </div>
            </Container>
        </footer>
    )
}