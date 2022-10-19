### Fix word wrap indentation in list elements
[CSS - Indenting the second line of LI (List Items) - Silva Web Designs](/vault/https://silvawebdesigns.com/css-indenting-second-line-li-list-items/)
```css
ul { 
	list-style: none; 
	width: 200px; 
	text-indent: -20px; /* MATCH key property */ 
	margin-left: 20px; /* MATCH key property */ 
} 

li { margin-bottom: 10px; }
```

## Code Pen Insporation
- [](/vault/https://codepen.io/b1tn3r/embed/YjOzRv?height=300&default-tab=css%252Cresult&slug-hash=YjOzRv&editable=true&user=b1tn3r&name=cp_embed_40#result-box)
- [](/vault/https://codepen.io/avstorm/embed/rNBZby?default-tab=css%252Cresult&editable=true&height=300&name=cp_embed_26&slug-hash=peCbd&user=avstorm#result-box)
- [](/vault/https://codepen.io/lbebber/embed/LELBEo?height=300&default-tab=css%252Cresult&slug-hash=LELBEo&editable=true&user=lbebber&name=cp_embed_6#result-box)
- [](/vault/https://codepen.io/Grsmto/embed/RPQPPB?height=300&default-tab=css%252Cresult&slug-hash=RPQPPB&editable=true&user=Grsmto&name=cp_embed_5#result-box)
- [](/vault/https://codepen.io/andrewmillen/embed/MoKLob?height=300&default-tab=css%252Cresult&slug-hash=MoKLob&editable=true&user=andrewmillen&name=cp_embed_1#result-box)
- [Pure CSS 3D Synthesizer (mousedown for rotation) (codepen.io)](/vault/mousedown__for__rotation)__(codepen.io))

### Web Tools
- [Gradient Generator - CSS gradients made easy - ColorGradient](/vault/https://colorgradient.dev/gradient-generator)

### how to really mask
[Using CSS Masks to Create Jagged Edges | CSS-Tricks - CSS-Tricks](/vault/https://css-tricks.com/using-css-masks-to-create-jagged-edges/)
```html
<div class="container">
	<img src="...">
</div>
```

```css
.container{
	background-color: blue;
}

img {
    mask-image: linear-gradient(
      to bottom right,
      white,
      white 50%,
      transparent 50%,
      transparent),
    linear-gradient(
      to top,
      transparent 30px,
      black 30px,
      white);
      
    mask-size: 30px 30px, 100% 100%;
    mask-repeat: repeat-x;
    mask-position: left bottom;
    display: block;
    margin-bottom: 0.5em;
}
```