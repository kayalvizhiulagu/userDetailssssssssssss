import React from "react";
import { Button } from 'react-bootstrap';
import { ArrowRight,PencilFill,ArchiveFill,SendFill } from 'react-bootstrap-icons';
const FormPage = () => {
  return (
    <div className="container" style={{ marginTop: 50,borderRadius: '5px',border: '15px solid white',borderRadius: '5px!important' }}>
      <row>
          <form>
            <p className="h4 text-center mb-4">Write to us</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
              Subject
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4">
            </div>
          </form>
          <div className="text-center mt-4">
          <Button  variant="outline-primary" size="lg">
          <SendFill
           
           className="ml-2"  
            />  SEND
          </Button>
          <br />
          <br />
          </div>
          </row>
          </div>
  
  );
};

export default FormPage;