import { Container, Row, Col, Button} from 'react-bootstrap';
import FormInput from './components/FormInput';
import QAList from './components/QAList';
import { question } from './data';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [data, setData] = useState(question)
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]))
    setData([...question]) // i use the speard syntax to update teh array 
    notify("You add Question","success")
  }
  const deleteAllItems = () => {
    localStorage.removeItem("items")
    question.splice(0, question.length)
    setData([])
    notify("You Delete All Itemes", "error")
  }
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]))
    setData([...items])
    if (items.length <= 0) {
      deleteAllItems();
    }
    notify(`You Delete One Item`, "error")
  }
  const notify = (msg, type) =>{
    if (type === "error") {
      toast.error(msg)
    } else if (type === "success") {
      toast.success(msg)
    }
  };
  return (
    <div className="font text-center color-body">
      <Container className='p-5'>
        <Row className='judtify-content-center'>
          <Col sm="4">
            <div className="fs-3 text-center py-3" >Famais Questions & Answers</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {
              localStorage.getItem("items")!= null ? (<Button onClick={deleteAllItems} className='w-100 my-3' variant="primary">Delete All</Button> ) : null
              
            }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
