import CustomImg from 'global/CustomImg/CustomImg'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './footer.scss';

function footer() {
  return (
    <>
        <footer className="bg-dark mt-auto py-2">
            <Container>
              <Row>
                <Col>
                  <div className="d-flex align-items-center justify-content-center">
                      <CustomImg src="logo.svg" alt="React Logo" width="20px" height="20px" className="mx-100 mr-2"/>
                      <p className="text-white mb-0">React Bootstrap Practical</p>
                  </div>
                </Col>
              </Row>
            </Container>
        </footer>
    </>
  )
}

export default footer