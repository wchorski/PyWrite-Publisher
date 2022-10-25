import styled from 'styled-components'


export const StyledBreadCrum = styled.small`

  /* background-color: yellow; */

  /* cred to https://codepen.io/team/css-tricks/pen/xRmmdr */
  .arrows { 
    white-space: nowrap;
  }
  .arrows li {
      display: inline-block;
      line-height: 26px;
      margin: 0 9px 0 -10px;
      padding: 0 15px;
      position: relative;
  }
  .arrows li::before,
  .arrows li::after {
      border-right: 1px solid #666666;
      content: '';
      display: block;
      height: 50%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      z-index: -1;
      transform: skewX(45deg);   
  }
  .arrows li::after {
      bottom: 0;
      top: auto;
      transform: skewX(-45deg);
  }

  .arrows li:last-of-type::before, 
  .arrows li:last-of-type::after { 
      display: none; 
  }

  .arrows li a { 
    font: 15px Sans-Serif;  
    letter-spacing: -1px; 
    text-decoration: none;
  }

  .arrows li:nth-of-type(1) a { color: hsl(0, 0%, 40%); } 
  .arrows li:nth-of-type(2) a { color: hsl(0, 0%, 55%); } 
  .arrows li:nth-of-type(3) a { color: hsl(0, 0%, 60%); } 
  .arrows li:nth-of-type(4) a { color: hsl(0, 0%, 75%); } 

  .arrows a:hover{
    color: var(--c-1) !important;
    opacity: 1;
  }
`