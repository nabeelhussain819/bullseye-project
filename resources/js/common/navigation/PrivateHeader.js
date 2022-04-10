// import libs
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import components
import {
    Button,
    Collapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";
import NavItem from "./NavItem";

// initiate Component
export default function PrivateHeader({
    user,
    showNavigation,
    showDropdown,
    toggleDropdown,
    logout,
}) {
    return (
        <Collapse className="navbar-collapse" isOpen={showNavigation}>
            <ul className="navbar-nav mr-auto">
                <NavItem path="/">Home</NavItem>
                <NavItem path="/consumers">Consumers</NavItem>
                {/* <NavItem path="/links">Links</NavItem> */}
                <NavItem path="/survey">Survey</NavItem>
                <NavItem path="/claims">Claims</NavItem>
            </ul>

            <ul className="navbar-nav">
                <Button onClick={(e) => logout(e)}>
                    <span
                        className="fa fa-sign-out"
                        title="logout"
                        aria-hidden="true"
                    />
                    Logout
                </Button>
            </ul>
        </Collapse>
    );
}

// bind properties
PrivateHeader.displayName = "PrivateHeader";
PrivateHeader.propTypes = {
    user: PropTypes.object.isRequired,
    showNavigation: PropTypes.bool.isRequired,
    showDropdown: PropTypes.bool.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
};
