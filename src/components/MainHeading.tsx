import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App'

interface props{
    headings:GameQuery;
}


const MainHeading = ({headings}:props) => {

const Headingf=`${headings.platform?.name ||''}  ${headings.genre?.name||''} Games`;
  return (
    <div>
      <Heading  as="h1">{Headingf}</Heading>
    </div>
  )
}

export default MainHeading
