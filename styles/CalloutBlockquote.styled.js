import { FaMix } from "react-icons/fa";
import styled from "styled-components";

export const StyledCallout = styled.blockquote`

  /* background-color: blue; */
  padding: 0;
  /* border: 1px solid ${props => props.color ? props.color : "white"}; */
  border: none;
  border-left: 5px solid ${props => props.color ? props.color : "white"};
  border-radius: 3px 0 0 3px;
  background-color: #00000069;
  /* color: ${props => props.color ? props.color : "white"}; */

  .type{
    background-color: ${props => props.color2 ? props.color2 : "white"};
    padding: .3em;
    font-size: 1.3rem;

    svg{
      color: ${props => props.color ? props.color : "white"};
      margin: 0 .5em;
    }

    span.title{
      /* mix-blend-mode: multiply;
      background-color: blue; */
      font-weight: bold;
    }
  }

  .content{
    padding: 1.5em 1em;

    p{
      color: #b6b6b6;
      margin-left: 1em;
      padding-bottom: 1em;
      margin: 0;
      padding: 0;
    }
  }
`