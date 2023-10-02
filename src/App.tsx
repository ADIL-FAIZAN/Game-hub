import {Grid ,GridItem,HStack,Show,Flex} from "@chakra-ui/react";
import Navbar from'./components/Navbar'
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import{useState} from 'react';
import Heading   from './components/MainHeading';
import { Genres } from "./hooks/useGenre";
import Platforms from "./components/Platforms";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
export interface GameQuery{
  platform:Platform|null;
  genre:Genres|null;
  sortOrder:string;
  SearchText:string
}
function App() {
const[gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  return (
   <div>
<Grid templateAreas={{
base:`"nav"  "main"`,
lg:`"nav nav" "aside main"`,
}}
templateColumns={{
  base:'1fr',
  lg:'200px 1fr'
}}>
<GridItem area='nav'>
  <Navbar SearchText={(SearchText)=>setGameQuery({...gameQuery,SearchText})}/>
</GridItem>
<Show above="lg"> 
<GridItem  paddingX={5} area='aside'>
<GenreList SelectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
</GridItem>
</Show>
<GridItem area='main'>
  <Heading  headings={gameQuery}  />
<Flex marginBottom={5} marginTop={3}>
<Platforms  name={gameQuery.platform} setMenu={( platform)=>setGameQuery({...gameQuery,platform})}/>
<SortSelector  onSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
</Flex>
<GameGrid gameQuery={gameQuery} /></GridItem>
</Grid> 
   </div>
)}
export default App;
