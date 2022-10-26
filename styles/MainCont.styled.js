import styled from 'styled-components'


export const StyledMainCont = styled.main`

  background-color: var(--c-bg);
  /* max-width: var(--width-cont); */
  /* margin: 0 auto;  */
  margin-right: auto; 
  /* padding-top: 1em; */
  min-height: 90vh;

  display: flex;
  flex-direction: column;


  /* height: 100vh; */
  
  overflow: hidden;
  &:hover{
    overflow: overlay;
  }

  .body-aside-cont{
    display: flex;
    flex-grow: 1;
  }

  .markdown-body{
    flex-grow: 1;
    min-width: 800px;
  }

  

`