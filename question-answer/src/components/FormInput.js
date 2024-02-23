import React, { useState } from 'react'
import { Row, Form, Button,Col } from 'react-bootstrap'
import { question } from '../data';

const FormInput = ({onAdd, notify}) => {
  const [qu, setQu] = useState('')
  const [an, setAn] = useState('')
  const addNewItem = () => {
    if (qu === "" || an === "") {
      notify("please enter Data" , "error")
      return;
    }
    question.push({id:Math.random(),q : qu, a : an})
    setAn('')
    setQu('')
    onAdd()
  }
  return (
    <Row className='my-3'>
        <Col sm="5"  className="mb-2 mb-sm-0">
            <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="Enter Your Question" />
        </Col>
        <Col sm="5" className="mb-2 mb-sm-0">
            <Form.Control value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="Enter Your Answer" />
        </Col>
        <Col sm="2">
            <Button onClick={addNewItem} className='w-100' variant="primary" type="submit">
              Submit
            </Button>
        </Col>
    </Row>
  )
}

export default FormInput
