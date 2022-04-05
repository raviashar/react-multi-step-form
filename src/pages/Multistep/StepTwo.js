import React, { useState } from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';

function StepTwo({ next, prev, handleInputChange, values }) {
    const [ validation, setValidation ] = useState({
        email: false, 
        confirmEmail: false,
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
        let emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        const validationErrorData = { ...validation };
        let isValidate = true;

        Object.keys(validation).map((inputValue) => {
            if(values[inputValue] === ''){
                validationErrorData[inputValue] = "This field is required";
                isValidate = false;
            }
            else {
                if(!values[inputValue].match(emailPattern)){
                    validationErrorData[inputValue] = "Email is not valid";
                    isValidate = false;
                }
                else if(inputValue === "confirmEmail" && values.confirmEmail !== values.email){
                    validationErrorData.confirmEmail = "Confirm email should be match with Email";
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
        <div className="form-wrapper_two">
            <Form onSubmit={handleSubmitForm} noValidate autoComplete="off">
                <Row>
                    <Col xs={12}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email"
                                placeholder="test@mailbox.com"
                                defaultValue={values.email}
                                onChange={(e) => handleChange('email',e)}
                            />
                            { validation.email && (
                                <Form.Text style={{ color: "#FF2222"}}>
                                    {validation.email}
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="confirmEmail"
                                placeholder="Confirm Email"
                                defaultValue={values.confirmEmail}
                                onChange={(e) => handleChange('confirmEmail',e)}
                            />
                            { validation.confirmEmail && (
                                <Form.Text style={{ color: "#FF2222"}}>
                                    {validation.confirmEmail}
                                </Form.Text>
                            )}
                        </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <div className="d-flex align-items-center multi-step_btn_listing">
                            <Button variant="outline-secondary" onClick={prev}>Previous</Button>
                            <Button variant="outline-secondary" type="submit">Next</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>  
    </>
  )
}

export default StepTwo