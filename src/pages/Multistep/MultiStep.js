import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import ThankYou from './ThankYou';
import './style.scss';

function Multistep() {
    const [stepCount, setStepCount] = useState(1);
    const [ data, setData ] = useState({
        firstName: "",
        lastName: "",
        secondName:"",
        password: "",
        confirmPassword: "",
        email: "",
        confirmEmail: "",
        accept: false,
    });
    const next = () => {
        setStepCount(stepCount + 1);
    }

    const prev = () => {
        setStepCount(stepCount - 1);
    }

    const clearStepCount = () => {
        setStepCount(1);
        Object.keys(data).map((inputName)=> {
            data[inputName] = '';
            if(inputName === 'accept'){
                data[inputName] = false;
            }
        });
    }

    const handleInputChange = (input,event) => {
        let {value}  = event.target; 
        if(input === 'accept'){
            value  = event.target.checked; 
        }
        setData(prevState => ({ ...prevState, [input]: value}));
    }
    

  return (
    <>
        <div className="multi-step">
            <div className="multi-step_wrapper">
                <Container>
                        { stepCount <=4 && (
                            <Row>
                                <Col xs={12}>
                                    <ul className="multi-step_nav no-list-type">
                                        <li className={`multi-step_navitem ${stepCount === 1 ? 'active': '' || stepCount > 1 ? 'complete' : ''}`}>StepOne</li>
                                        <li className={`multi-step_navitem ${stepCount === 2 ? 'active': '' || stepCount > 2 ? 'complete' : ''}`}>StepTwo</li>
                                        <li className={`multi-step_navitem ${stepCount === 3 ? 'active': '' || stepCount > 3 ? 'complete' : ''}`}>StepThree</li>
                                        <li className={`multi-step_navitem ${stepCount === 4 ? 'active': '' || stepCount > 4 ? 'complete' : ''}`}>StepFour</li>
                                    </ul>
                                </Col>
                                <Col xs={12}>
                                    <div className="multi-step_body">
                                        <div className="form-wrapper">
                                            { stepCount === 1 ? 
                                                <StepOne next={next} handleInputChange={handleInputChange} values={data}/> : ''  ||
                                            stepCount === 2 ? 
                                                <StepTwo next={next} prev={prev} handleInputChange={handleInputChange} values={data}/> : ''  ||
                                            stepCount === 3 ? 
                                                <StepThree next={next} prev={prev} handleInputChange={handleInputChange} values={data}/> : ''  ||
                                            stepCount === 4 ? 
                                                <StepFour next={next} prev={prev} handleInputChange={handleInputChange} values={data}/>  : ''
                                            }
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {
                            stepCount === 5 && (
                                <Row>
                                    <Col xs={12}>
                                        <ThankYou clearStepCount={clearStepCount} />
                                    </Col>
                                </Row>
                        )}
                        {/* <Col xs={12}>
                            <div className="d-flex align-items-center multi-step_btn_listing">
                                <Button variant="outline-secondary" onClick={prev}>Previous</Button>
                                <Button variant="outline-secondary" onClick={next}>Next</Button>
                                <Button variant="outline-secondary">Submit</Button>
                            </div>
                        </Col> */}
                </Container>
            </div>
        </div>
    </>
  )
}

export default Multistep;