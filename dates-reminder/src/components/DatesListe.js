import React from 'react'
import { Row , Col} from 'react-bootstrap'
const DatesListe = ({person}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" >
            <div className="rectangle p-3">
            {person.length ? (person.map((item) => {
              return (
                <div key = {item.id} className="d-flex border-bottom my-2">
                  <img className="img-avatar" src= {item.img} />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.date}</p>
                  </div>
                </div>
              )
            })) : <h2 className="p-5 text-center">Data Not Found</h2>}    
            </div>
          </Col>
        </Row>
  )
}

export default DatesListe
