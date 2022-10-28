import styled from 'styled-components'


export const StyledSearchQuery = styled.div`
  border: solid 1px grey;

  ul{
    list-style: none;
    padding: 0;
    margin: 0;

    li.search-result-item{

      border-bottom: solid grey 1px;
      a{
        padding: 1em 1em 2em 1em;
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

        svg{
          font-size: 30px;
          margin-right: 10px;
        }

        span.title-meta{
          border-right: solid 1px yellow;
          margin-right: 1em;
          padding-right: 1em;
          width: 17rem;
          display: inline-block;
          text-align: right;
          word-wrap: break-word;

          line-clamp: 4;
          /* overflow: hidden; */
          /* text-overflow: ellipsis; */
        }

        span.content{
          p{
            color: white;
          }
        }


        small{
          position: absolute;
          bottom: 0;
          left: 10px;
          opacity: 0;
        }
      }
    }
  }
`