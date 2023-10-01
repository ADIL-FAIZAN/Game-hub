import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react';

  import {BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform';



const Platform = () => {
const {Platform,error}=usePlatform()


  return (
   
    <div>
         {error&&<p>Your Platform Is Not Correct</p>}
      <Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    Platforms
  </MenuButton>
  <MenuList >
    {Platform.map(e=>
    <MenuItem key={e.id}>{e.name}</MenuItem>
    )}
  </MenuList>
</Menu>
    </div>
  )
}

export default Platform
