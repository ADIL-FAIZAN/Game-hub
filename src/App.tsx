import {Grid ,GridItem,Show} from "@chakra-ui/react";
import Navbar from'./components/Navbar'
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import{useState} from 'react';
import { Genres } from "./hooks/useGenre";

function App() {
const [selectedGenre,setSelectedGenre]=useState<Genres|null>(null);

  return (
   <div>

<Grid templateAreas={{
base:`"nav"  "main"`,
lg:`"nav nav" "aside main"`
 
}}
templateColumns={{
  base:'1fr',
  lg:'200px 1fr'
}}>
<GridItem area='nav'><Navbar/></GridItem>
<Show above="lg">
<GridItem  paddingX={5} area='aside'><GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)}/></GridItem>
</Show>
<GridItem area='main'><GameGrid  SelectedGenre={selectedGenre}/></GridItem>
</Grid> 
   </div>
  )
}
export default App;
