import{HStack,Image,Text} from '@chakra-ui/react'
import Logo from '../components/Logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import Search from '../components/Search'
interface props{
  SearchText:(searchText:string)=>void
}

const Navbar = ({SearchText}:props) => {
  return (
    <HStack justifyContent='space-between' padding="10px">

<Image src={Logo} boxSize="60px" />
<Search  SearchText={SearchText}/>
<ColorModeSwitch/>
    </HStack>
      
  )
}

export default Navbar
