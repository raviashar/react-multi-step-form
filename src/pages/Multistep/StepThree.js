import React, { useState } from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';

function StepThree({ next, prev, handleInputChange, values}) {
    const [ validation, setValidation] = useState({
        password: false, confirmPassword: false,
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
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const validationErrorData = { ...validation };
        let isValidate = true;

        Object.keys(validation).map((inputValue) => {
            if(values[inputValue] === ''){
                validationErrorData[inputValue] = "This field is required";
                isValidate = false;
            }
            else {
                if(!values[inputValue].match(passwordPattern)){
                    validationErrorData[inputValue] = "Password must be 8 characters long, should contain at least one special char, one numeric, one caps, one small letter";
                    isValidate = false;
                }
                else if(inputValue === "confirmPassword" && values.confirmPassword !== values.password){
                    validationErrorData.confirmPassword = "Confirm password should be match with Password";
                    isValidate = false;
                }
                else {
                    validationErrorData[inputValue] = false;
                }
            }
        });
        setValidation(validationErrorData);
        return isValidate;
    }

  return (
    <>
        <div className="form-wrapper_three">
            <Form onSubmit={handleSubmitForm} noValidate autoComplete="off">  
                <Row>
                    <Col xs={12}>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name="password"
                                placeholder="Password"
                                defaultValue={values.password}
                                onChange={(e) => handleChange('password',e)}
                            />
                            { validation.password && (
                                <Form.Text style={{ color: "#FF2222"}}>
                                    {validation.password}
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                defaultValue={values.confirmPassword}
                                onChange={(e) => handleChange('confirmPassword',e)}
                            />
                            { validation.confirmPassword && (
                                <Form.Text style={{ color: "#FF2222"}}>
                                    {validation.confirmPassword}
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

export default StepThree