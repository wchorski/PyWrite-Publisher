import styled from 'styled-components'


export const StyledImage = styled.div`
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

`