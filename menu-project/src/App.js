import {Container} from 'react-bootstrap'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import ItemsList from './components/ItemsList';
import { items } from './data';
import { useState } from 'react';
function App() {
  const [itemsData, setItemsData] = useState(items)
  //get all cat unique
  const allCaltegory = ["all", ...new Set(items.map((i) => i.category))]
  const filterbyCategory = (cat) => {
    if (cat === "all") {
      setItemsData(items)
    } else {
      const newarr = items.filter((item) => item.category === cat)
      setItemsData(newarr)
    }
  }
  const filterbySearch = (word) => {
    if (word !== "") {
      const newarr = items.filter((item) => item.title === word)
      setItemsData(newarr)
    }
  }
  return (
    <div>
    <NavBar filterbySearch={filterbySearch}/>
      <Container>
        <Header />
        <Category filterbyCategory={filterbyCategory}  allCaltegory={allCaltegory}/>
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
