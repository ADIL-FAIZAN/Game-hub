import useGenres from "../hooks/useGenre";
import {Image, HStack, List,ListItem,Text, Spinner,SkeletonCircle,Box} from "@chakra-ui/react";

const Genre = () => {
   const{genres,isLoading,error}=useGenres();  
   const Skeletons=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  return (
    <>



    <List>
    {error&& 'null'}
      {isLoading&&Skeletons.map(e=><SkeletonCircle marginTop="20px" key={e} size='10' />)} 
      
      {genres.map(e=>
      <ListItem key={e.id}>
        <HStack>
       <Image  src={e.image_background} my="2" boxSize="32px" borderRadius={8}/>
       <Text fontSize="lg" >{e.name}</Text>
        </HStack>
        </ListItem>
      )}
      </List>
      
      </>
  )
}

export default Genre;
