import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
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
    DropdownItem } from 'reactstrap';

export class Navigation extends React.Component {
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
            <div className = "container">
                <Navbar color="faded" light expand="md">

                    <NavbarBrand >
                        <Link to = "/" className="siteTitle">TLDR:tech</Link>

                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>

                                    <Link to = "/About" className = 'about'>About</Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/GlennHoran">Github</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret ="/News">
                                    News
                                </DropdownToggle>

                                <DropdownMenu >
                                    <DropdownItem>
                                        Raspberry Pi
                                    </DropdownItem>
                                    <DropdownItem >
                                        Arduino
                                    </DropdownItem>

                                    <DropdownItem>
                                        3d Printing
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret >
                                    Reviews
                                </DropdownToggle>

                                <DropdownMenu >
                                    <DropdownItem >
                                        Raspberry Pi
                                    </DropdownItem>
                                    <DropdownItem >
                                        Arduino
                                    </DropdownItem>

                                    <DropdownItem >
                                        3d Printing
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret >
                                    Projects
                                </DropdownToggle>

                                <DropdownMenu >
                                    <DropdownItem >
                                        Raspberry Pi
                                    </DropdownItem>
                                    <DropdownItem >
                                        Arduino
                                    </DropdownItem>

                                    <DropdownItem >
                                        3d Printing
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
