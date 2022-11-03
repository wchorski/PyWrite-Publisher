import styled from 'styled-components'


export const StyledTableOfContents = styled.div`
  position: sticky;
  position: -webkit-sticky; /* For Safari */
  top: 0px; 

  /* Give table of contents a scrollbar */
  max-height: calc(100vh - 40px);
  overflow: auto;
  margin-left: 1em;

  & > hr {
    margin-top: 0;
  }

  h5{
    font-size: 20px;
    margin-bottom: .1em;
  }

  nav {

    a {
      color: grey;
      text-decoration: none;
    }

    ul {  
      list-style: none; 
      // width: 200px; 
      text-indent: -25px; // MUST MATCH key property
      margin-left: 25px; //  MUST MATCH key property  */
      margin-bottom: 5px;
    }
    li { margin-bottom: 1px; }

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
      /* font-weight: 900; */
      padding: 0;

  

      li:before {
        content: "#";
        width:10px;
        height:20px;
        color: #ffffff59;
        /* display: block; */
        /* float: left; */
        /* margin-right: 5px; */
      } 
      /* li ul{
        padding-left: 1em;
      } */

    }
  }
`