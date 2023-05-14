import React, { useState } from 'react'
import {items} from '../data/items'
import Cards from './Cards';

function Body() {
  const [search, setSearch] = useState('')
  const [filter, setfilter] = useState(items)
  function handleFilter(searchText,items){
    const filtered = items.filter((item)=>item.name.toLowerCase().includes(searchText.toLowerCase()));
    setfilter(filtered);
  }
  return (
    <div className='body-div'>
    <div className='search-div'>
      <input type="search" className='search' placeholder='Search' value={search} onChange={(e)=>{
        setSearch(e.target.value);handleFilter(e.target.value,items)}} />
    </div>
    
    <div className="cards">
      {filter.map((item) => {
        return (
          <Cards item={item} key={item.id}/>
          );
        })}
    </div>
    </div>
  )
}

export default Body