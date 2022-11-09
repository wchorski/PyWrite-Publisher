import styled from 'styled-components'


export const StyledGraph = styled.div`
  svg#svgraf{
    background-color: black;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border-radius: 3px;
    border: double #757575 3px;
    box-shadow: inset #403900 -2px -3px 10;

    g{
      transition: 0.3s;

      circle{
        cursor: pointer;
        fill: #4f4f4f;

        &.active{
          stroke: var(--c-1);
          fill: #546e00;
        }
        &.shaded{
          fill: #2c2c2c;
        }
      }

      line{
        stroke: rgb(62, 62, 62);
        &.active{
          stroke: #546e00;
        }
      }

      text{
        fill: white;
        text-anchor: middle;
        pointer-events: none;
        filter: drop-shadow(1px 1px .5px black);
        font-size: 6px;

        &.shaded{
          fill: rgb(71, 71, 71);
        }
      }
    }
  }
`