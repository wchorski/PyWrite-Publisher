import styled from 'styled-components'


export const StyledTableOfContents = styled.div`
  position: sticky;
  position: -webkit-sticky; /* For Safari */
  top: 24px; /* How far down the page you want your ToC to live */

  /* Give table of contents a scrollbar */
  max-height: calc(100vh - 40px);
  overflow: auto;

  nav {

    a {
      color: grey;
      text-decoration: none;
    }

    li.active {

      &:before {
        color: #fff;
      } 

      & > a {
        color: #f3d09f;
        text-decoration: dotted underline 1px;
      }
    }

    li > a:hover {
      color: white;
    }

    ul{
      list-style: none;
      font-weight: 900;

      li:before {
        content: "#";
        width:20px;
        height:20px;
        /* background:red; */
        color: #ffffff59;
        display: block;
        float: left;
        margin-right: 5px;
      } 
    }
  }
`