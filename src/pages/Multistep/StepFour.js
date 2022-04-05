import React, { useState } from 'react';
import { Row, Form, Col, Button, InputGroup } from 'react-bootstrap';

function StepFour({next, prev, values, handleInputChange}) {

    const [validation, setValidation] = useState({
        accept: false,
    })
    
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
        const validationErrorData = { ...validation };
        let isValidate = true;
        
        Object.keys(validation).map((inputName) => {
            if(values[inputName] === false) {
                validationErrorData[inputName] = "This field is required";
                isValidate = false;
            }
            else {
                validationErrorData[inputName] = false;
            }
        });
        setValidation(validationErrorData);
        return isValidate;
    }
  return (
    <>
        <div className="form-wrapper_four">
            <Form onSubmit={handleSubmitForm} noValidate autoComplete="off">
                <Row>
                    <Col xs={12}>
                        <h4 className="form-wrapper_sub_title">By clicking "Accept" I agree that:</h4>
                    <ul>
                        <li>I have read and accepted the <a href="https:www.google.co.in" target="_blank" rel="noreferrer">User Agreement</a></li>
                        <li>I have read and accepted the <a href="https:www.google.co.in" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                        <li>I am at atleast 18 years old</li>
                    </ul>
                    <div>
                        <Form.Check 
                            type="checkbox"
                            label="Accept"
                            checked={values.accept}
                            onChange={(e) => handleChange('accept',e)}
                        />
                        { validation.accept && (
                            <Form.Text style={{ color: "#FF2222"}}>
                                {validation.accept}
                            </Form.Text>
                        )}
                    </div>
                    </Col>
                    <Col xs={12}>
                        <div className="d-flex align-items-center multi-step_btn_listing">
                            <Button variant="outline-secondary" onClick={prev}>Previous</Button>
                            <Button variant="outline-secondary" type="submit">Submit</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>  
    </>
  )
}

export default StepFour