
import CardContainer from './CardContainer';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import useGame from '../hooks/useGame';

import {SimpleGrid} from '@chakra-ui/react';
import { GameQuery } from '../App';

interface props{
gameQuery:GameQuery;
}
const Skeletons=[1,2,3,4,5,6]
const GameGrid = ({gameQuery}:props) => {
const {game,error,isLoading}=useGame(gameQuery);   
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
