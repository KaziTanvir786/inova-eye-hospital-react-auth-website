import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Nav style={{ marginLeft: "-20px" }} className="d-flex align-items-center w-50">

                        <div>
                            <span className="text-white fs-3">I N <span style={{ color: "#0bcfce" }}>O</span> V A</span> <br />
                            <span style={{ fontSize: "12px" }} className="text-white"><span className="me-1">E Y E</span> <span>H O S P I T A L</span></span>
                        </div>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="menu">
                        <Nav >
                            <Nav.Link as={HashLink} to="/home#home">HOME</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">ABOUT</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">SERVICES</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">DOCTORS</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#testimonials">TESTIMONIALS</Nav.Link>
                            <NavDropdown title="PAGES" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/services">ALL SERVICES</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/achievements">ACHIEVEMENTS</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            {
                                user.email ?
                                    <Nav.Link onClick={logOut}><span style={{ color: "#0bcfce" }}> <span className="fs-6">{user.displayName || user.email}</span> LOGOUT</span></Nav.Link>
                                    :
                                    <Nav.Link as={HashLink} to="/login"><span style={{ color: "#0bcfce" }}>LOGIN</span></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;