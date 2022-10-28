import React, {useState} from 'react'
import Fuse  from "fuse.js";
// import jsonData from '../public/fakeNotesDB.json'
import jsonData from '../public/vaultTreeFlat.json'
import {RiFileSearchLine} from 'react-icons/ri'
import { AiFillFolder } from "react-icons/ai";
import { TbMarkdown } from "react-icons/tb";
import { StyledSearchQuery } from '../styles/SearchQuery.styled';

export const SearchFuse = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const fuse = new Fuse(jsonData, {
    keys: [
      'name',
      'isDir',
      'link'
    ],
    includeScore: true
  })

  const results = fuse.search(searchQuery)
  const searchResults = results.map(res => res.item)

  // console.log('results: ', results);


  function handleSearch( {target = {} } ){
    const {value} = target
    setSearchQuery(value)
  }

  return (<>
    <div className="searchbar-cont">
      <button aria-label='search button'>
        <RiFileSearchLine />
      </button>
      <input 
        value={searchQuery}
        onChange={handleSearch}
        type="text" 
        placeholder='[ / ] to search'
      />
    </div>
    
    <StyledSearchQuery className="searchquery-cont">
      <ul>
      {searchResults.map(res => {
        // console.log('res', res);
        const {name, isDir, link} = res
        

        return(
          <li key={link} className='search-result-item'>

            <a href={link}> 

                {isDir ? <AiFillFolder /> : <TbMarkdown />}

                <span className='title-meta'>
                  <strong>{name}</strong> 
                </span>

                <span className='content'>
                  <p>here is a bunch of text to look and vew that can be short of whatever needs it to be at all</p>  
                </span>

              <small>{link}</small>
            </a>
          </li>
        )
      })}
      </ul>
    </StyledSearchQuery>

    </>)
}
