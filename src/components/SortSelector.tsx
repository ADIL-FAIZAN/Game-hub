import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
   
        <div>
            
          <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       Order by:Relevance
      </MenuButton>
      <MenuList >
      <MenuItem>Relevance</MenuItem>
      <MenuItem>Data added</MenuItem>
      <MenuItem>Name</MenuItem>
      <MenuItem>Release date</MenuItem>
      <MenuItem>Popularity</MenuItem>
      <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
        </div>
  )
}

export default SortSelector
