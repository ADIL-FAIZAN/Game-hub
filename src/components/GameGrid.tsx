
import CardContainer from './CardContainer';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import useGame from './useGame';
import {SimpleGrid} from '@chakra-ui/react'
const Skeletons=[1,2,3,4,5,6]

const GameGrid = () => {
const {game,error,isLoading}=useGame();   

return(
<div>
    {error&&<p>{error}</p>}
<SimpleGrid padding="10px" columns={{sm:1,md:2,lg:3,xl:5}} spacing={10}>

{isLoading&&Skeletons.map(e=><CardContainer><GameCardSkeleton key={e}/></CardContainer>)}

{game.map(game=>
  <CardContainer><GameCard key={game.id}  data={game}/>
  </CardContainer>
)}
</SimpleGrid>   
    </div>
  )
}

export default GameGrid;
