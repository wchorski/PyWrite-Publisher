import { createGlobalStyle} from "styled-components"


export const GlobalStyles = createGlobalStyle`

  @media (prefers-color-scheme: dark){
    :root{
      --c-1: goldenrod;
      --c-2: indianred;
      --c-3: #3e2e11; 

      --c-nav: #141414;
      --c-dark: #ffffff;
      --c-light: #000000;
      --c-code: #2c3540;
      --c-code-txt: #cccbbe;
      --c-head: #332f19;
      --c-strike: #808080;

      --c-txt: white;
      --c-body: #282623;
      --c-bold: #ffffbd;
      --c-ital: rgb(179, 179, 179);
    }
    html {
      color-scheme: dark;
    }
  }
  @media (prefers-color-scheme: light){
    :root{
      --c-1: goldenrod;
      --c-2: indianred;
      --c-3: #3e2e11;

      --c-nav: #575757;
      --c-dark: #ffffff;
      --c-light: #000000;
      --c-code: #4b5557;;
      --c-code-txt: #cccbbe;
      --c-head: #332f19;
      --c-strike: #808080;

      --c-txt: black;
      --c-body: whitesmoke;
      --c-bold: #ffffbd;
      --c-ital: rgb(179, 179, 179);
    }
    html {
      color-scheme: light;
    }
  }

  :root{
    --width-cont: 1000px;
    --b-hrzLine: solid var(--c-strike) 1px;

    font-size: 14px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  * {
    box-sizing: border-box;
  }

  html, body{
    padding: 0;
    margin: 0;
  }
  body {
    background: var(--c-body);
    color: var(--c-txt);
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    overflow: overlay;
    transition: all 0.30s linear;
    
  }

  /* width */  
  ::-webkit-scrollbar { 
    background: transparent;
    width: 5px;
    height: 10px;
    z-index: 999999;
  }  
    
  ::-webkit-scrollbar-track { 
    // box-shadow: inset 0 0 5px grey; 
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 999999;
  }  
    
  ::-webkit-scrollbar-thumb {  
    background: var(--c-1);  
    border-radius: 20px;
    z-index: 999999;
  }


  h2, h3 {
    scroll-margin-top: 16px;
  }
  @supports (-webkit-hyphens:none) { /* Safari-only */
    h2, h3 {
      padding-top: 16px;
      margin-top: -16px;
    }
  }
  a{
    color: var(--c-1);
    transition: .3s;
    text-decoration: dotted;

    &.btn--Med{
      background-color: var(--c-1);
      color: var(--c-dark);
      display: block;
      border: solid var(--c-1) 2px;
      border-radius: 5px;
      width: 7em;
      padding: .2em;
      margin-bottom: 1em;
      text-align: center;
      text-decoration: none;
    }
  }
  a:hover{
    opacity: .7;
  }

  button {
    cursor: pointer;
  }

  button.theme{
    position: absolute;
    top: 5px;
    left: 40px;
  }

  button.navSize{
    position: absolute;
    top: 5px;
    left: 5px;
  }

  ul, ol{
    li{
      margin-bottom: .4em;
    }
  }

  hr{
    border: var(--b-hrzLine);
  }
  strong{
    font-size: large;
    color: var(--c-strong);
  }
  i{
    color: var(--c-ital);
  }
  strike{
    color: var(--c-strike);
  }
  li.task-list-item:has(input:checked){
    opacity: .6;
    text-decoration:line-through;
  }

  code{
    background-color: var(--c-code);
    color: var(--c-code-txt);
    border-radius: 5px;
    padding: 0 .5em;
  }

  .tag{
    color: var(--c-txt);
    border: solid var(--c-1) 1px;
    border-radius: 20px;
    margin-right: .3em;
    padding: 0 1em;
  }

  section {
    padding: 1em;
    margin: 1em 0;
    background-color: var(--color-bg);
  }

  //* LAYOUT
  .layout-wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // margin: 0 auto;

    .content-cont{
      flex-grow: 1;
      // height: 100vh;
    }

    footer{
      width: 100%;
      margin-top: 15em;
    }
  }

  .horizontal-wrap{
    display: flex;
    height: 100vh;
    margin-right: auto;
  }

  // * TABLES
  table{
    width: 100%;
    border-bottom: 2px solid var(--c-3);

    thead{
      background-color: var(--c-3);
      color: var(--c-1);
      tr{

        th{
          padding: .5em;
          border-bottom: 2px solid var(--c-1);
        }
      }
    }

    tbody{
      tr{
        &:nth-child(even){
          background-color: rgba(255, 255, 255, 0.096);
        }
        
        &:hover{
          background-color: rgba(255, 255, 0, 0.123);
        }
        td{
          padding: .3em;
        }
      }
    }
  }

  // * IMAGES
  .imgWrapper{
    transition: 1s;
    display: inline-flex;
    flex-direction: column;
    margin: .5em;
    cursor: zoom-in;
    
    // img cont
    > span{ 
      outline: solid rgb(80, 80, 80) 1px;
      box-shadow: #000000 1px 1px 4px 2px;
      transition: inherit;
    }

    small.caption{
      color: grey;
      display: inline-table;
      text-align: end;
      padding: 1em .5em;
      transition: inherit;

      span{
        padding: 1em .5em;
      }
    }

    &:hover{
      > span{
        outline: dotted rgb(154, 154, 154) 1px;
        box-shadow: #000000a8 2px 2px 11px 5px;
      }

      small.caption{
        span{
          background-color: #303a00;
          color: rgb(204, 204, 204);
        }
      }
    }
  }
`