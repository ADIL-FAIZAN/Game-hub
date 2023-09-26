import {Grid ,GridItem,Show} from "@chakra-ui/react";

function App() {
 

  return (
   <div>

<Grid templateAreas={{
base:`"nav"  "main"`,
lg:`"nav nav" "aside main"`

}}>

<GridItem area='nav' bg='gold'>Nav</GridItem>
<Show above="lg">
<GridItem area='aside' bg='pink'>Aside</GridItem>
</Show>
<GridItem area='main' bg='red'>Main</GridItem>
 
 

  
   </Grid> 



   </div>


  )
}

export default App;
