import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function Bankdetails() {
  const {
  register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm();
  const onSubmit = (data) => {console.log(data);
    reset();
  }

  return(
    
    <>
    <br/><br/><br/>
    <h1>Bankdetails</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Row>
     <Col lg={5} className='mt-3'>
         <label>BankName :</label></Col>
           <Col lg={7} className='mt-3'> <input type="text" placeholder="Enter the BankName" {...register('BankName', { required: "Bank name is required",pattern: {
            value: "/^[A-Za-z]+$/;"   
           }})}/>
            {errors.BankName && (<p className='text-danger'>Bank name is required.</p>)}
         </Col>
         <Col lg={5} className='mt-3'>
         <label>AccountNumber :</label></Col>
         <Col lg={7} className='mt-3'>
            <input type="text" placeholder="Enter the AccountNumber" {...register('AccountNumber', { required: "AccountNumber is required", pattern: {
              value:"/^[0-9\b]+$/"
            }})}/>
            {errors.AccountNumber && (<p className='text-danger'>AccountNumberis required.</p>)}
         </Col>
           <Col lg={5} className='mt-3'>
         <label>IFSC Code  :</label></Col>
         <Col lg={7} className='mt-3'>
            <input type="text" placeholder="IFSC Code" {...register('IFSCCode', { required: "IFSCCode is required", pattern: {
              value: "/[A-Za-z0-9_@./#&+-]*$/"
            }})}/>
            {errors.IFSCCode && (<p className='text-danger'>IFSCCodeis required.</p>)}
         </Col>
           <Col lg={5} className='mt-3'>
         <label>Branch Name  :</label></Col>
         <Col lg={7} className='mt-3'>
            <input type="text" placeholder="Enter the BranchName" {...register('BranchName', { required: "BranchName is required",pattern:{
            value:  "[^a-zA-Z0-9]"
            } })}/>
          
            {errors.BranchName && (<p className='text-danger'>BranchNameis required.</p>)}
         </Col>


         
<Row className='text-center mt-3'>
        <Col sm={2} className="mx-auto"><Button className='mx-auto ms-5 me-5 btn-success' type="save">Create</Button>
      </Col>   
      </Row>
    </Row>
    </form>
    </>
    

    

         

  );
}
export default Bankdetails;