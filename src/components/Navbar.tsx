import{HStack,Image,Text} from '@chakra-ui/react'
import Logo from '../components/Logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding="10px">
<Image src={Logo} boxSize="60px" />
<ColorModeSwitch/>
    </HStack>
      
  )
}

export default Navbar
