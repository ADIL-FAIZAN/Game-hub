
import CardContainer from './CardContainer';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import useGame from '../hooks/useGame'; 
import { Genres } from '../hooks/useGenre';
import {SimpleGrid} from '@chakra-ui/react';


interface props{

  SelectedGenre:Genres| null
}


const Skeletons=[1,2,3,4,5,6]

const GameGrid = ({SelectedGenre}:props) => {
const {game,error,isLoading}=useGame(SelectedGenre);   

return(
<div>
  
    {error&&<p>{error}</p>}
<SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} spacing={1}>

{isLoading&&Skeletons.map(e=>
<CardContainer key={e}>
  <GameCardSkeleton/>
  </CardContainer>)}

{game.map(game=>
  <CardContainer key={game.id}>
    <GameCard  data={game}/>
  </CardContainer>
)}
</SimpleGrid>   
    </div>
  )
}

export default GameGrid;
