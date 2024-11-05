import { Button } from '@mui/material'

import { IoSearch } from 'react-icons/io5'


const SearchBox = () => {
  return (
    <div className="headerSearch">
    <input type="text" placeholder="Search for products..." ></input>
<Button> <IoSearch/></Button>
</div> 
  )
}

export default SearchBox