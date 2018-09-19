import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {
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
            <Navbar color="dark" dark expand="lg" fixed="top">
                <NavbarBrand href="/"><span className="rainbow">ShiKsha</span></NavbarBrand>
                <NavbarToggler onClick={ this.toggle } />
                <Collapse isOpen={ this.state.isOpen } navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/assignments">Assignments</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/typing/english">English Typing</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                More
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Book Suggestions
                                </DropdownItem>
                                <DropdownItem>
                                    Tests
                                </DropdownItem>
                                <DropdownItem>
                                    Help
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;