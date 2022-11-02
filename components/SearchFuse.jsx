import React, {useState} from 'react'
import Fuse  from "fuse.js";
// import jsonData from '../public/fakeNotesDB.json'
import jsonData from '../public/vaultTreeFlat.json'
import {RiFileSearchLine} from 'react-icons/ri'
import { AiFillFolder } from "react-icons/ai";
import { TbMarkdown } from "react-icons/tb";
import { StyledSearchQuery } from '../styles/SearchQuery.styled';
import { StyledSearchBar } from '../styles/SearchBar.styled';

export const SearchFuse = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const fuse = new Fuse(jsonData, {
    keys: [
      'name',
      'isDir',
      'link',
      'content'
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
    <StyledSearchBar className="searchbar-cont">
      {/* <button aria-label='search button'>
        <RiFileSearchLine />
      </button> */}
      <input 
        value={searchQuery}
        onChange={handleSearch}
        type="text" 
        placeholder='[ / ] to search'
      />
    </StyledSearchBar>
    
    <StyledSearchQuery className="searchquery-cont">
      <ul>
      {searchResults.map(res => {
        // console.log('res', res);
        const {name, isDir, link, excerpt} = res
        

        return(
          <li key={link} className='search-result-item'>

            <a href={link}> 

                {isDir ? <AiFillFolder /> : <TbMarkdown />}

                <span className='title-meta'>
                  <strong>{name}</strong> 
                </span>

                <span className='excerpt'>
                  <p>{excerpt}</p>  
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
