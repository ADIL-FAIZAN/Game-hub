import useGenres from "../hooks/useGenre"
import {Link} from "@chakra-ui/react";

const Genre = () => {
   const{genres}=useGenres();  

  return (
    <div>
    <ul>
      {genres.map(e=>
     <Link> <li>{e.name}</li></Link>
      )}
      </ul>
      
    </div>
  )
}

export default Genre
