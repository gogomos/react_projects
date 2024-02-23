import React from 'react'
import {Row, Accordion, Button} from 'react-bootstrap'
import { question } from '../data'
const QAList = ({ data, deleteOneItem}) => {
  const dataLocal = JSON.parse(localStorage.getItem("items"))
  const onDeleteItem = (id) => {
    if (localStorage.getItem("items")!= null) {
      const index = question.findIndex((item) => item.id === id)
      question.splice(index, 1)
      deleteOneItem(question)
    }
  }
  return (
    <Row>
    <Accordion>
      {
        localStorage.getItem("items")!= null ? (dataLocal.map((item, index) => {
          return (
          <Accordion.Item key={index} eventKey={item.id}>
            <Accordion.Header>{item.q}</Accordion.Header>
            <Accordion.Body className='text-start'>
              <div className='px-3 d-inline fs-5'>{item.a}</div>
              <Button onClick={() => onDeleteItem(item.id)} variant="primary">delete</Button>
            </Accordion.Body>
          </Accordion.Item>)
        })) : <h2>Data Not Found</h2>
      }
    </Accordion>
    </Row>
  )
}

export default QAList
