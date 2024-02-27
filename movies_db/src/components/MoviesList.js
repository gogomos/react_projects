import React from 'react'
import CardMovie from './CardMovie'
import PaginationList from './PaginationList'
import { Row} from "react-bootstrap"
const MoviesList = ({movies, getPage, pageCount}) => {
  return (
    <Row className="mt-3">
    {
      movies.length >= 1 ? (movies.map((item) => {
        return(<CardMovie key={item.id} item={item} />)

      })) : <h2>Data Not Found ...</h2>
    }
    {
      movies.length >= 1 ? (<PaginationList getPage={getPage} pageCount={pageCount} />) : null
    }
    
    </Row>
    )
  }
  
  export default MoviesList
  