import React from 'react';
import { Link } from "gatsby"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Brand from "../images/limitless-logo.png"
import "./navbar.css"

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md" id="navbar">
                    <NavbarBrand className="NavbarBrand">
                        <Link to="/"><img src={Brand} width="100%" height="100%" className="navBrand d-inline-block align-top" style={{ maxWidth: `100px`, marginBottom: `0px` }}alt="Limitless Wake Logo" /></Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><Link to="/" style={{ color: `lightgray`}}>Home</Link></NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret style={{ color: `lightgray`}}>
                                    Resources
                                </DropdownToggle>
                                <DropdownMenu>
                                    <Link to="resources/pricing" style={{ color: `lightgray`}}>
                                        <DropdownItem>
                                            Pricing
                                        </DropdownItem>
                                    </Link>
                                    <Link to="resources/locations" style={{ color: `lightgray`}}>
                                        <DropdownItem>
                                            Locations
                                        </DropdownItem>
                                    </Link>
                                    <Link to="resources/rentals" style={{ color: `lightgray`}}>
                                        <DropdownItem>
                                            Boat Rentals
                                        </DropdownItem>
                                    </Link>
                                    <Link to="resources/faq" style={{ color: `lightgray`}}>
                                        <DropdownItem>
                                            FAQ
                                        </DropdownItem>
                                    </Link>
                                    <Link to="resources/testimonials" style={{ color: `lightgray`}}>
                                        <DropdownItem>
                                            Testimonials
                                        </DropdownItem>
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink><Link to="/about" style={{ color: `lightgray`}}>About</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/gallery" style={{ color: `lightgray`}}>Gallery</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/contact" style={{ color: `lightgray`}}>Contact</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}