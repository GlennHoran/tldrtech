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
    NavLink} from 'reactstrap';

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
            <div className = "header">
                <Navbar color="faded" light expand="md">

                    <NavbarBrand >
                        <Link to = "/" className="siteTitle">TLDR:tech</Link>

                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to = "/About" className = 'navitem'>About</Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/GlennHoran">Github</NavLink>
                            </NavItem>
                            <NavItem>
                                <Link to = "/News" className = 'navitem'>News</Link>
                            </NavItem>
                            <NavItem>
                                <Link to = "/Reviews" className = 'navitem'>Reviews</Link>
                            </NavItem>
                            <NavItem>
                                <Link to = "/Projects" className = 'navitem'>Projects</Link>
                            </NavItem>
                            <NavItem>
                                <Link to = "/Tutorials" className = 'navitem'>Tutorials</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
