import styled from 'styled-components'


export const StyledNavBar = styled.div`

  a.active{
    background-color: var(--c-2);
  }

  
  background-color: var(--c-nav);
  width: 100%;

  position: sticky;
  top: 0rem;

  z-index: 500;


  .nav-bg-main{

    max-width: var(--width-cont);
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    
    position: relative;
  }
  .nav-bg-sub{

    position: absolute;
    top: 15px;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  nav.main{

    display: flex;
    align-items: center;
  
    a:hover{
      opacity: .6;
    }
  
    .App-logo{
      padding: .4rem;
      width: 70px;

  
      &:hover{
        opacity: .6;
      }
    }
    
    ul{
      list-style-type: none;
      display: flex;
      margin: 0;
      padding: 0;
  
      li{
        display: flex;
        justify-content: center;
        align-items:center;
  
        a{
          font-size: 1rem;
          text-align: center;
          padding: 1rem .8rem;
          display: inline-block;
          text-decoration: none;
  
          color: var(--c-dark);
        }
      }
      li:hover{
        background-color: var(--c-1);
        a{
          color: var(--c-light);
        }
      }
    }
  }

  nav.sub{

    margin-left: auto;
    display: flex;

    top: 3.4rem;

    > * {
      margin-right: 1rem;
    }

    a{
      color: var(--c-dark);
    }

    button{
      margin: 0;
      padding: 0;
    }

    ul{
      list-style-type: none;
      display: flex;
      justify-content: flex-end;
      padding: 0;
      margin: 0;
    }

    .btnSearch{
      padding: .3rem;
    }

    .userCred{
      background-color: var(--c-1);
      border-radius: 40px;
      
      padding: 0 .7rem;
      margin-left: 1rem;
      display: flex;
      align-items: center;

      span{
        font-size: 15px;
        color: var(--c-2);
        margin-right: 1rem;
      }
    }
  }
`