import React from 'react'
import { PlayerContext } from '@/contexts/PlayerContext'
import { useContext, useState } from 'react'
import { SearchMusic } from '@/lib/api/authClient'
import { SearchMusics } from '@/lib/api/authClient'


const SearchBar = () => {
  const {result, setResult } = useContext(PlayerContext);

  const [  loading, setLoading ] = useState(false)
  const [  query, setQuery ] = useState("")

  const handleSearch = async (e) => {   
    e.preventDefault();
    setLoading(true)

  const data = await SearchMusic(`q=${query}&type=artist,album,playlist,show,episode,track,audiobook`)
  setResult([data])
  console.log(data)
  setLoading(false)

  }
  // const inputSearch = async (e) => {
  //   e.preventDefault();
  //   setLoading(true)
 
  // const content = await SearchMusics(`q=${query}&type=multi&offset=0&limit=10&numberOfTopResults=5`)
  // setResult([content])
  // console.log(content)
  // setLoading(false)

  // }
  return (
    <div>
       <form onSubmit={handleSearch}>
         <input
      type="text"
      placeholder='What do want to play?'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className='w-100
        p-3
        rounded-full
        bg-gray-900
        text-white
        focus:outline-none
        focus:ring-2
        focus:ring-green-500'
        
    />
    
       </form>
      
    </div>
  )
}

export default SearchBar
