import logo from "../assets/logo.svg";
import { Container } from "react-bootstrap"
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState, useRef } from "react";
export const Header = () => {
    const medium = useMediaQuery("(max-width: 767px)");
    const [top, handleTop] = useState(true);
    const ref = useRef(null);
    const handleClick = () => {
        if (top === true) {
            ref.current.classList.add("links-active");
        } else {
            ref.current.classList.remove("links-active");
        }
        handleTop(!top);
    }
    return (
        <header className="position-relative">
            <Container className="center-y-between">
                <img src={logo} width={120} alt="Logo" />
                <nav>
                    <ul ref={ref} className={`d-flex mb-0 ${medium && "bg-color-dark"}`}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Solution</a></li>
                    </ul>
                </nav>
                <div onClick={handleClick} className="toggle text-white">
                    <i className="fa-solid fa-bars fs-2"></i>
                </div>
            </Container>
        </header>
    )
}