import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Category = ({filterbyCategory, allCaltegory}) => {
  const onFilter = (cat) => {
    filterbyCategory(cat)
  }
  return (
    <Row>
      <Col sm="12" className='d-flex justify-content-center'>
      <div>
      {
        allCaltegory.length >= 1 ? (allCaltegory.map((cat) => {
          return (
            
                <button onClick={() => onFilter(cat)} style={ {border: "1px solid #b45b35"}} className="btn mx-2">{cat}</button>
            
          )
        })) : null
      }
      </div>
      </Col>
    </Row>
  )
}

export default Category
