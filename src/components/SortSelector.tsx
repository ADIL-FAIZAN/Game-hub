import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface props{
    onSortOrder:(sortOrders:string)=>void
}
const SortSelector = ({onSortOrder}:props) => {

   const sortOrders=[

{value:'',label:'Relevance'},
{value:'-added',label:'Date added'},
{value:'name',label:'Name'},
{value:'-released',label:'Release date'},
{value:'-metacritic',label:'Popularity'},
{value:'-rating',label:'Average rating'},
   ]
       return (
     <div>
     <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       Order by:Relevance
      </MenuButton>
      <MenuList >
      {sortOrders.map(order=><MenuItem onClick={()=>onSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
    </div>
  )
}

export default SortSelector
