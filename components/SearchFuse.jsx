import React, {useState, useEffect, useRef} from 'react'
import Fuse  from "fuse.js";
// import jsonData from '../public/fakeNotesDB.json'
import jsonData from '../public/vaultTreeFlat.json'
import {RiFileSearchLine} from 'react-icons/ri'
import { AiFillFolder } from "react-icons/ai";
import { TbMarkdown } from "react-icons/tb";
import { StyledSearchQuery } from '../styles/SearchQuery.styled';
import { StyledSearchBar } from '../styles/SearchBar.styled';

export const SearchFuse = () => {

  const queryEl = useRef(null);
  const inputEl = useRef(null);

  const [searchQuery, setSearchQuery] = useState('')
  const [queryElement, setqueryElement] = useState()
  const [inputElement, setinputyElement] = useState()

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

  const handleKeyUp = (event) => {
    const input = inputEl.current
    if(event.key === "/" )  input.focus()
    if(event.key === "Escape")  input.blur()
  };

  const handleInputFocusIn = (event) => {
    const query = queryEl.current
    query.classList.add('open')
  }
  const handleInputFocusOut = (event) => {
    const query = queryEl.current
    query.classList.remove('open')
  }

  useEffect(() => {
    const input = inputEl.current

    window.addEventListener('keyup', handleKeyUp);

    input.addEventListener('focusin', handleInputFocusIn)
    input.addEventListener('focusout', handleInputFocusOut)
  
    // return () => {
    //   // cleanup component 
    //   window.removeEventListener('keydown', handleKeyDown);
    //   window.removeEventListener('focusin', handleInputFocusIn)
    //   window.removeEventListener('focusout', handleInputFocusOut)
    // }
  }, [])
  

  return (<>
    <StyledSearchBar className="searchbar-cont">
      <input 
        ref={inputEl}
        id="searchInput"
        value={searchQuery}
        onChange={handleSearch}
        type="text" 
        placeholder='search garden...'
      />
    </StyledSearchBar>
    
    <StyledSearchQuery ref={queryEl} id="searchquery" className="searchquery-cont">
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
      {searchResults.length === 0 && (
        <li className='search-result-item'>
          <span className='title-meta'>
            <strong> No Results </strong> 
          </span>

          <span className='excerpt'>
            <p>...</p>  
          </span>  
        </li>
      )}

      </ul>
    </StyledSearchQuery>

    </>)
}
