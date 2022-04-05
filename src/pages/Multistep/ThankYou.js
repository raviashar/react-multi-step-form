import React from 'react';
import { Button } from 'react-bootstrap';

function ThankYou({ clearStepCount }) {
  return (
    <>
        <div className="thank-you_wrapper text-center">
            <h1 className="thank-you_title">Thank You!</h1>
            <p className="thank-you_sub_title">Thank you for submitting the form</p>
            <Button onClick={clearStepCount}>Back to Form</Button>
        </div>
    </>
  )
}

export default ThankYou