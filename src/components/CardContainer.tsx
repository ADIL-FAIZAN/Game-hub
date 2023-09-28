import {Box} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface props{
children:ReactNode;

}


const CardContainer = ({children}:props) => {
  return (
    <div>
      <Box width='300px' borderRadius="8px" overflow="hidden" padding="10px">{children}</Box>
    </div>
  )
}

export default CardContainer
