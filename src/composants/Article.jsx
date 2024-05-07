
import { useParams } from 'react-router-dom'
export default function Article({estConnect}) {


    const {id} = useParams();

    return (
   
    <div>Article avec id: {id}</div>
  )
}
