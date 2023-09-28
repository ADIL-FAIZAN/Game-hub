import {Badge} from '@chakra-ui/react'

interface props{
criticScore:number,

}


const metacritic = ({criticScore}:props) => {
 let color= criticScore > 75 ? 'green' : criticScore  > 60 ? 'yellow':'' ;
    return (
    <div>
        
      <Badge colorScheme={color} ml="310px">{criticScore}</Badge>
       
    </div>
  )
}

export default metacritic
