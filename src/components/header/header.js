import React from 'react';
import { Navbar, Container, NavbarBrand} from 'react-bootstrap';
import CustomImg from 'global/CustomImg/CustomImg';
import "./header.scss";
function header() {
  return (
        <>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container className="justify-content-center">
                        <NavbarBrand className="d-flex align-items-center">
                            <CustomImg src="logo.svg" alt="React Icon" width="30" height="30" className="mx-100 mr-2"/>{' '}React Bootstrap
                        </NavbarBrand>
                    </Container>
                </Navbar>
            </header>
        </>
  )
}

export default header