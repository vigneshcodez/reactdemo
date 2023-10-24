
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from "react"


function App() {

  const [items, setItems] = useState(
    [
      {id:1,checked:"",item:"play cricket"},
      {id:2,checked:"",item:"play football"},
      {id:3,checked:"",item:"play vollyball"},
      {id:4,checked:"",item:"play basketball"},
    ]
  )

   function handleCheck(id){
    const listItems = items.map((item)=>
      item.id === id ? {...item, checked:!item.checked} : item)
      setItems(listItems)
    }

    function handelDelete(id){
      const listItems = items.filter((item)=>
        item.id !== id )
        setItems(listItems)
      }


    

  return (
    <div className="App">
      <Header title="vignesh lists" />
      <Content 
       items = {items}
       handleCheck = {handleCheck}
       handelDelete = {handelDelete}
       />
      <Footer length = {items.length} />
    </div>
  );
}

export default App;
