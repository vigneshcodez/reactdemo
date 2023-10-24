

import Listitems from "./Listitems";



const Content = ({items,handelDelete,handleCheck}) => {

  // const [name,setName] = useState("vignesh")

  // function randomnames(){
  //   const names = ["vignesh","ravi","dinesh"]
  //   let rname = Math.floor(Math.random()*3)
  //   setName(names[rname]) 
  // }

  // return (
  //   <main>
  //     <p>hello, {name}</p>
  //     <button onClick={() => randomnames()}>subscribe</button>
  //   </main>
  // )   
  // i will become agood trader in feature  so i will make more money in the feature so i will become rich in the whoe context .so dont make me fool in the final i will become please make me fool in the  my favourite stocks in the market is tesla,infy,tatasteel in the whe market so iwill always buy in dip not single purchase ,but in all markets dip so

   

  return(
    <main>
      {(items.length) ? (
        <Listitems
        items = {items}
        handleCheck = {handleCheck}
        handelDelete = {handelDelete}
         />
      ) : (
        <p>list is empty</p>
      )
}

    </main>
  )


}

export default Content