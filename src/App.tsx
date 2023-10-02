import {Grid ,GridItem,HStack,Show} from "@chakra-ui/react";
import Navbar from'./components/Navbar'
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import{useState} from 'react';
import { Genres } from "./hooks/useGenre";
import Platforms from "./components/Platforms";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";


export interface GameQuery{
  platform:Platform|null;
  genre:Genres|null;
  
}

function App() {
const[gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
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
<GridItem  paddingX={5} area='aside'><GenreList SelectedGenre={gameQuery.genre}   onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/></GridItem>
</Show>
<GridItem area='main'>
<HStack marginLeft={3} marginBottom={5} spacing={3}>
<Platforms  name={gameQuery.platform} setMenu={( platform)=>setGameQuery({...gameQuery, platform})}/>
<SortSelector/>
</HStack>
<GameGrid gameQuery={gameQuery} /></GridItem>
</Grid> 
   </div>
)}
export default App;
