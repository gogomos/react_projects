import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
const ItemsList = ({itemsData}) => {
  return (
    <Row>
    {
      itemsData.length >= 1 ? (itemsData.map((item) => {
        return (<Col sm="12" className='m-2'>
          <Card className='d-flex flex-row'>
            <Card.Img className='img-item'  src={item.image} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between'>
                <div className='item-title'>
                  {item.title}
                </div>
                <div className='item-price'>
                  {item.price}
                </div>
              </Card.Title>
              <Card.Text className='py-2'>
                <div className='item-description'>
                  {item.desc}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>)
      })) : <h2>Data Not Found</h2>
    }
    </Row>
  )
}

export default ItemsList
