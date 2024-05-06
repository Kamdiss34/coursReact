import { useState } from "react";
import Navbar from "./composants/Navbar";
import Post from "./composants/Post";
import { Link } from "react-router-dom";
export default function App() {
 
  const [posts, setPosts] = useState([
    {
      id:1,
      titre: 'Kamal adissa',
      description:
      'Voici un exemple de texte qui vient juste remplacer ce texte ici',
      liker: false,
    },
    {
      id:2,
      titre: 'Deen adissa',
      description:
      'Voici un exemple de texte qui vient juste remplacer ce texte ici',
      liker: false,
    },
    {
      id:3,
      titre: 'Kamalowoadissa',
      description:
      'Voici un exemple de texte qui vient juste remplacer ce texte ici',
      liker: false,
    },
    {
      id:4,
      titre: 'Kamal adissa',
      description:
      'Voici un exemple de texte qui vient juste remplacer ce texte ici',
      liker: false,
    },
    {
      id:5,
      titre: 'Kamal adissa',
      description:
      'Voici un exemple de texte qui vient juste remplacer ce texte ici',
      liker: false,
    },
  ])
  const liker=(data)=>{
    const donnerCopier = [...posts]
    const index = posts.indexOf(data)
    donnerCopier[index] ={...posts[index],
      liker:!posts[index].liker}

      setPosts(donnerCopier);
    console.log(data)
  }
  const effacerPost=(id)=>{
    const nouveldonner = posts.filter((p)=>p.id != id);
    setPosts(nouveldonner)
  }
const nombreLiker = posts.filter(p=>p.liker)

  return (
    <div className='App'>
       <Link to="propos">visiter</Link>
       <Link to="blog">Visitez le blog</Link>
    
       <Navbar nombreLike={nombreLiker.length}/>
       {
        posts.map((p)=>(
          <Post data={p} key={p.id} liker={liker}
            suppression={effacerPost}
          />))
       }
      
    </div>
  );
}

