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
  const handleInputFocusOut = (e) => {
    // TODO fix error "Uncaught TypeError: queryEl.current is not a function"
    const query = queryEl.current
    // console.log(e.target.classList);

    (!e.target.classList.contains('qitem'))
      ? query.classList.remove('open') 
      : console.warn('no qitem class found');
  }

  useEffect(() => {
    const input = inputEl.current

    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('pointerdown', handleInputFocusOut);

    input.addEventListener('focusin', handleInputFocusIn)
    // input.addEventListener('focusout', handleInputFocusOut)

  }, [])
  

  return (<>
    <StyledSearchBar className="searchbar-cont">
      <input 
        ref={inputEl}
        id="searchInput"
        className='qitem'
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
          <li key={link} className='search-result-item qitem'>

            <a href={link} className='qitem'> 

                {isDir ? <AiFillFolder /> : <TbMarkdown />}

                <span className='title-meta qitem'>
                  <strong className='title-meta qitem'>{name}</strong> 
                </span>

                <span className='excerpt qitem'>
                  <p>{excerpt}</p>  
                </span>

              <small className='qitem'>{link}</small>
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
