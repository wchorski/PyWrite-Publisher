Having a subtle caption that floats / aligns to the right with some hover effects seems simple right? Well, it was a bit confusing until I found out about `display: inline-flex;` and  `display: inline-table;`

## Example
<html> <head> <style>.imgWrapper:hover > span {outline:dotted #9a9a9a 1px;box-shadow:#000 a8 2px 2px 11px 5px} .imgWrapper:hover small.caption span {background-color:#303a00;color:#ccc}</style> </head> <body> <div class="imgWrapper" style="cursor:zoom-in; display:inline-flex; flex-direction:column; transition:1s"> <span style="box-shadow:#000 1px 1px 4px 2px; outline:solid #505050 1px; transition:inherit"> <img alt="cute Lapphund Finnish pupper " srcset="https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg"> </span> <small class="caption" aria-label="helpme " style="color:grey; display:inline-table; padding:1em 0.5em; text-align:end; transition:inherit" align="end"> <span style="padding:1em 0.5em"> → cute Lapphund Finnish pupper </span> </small> </div> </body> </html>

---
## Source Code

```html
<div class="imgWrapper">
	<span>
		<img alt="helpme " srcset="https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg" >
	</span>

	<small class="caption" aria-label="helpme ">
		<span> → helpme </span>
	</small>
</div>
```

```scss
.imgWrapper{

  transition: 1s;
  display: inline-flex;
  flex-direction: column;
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
```