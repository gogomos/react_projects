import React from 'react'
import { Row , Col, Button} from 'react-bootstrap'

const DatesAction = ({deleteData, displayData}) => {
  return (
    <Row className="justify-content-center py-3">
      <Col sm="8" className="d-flex justify-content-between">
        <Button onClick={deleteData} variant="danger">Delete</Button>
        <Button onClick={displayData} variant="primary">Display</Button>
      </Col>
    </Row>
  )
}

export default DatesAction

