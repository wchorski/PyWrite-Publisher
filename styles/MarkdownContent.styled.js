import styled from 'styled-components'


export const StyledMarkdownContent = styled.section`

  max-width: 1200px;

  h1{
    color: red;
    text-decoration: line-through;
  }

  h2, h3, h4, h5, h6{
    margin: 3em 0 0 0;
  }

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
    content: "##";
    width:30px;
    height:20px;
    letter-spacing: -10px;
    /* background:red; */
    color: #ffffff59;
    display: block;
    float: left;
    margin-right: 5px;
  } 
  h4:before {
    content: "### ";
    width:40px;
    height:20px;
    letter-spacing: -10px;
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

  .codeblock-cont{
    position: relative;
    box-shadow: #0000004a 0px 0px 8px 1px;
    border-radius: 5px;
  
    .code-language{
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px 10px;
      background-color: var(--c-2);
    }
  }

`