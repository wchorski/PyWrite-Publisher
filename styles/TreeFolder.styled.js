import styled from 'styled-components'


export const StyledTreeFolder = styled.nav`

  list-style: none;

  .nav-link-item{

    padding: .15em 0;

    &:hover{
      background-color: var(--c-3);
    }
    
    a{
      text-decoration: none;

      svg{
        margin-right: 5px;
      }
    }
  }

  span.nav-arrow{
    transition: .2s;
    cursor: pointer;

    &.open{
     svg{
       transform: rotate(60deg);
     }
    }

  }
`