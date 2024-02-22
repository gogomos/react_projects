import { Container } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesListe from "./components/DatesListe";
import DatesAction from "./components/DatesAction";
import React, { useEffect, useState } from "react";
function App() {
  const [personData, setPersonData] = useState(person)
  const onDelete = () => {
    setPersonData([]);
  };
  
  const onDisplay = () => {
    setPersonData(person);
  };
  useEffect(() => {
    setPersonData([])
  }, [])
  return (
    <div className="font color-body">
      <Container className="py-5">
      <DatesCount person={personData} />
      <DatesListe person={personData} />
      <DatesAction deleteData={onDelete} displayData={onDisplay}/>
      </Container>
    </div>
  );
}

export default App;
