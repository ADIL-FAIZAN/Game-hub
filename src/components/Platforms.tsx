import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react';
  import { Platform } from '../hooks/useGame'; 
  import {BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform';


interface Props{

    setMenu:(platform:Platform)=>void;
    name: Platform|null;
}
const Platforms = ({setMenu, name}:Props) => {
const {Platform,error}=usePlatform()


  return (
   
    <div>
         {error&&<p>Your Platform Is Not Correct</p>}
      <Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    {name?.name||'Platforms'}
  </MenuButton>
  <MenuList >
    {Platform.map(e=>
    <MenuItem key={e.id} onClick={()=>setMenu(e)}>{e.name}</MenuItem>
    )}
  </MenuList>
</Menu>
    </div>
  )
}
export default Platforms;
