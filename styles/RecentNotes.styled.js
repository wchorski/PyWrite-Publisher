import styled from 'styled-components'


export const StyledRecentNotes = styled.section`

  h2{
    text-align: center;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
  }

  li{
    width: 300px;
    height: 300px;
    margin: 1em;
    padding: 1em;
    border: solid var(--c-2) 1px;
    border-radius: 4px;
    transition: 1s;
    
    a{
      text-decoration: none;

      h4{
        word-wrap: break-word;
        font-size: 25px;
        margin: 5px 0;
      }
      small{
        color: grey;
      }
  
      p{
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        overflow: hidden;
      }
    }

    &:hover{
      border: solid var(--c-1) 1px;
      box-shadow: black -1px 2px 9px 2px;

      h4{
        color: white;
      }
    }
  }
`