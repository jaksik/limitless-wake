import React from 'react';
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
import Brand from "../images/logo.png"

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
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand className="NavbarBrand" href="/">
                        <img src={Brand} width="100%" height="100%" className="navBrand d-inline-block align-top" alt="" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Resources
                                </DropdownToggle>
                                <DropdownMenu>
                                    <a href="/pricing">
                                        <DropdownItem>
                                            Pricing
                                        </DropdownItem>
                                    </a>
                                    <a href="/locations">
                                        <DropdownItem>
                                            Locations
                                        </DropdownItem>
                                    </a>
                                    <a href="/boat-rentals">
                                        <DropdownItem>
                                            Boat Rentals
                                        </DropdownItem>
                                    </a>
                                    <a href="/faq">
                                        <DropdownItem>
                                            FAQ
                                        </DropdownItem>
                                    </a>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/gallery">Gallery</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}