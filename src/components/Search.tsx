
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface props{
  SearchText:(searchText:string)=>void
}


const Search = ({SearchText}:props) => {

const ref=useRef<HTMLInputElement>(null);
const handleSubmit=(e:React.FormEvent)=>{
  e.preventDefault();
  if(ref.current)
  SearchText(ref.current.value)
}
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <InputGroup>
      <InputLeftElement children={<BsSearch/>} />
      <Input ref={ref} borderRadius={20} width={1100}  variant="filled" placeholder="Search Games..." type="search"/>
      </InputGroup>
      </form>
    </div>
  )
}

export default Search;
