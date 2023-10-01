import {Card,Image,Heading,CardBody,Text} from '@chakra-ui/react'
import {Game} from '../hooks/useGame';
import PlateFormIcons from './plateformIcons';
import Metacritic from './metacritic';

interface props{

    data:Game,
}

const GameCard = ({data}:props) => {
  return (
    <div>
      <Card >

<Image src={data.background_image}/>
<CardBody>
<Heading fontSize="2xl">{data.name}</Heading>
<PlateFormIcons  iconData={data.parent_platforms.map(e=>e.platform)}  />
<Metacritic criticScore={data.metacritic}/>
</CardBody>
      </Card>


    </div>
  )
}

export default GameCard;
