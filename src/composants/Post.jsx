
export default function Post({data,liker,suppression}) {
  return (
    <div className='post'>
     
    <div>
        <h2>{data.titre}</h2>
        <p>{data.description}</p>
    </div>
    <div className='btn'>
   
    <button onClick={()=>liker(data)}>{data.liker ? "Deja liker": "liker"}</button>
    <button className='delete' onClick={()=>suppression(data.id)}>Effacer</button>
    </div>
    </div>
  )
}

