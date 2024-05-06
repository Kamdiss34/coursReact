import {useEffect, useState} from 'react'; 
export default function compteurr(props) {
 const [compteur,setCompteur] = useState(10);
 
 const incrementer = ()=>{
 setCompteur(compteur + 1)
 }
 const decrement = ()=>{
  setCompteur(compteur - 1)
 }
 useEffect(() => {
  alert(20);
})
  return (
    <>
    {props.ages  ?
    <p>Vous avez {props.ages}</p>: null  }
   
    <div className="compteur">
     <button onClick={incrementer}>+</button>
     <p className={compteur < 0  && "error"}>{compteur}</p>
     <button onClick={decrement} >-</button> 
    </div>
    </>
    
  )
}
