When I create **Examples** with my source code, I want to easily embed the html here in my notes. 

[source of help](https://stackoverflow.com/a/65642134/15579591)

I use these free online tools to do the job
1. [SCSS to CSS Converter  (jsonformatter.org)](https://jsonformatter.org/scss-to-css) -> convert [Sass](📁developer/CSS/Sass.md) to plain **CSS**
2.  [Premailer.io - CSS blocks into inline style attributes for HTML emails](https://premailer.io/) -> Inline **CSS** to **HTML** 


here is an example of what your input into [Premailer.io](https://premailer.io/) should look like

```html
<html>
	<head>
		<style>
			body{
				background-color: blue;
				color: aqua;
			}
		</style>
	</head>
	
	<body>
	  <h1>hello world</h1>
	</body>

</html>
```

## Result
<html> <head> </head> <body> <h2 style="background-color:blue; color:aqua" bgcolor="blue">hello world</h2> </body> </html>
