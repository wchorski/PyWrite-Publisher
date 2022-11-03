import styled from 'styled-components'


export const StyledSearchQuery = styled.div`
  border: solid 1px grey;
  border-radius: 5px;
  margin-top: 1em;
  position: absolute;
  top: 0;
  left: 20%;
  /* background-color: blue; */
  background-color: #202020cc;
  backdrop-filter: blur(4px);
  height: 90vh;
  overflow-y: auto;
  z-index: 999999;
  box-shadow: #000000a8 4px 9px 16px 3px;
  transition: .5s;
  opacity: 0;


  &.open{
    opacity: 1;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;

    li.search-result-item{
      padding: 0;

      border-bottom: solid grey 1px;
      a{
        padding: 1em 1em 1.3em 1em;
        text-decoration: none;

        display: flex;
        position: relative;
        /* flex-wrap: wrapz; */
        transition: .2s;

        &:hover{
          background-color: #ffffff0f;

          small{
            opacity: 1;
          }
        }
      }
      
      svg{
        font-size: 30px;
        margin-right: 12px;
      }

      span.title-meta{
        border-right: solid 1px yellow;
        margin-right: 1em;
        padding-right: 1em;
        /* width: 17rem; */
        width: 7em;
        display: inline-block;
        text-align: right;
        word-wrap: break-word;

        line-clamp: 4;
        /* overflow: hidden; */
        /* text-overflow: ellipsis; */
      }

      span.excerpt{
        max-width: 20em;

        p{
          color: white;
          font-size: 16px;
          -webkit-line-clamp: 6;
          word-break: break-all;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }


      small{
        position: absolute;
        bottom: 0;
        left: 10px;
        opacity: 0;
        font-size: 10px;
      }
      
    }
  }
`