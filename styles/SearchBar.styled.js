import styled from "styled-components";

export const StyledSearchBar = styled.div`

  display: flex;
  margin: 1em 0;

  button{
    /* padding: 0;
    margin: 0; */

    svg{
      font-size: 20px;
    }
  }

  input{
    flex-grow: 1;
    padding: .5em;
    border-radius: 3px;

  }

  position: relative;
  &::after{
    position: absolute;
    top: 0.3125rem;
    right: 0.5375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    padding-right: 0.4375rem;
    padding-left: 0.4375rem;
    font-size: .75rem;
    color: var(--c-1);
    content: "/";
    border: 1px solid #737373;
    border-radius: 0.25rem;
  }

  
`