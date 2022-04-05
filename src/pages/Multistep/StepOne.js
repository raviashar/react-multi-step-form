import React, { useState } from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap';

function StepOne({ next, handleInputChange, values }) {
    
    const [ validation, setValidation ] = useState({
        firstName: false, 
        lastName: false
    });

    const handleSubmitForm = (event) => {
        event.preventDefault();
        if(checkInputValidation()){
            next();
        }
    }
    
    const handleChange = (input,e) =>{
        handleInputChange(input,e);
        const validationErrorData = { ...validation };
        Object.keys(validation).forEach((elem) => {
            if(input === elem) {
                validationErrorData[elem] = false;
            }
        });
        setValidation(validationErrorData);
    }

    const checkInputValidation = () => {
        let alphabeticPattern = /^[A-Za-z ]+$/;
        const validationErrorData = { ...validation };
        let isValidate = true;

        Object.keys(validation).map((inputValue) => {
            if(values[inputValue] === ''){
                validationErrorData[inputValue] = "This field is required";
                isValidate = false;
            }
            else {
                if(!values[inputValue].match(alphabeticPattern)){
                    validationErrorData[inputValue] = "Name should be in Alphabetics";
                    isValidate = false;
                }
                else {
                    validationErrorData[inputValue] = false;
                }
            }
        })
        setValidation(validationErrorData);
        return isValidate;
    }

  return (
    <>
        <div className="form-wrapper_one">
            <Form onSubmit={handleSubmitForm} noValidate autoComplete="off">
                <Row>
                    <Col xs={12}>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                type="text"
                                name="firstName" 
                                placeholder="First Name" 
                                defaultValue={values.firstName}
                                onChange={(e) => handleChange('firstName',e)}
                            />
                            
                            {validation.firstName && (
                                <Form.Text style={{ color: "#FF2222"}}>
                                    {validation.firstName}
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Second Name</Form.Label>
                            <Form.Control 
                                type="text"
                                name="secondName" 
                                placeholder="Second Name" 
                                defaultValue={values.secondName}
                                onChange={(e) => handleChange('secondName',e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="lastName" 
                                placeholder="Last Name" 
                                defaultValue={values.lastName}
                                onChange={(e) => handleChange('lastName',e)}
                            />
                            {validation.lastName && (
                                <Form.Text style={{ color: "#FF2222"}}>
                                    {validation.lastName}
                                </Form.Text>
                            )}
                        </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <div className="d-flex align-items-center multi-step_btn_listing">
                            <Button variant="outline-secondary" type="submit">Next</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    </>
  )
}

export default StepOne