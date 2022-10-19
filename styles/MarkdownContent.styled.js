import styled from 'styled-components'


export const StyledMarkdownContent = styled.section`


  h2:before {
    content: "# ";
    width:20px;
    height:20px;
    /* background:red; */
    color: #ffffff59;
    display: block;
    float: left;
    margin-right: 5px;
  } 
  h3:before {
    content: "## ";
    width:20px;
    height:20px;
    /* background:red; */
    color: #ffffff59;
    display: block;
    float: left;
    margin-right: 5px;
  } 
  h4:before {
    content: "### ";
    width:20px;
    height:20px;
    /* background:red; */
    color: #ffffff59;
    display: block;
    float: left;
    margin-right: 5px;
  } 

  .active{
    color: #f3d09f;
    text-decoration: dotted underline 1px;
    filter: drop-shadow(8px 1px 7px #767a44);
  }

`