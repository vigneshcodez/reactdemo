
import { FaTrashAlt } from "react-icons/fa";


const Listitems = ({items,handelDelete,handleCheck}) => {
  return (
    <ul>
    {items.map((item)=>(
      <li className="item" key={item.id}>

        <input 
        type="checkbox"
        onChange={()=>handleCheck(item.id)}
        checked = {item.checked} />

        <label
        onDoubleClick={()=>handleCheck(item.id)}
        style={(item.checked? {textDecoration : "line-through" } : null)}>{item.item}</label>

        <FaTrashAlt 
        role="button"
        tabIndex={0}
        onClick={()=>handelDelete(item.id)}/>

      </li>
    ))}
  </ul>
  )
}

export default Listitems