import useGenres from "../hooks/useGenre";
import {Image, HStack, List,ListItem,Text, Spinner,SkeletonCircle,Box,Button} from "@chakra-ui/react";

interface props{
  onSelectGenre:(genre:genre)=>void
  SelectedGenre:Genre|null
}


const Genre = ({onSelectGenre,SelectedGenre}:props) => {
   const{genres,isLoading,error}=useGenres();  
   const Skeletons=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


  return (
    <>
    <List>
    {error&& 'null'}
      {isLoading&&Skeletons.map(e=><SkeletonCircle marginTop="20px" key={e} size='10' />)} 
      
      {genres.map(each=>
      <ListItem key={each.id}>
        <HStack>
       <Image  src={each.image_background} my="2" boxSize="32px" borderRadius={8}/>
       <Button fontWeight={each.id===SelectedGenre?.id ?'bold':'normal'}onClick={()=>onSelectGenre(each)} variant="link">{each.name}</Button>
        </HStack>
        </ListItem>
      )}
      </List>
      
      </>
  )
}

export default Genre;
