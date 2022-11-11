Here are my little tidbits and rants about my love hate relationship with **JS** 

##  Es6 - *well mostly*

### check if element contains class
[Check if an Element Contains a Class in JavaScript (javascripttutorial.net)](https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/#:~:text=Check%20If%20an%20Element%20contains%20a%20Class%20To,the%20classList%20property%20of%20the%20element%3A%20element.classList.contains%20%28className%29%3B)
```html
<div class="secondary info">Item</div>
```

```js
const div = document.querySelector('div'); 
div.classList.contains('secondary'); // returns true

const div = document.querySelector('div'); 
div.classList.contains('error'); // returns false
```

### get attribute on event target
```js
function onSvgLink(target){
	console.log(target.getAttribute('href'))
}
```
### check if variable is of type string
```js
let user = 'gowtham';

if (typeof user === 'string') {
    console.log('variable is a string');
} else {
    console.log('variable is not a string');
}
```

### 3 methods for adding an element to an array:
[source](https://masteringjs.io/tutorials/fundamentals/add-to-array#:~:text=JavaScript%20arrays%20have%203%20methods%20for%20adding%20an,%28%29%20adds%20to%20the%20middle%20of%20the%20array)
-   [`push()`](https://www.w3schools.com/jsref/jsref_push.asp) adds to the end of the array
-   [`unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) adds to the beginning of the array
-   [`splice()`](https://masteringjs.io/tutorials/fundamentals/array-splice) adds to the middle of the array

Below are examples of using `push()`, `unshift()`, and `splice()`.

```javascript
const arr = ['a', 'b', 'c'];

arr.push('d');
arr; // ['a', 'b', 'c', 'd']

arr.push('e', 'f');
arr; // ['a', 'b', 'c', 'd', 'e', 'f']
```

```javascript
const arr = ['d', 'e', 'f'];

arr.unshift('c');
arr; // ['c', 'd', 'e', 'f']

arr.unshift('a', 'b');
arr; // ['a', 'b', 'c', 'd', 'e', 'f']

---
// remove from beginning
var nums = [1, 2, 3]

nums.shift()
console.log(nums); // [2, 3]
```

```javascript
const arr = ['a', 'b', 'd'];

let start = 2;
let deleteCount = 0;
arr.splice(start, deleteCount, 'c');

arr; // ['a', 'b', 'c', 'd'];
```

## return a copy of an array | mutation Troubleshooting
I'd save an array to a variable then later call said variable down the stack. I was confused to find the array was mutated. I realize that setting a variable to an array also auto inherits any mutations. The trick around this is `array.slice()` as it creates a shallow copy
[source](https://stackoverflow.com/a/52011629/15579591)
```javascript
const slicedArray = numbers.slice()
const result = slicedArray.splice(y,1);
```

## get Last item in array
- [source](https://www.techiedelight.com/get-last-item-in-an-array-in-javascript/#:~:text=Get%20last%20item%20in%20an%20array%20in%20JavaScript,Using%20Underscore%2FLodash%20Library%20...%205%205.%20Using%20jQuery)
```js
const arr = [ 5, 3, 2, 7, 8 ];

const last = arr[arr.length-1];

console.log(last);

//   Output: 8

```

## Switch Statment
[switch - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
```js
const expr = 'Papayas';

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
    
  case 'Mangoes':
  
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
    
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```
```js
// if evaluating a number
switch (true) { 
	case (0 <= val && val < 1000): /* do something */ break; 
	case (1000 <= val && val < 2000): /* do something */ break; ... 
	case (29000 <= val && val < 30000): /* do something */ break; 
}
```
### get all header tags on a page and display - [](https://softauthor.com/get-element-by-tag-name-in-javascript/#:~:text=Get%20Element%20(s)%20By%20Tag%20Name%20In%20JavaScript,Get%20Element%20(s)%20By%20Tag%20Name%20From%20Parent)
```html
<div>div <br>box 1</div>
<div>div <br>box 2</div>
<div>div <br>box 3</div>
<span>span <br>box 4</span>
<span>span <br>box 5</span>
```

Let’s get only the **span** elements.
```javascript
const spanBoxes = document.getElementsByTagName("span");
console.log(spanBoxes); // HTMLCollection[2]
```

## Working with Regex
### return a Boolean using Regex
[An Introduction to Regular Expressions (Regex) In JavaScript | by Brandon Morelli | codeburst](https://codeburst.io/an-introduction-to-regular-expressions-regex-in-javascript-1d3559e7ac9a#:~:text=One%20basic%20method%20is%20.test%28%29%2C%20which%20returns%20a,a%20certain%20character%20pattern%20exists%20within%20our%20strings%3A)
```
const str1 = "the cat says meow";  
const str2 = "the dog says bark";

const hasCat = /cat/;
hasCat.test(str1);  

truehasCat.test(str2);  
// false
```

### find inside brackets
[source](https://stackoverflow.com/a/18236927/15579591)
```js
// return string inside (...)
const regex1 = (?<=\().*(?=\))
		  
// return string inside [...]
const regex = (?<=\[).*(?=\])
```

## Trials & Tribulations
### For loop finishing at first Array Item
- I was writing a `for` loop and it was not going through all the entries in the **array**
```js
import { cloneAFile } from "./clonefile";

let entries = [1, 2, 3, 4]

for (const entry of entries) {

	console.log(entry)

	cloneAFile('file.txt', `newPath/file.txt`)

}
```
- This was returning only the first `entry` and then ending. BUT there was no error. Turns out I **commented out** all contents inside my external `clonefile` script. 

### unFlatten JSON | Nest a Flattened JSON 
```js
export function unFlatten(data){
  
  let dataMap = {};
  data.forEach(function(node) {
    dataMap[node.link] = node;
  });

  let tree = [];
  data.forEach(function(node) {
    // find parent
    var parent = dataMap[node.parentLink];

    if (parent) {
      // create child array if it doesn't exist
      (parent.children || (parent.children = []))
        // add node to parent's child array
        .push(node);

    } else {
      // parent is null or missing
      tree.push(node);
    }
  });

  //BONUS - write file to disk via NodeJS
  const jsonString = JSON.stringify(tree)

  fs.writeFileSync('../public/vaultTree.json', jsonString, 'utf8', function (err) {

    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

    console.log("JSON file has been saved.");
  })

}
```

### Array.reduce()
[source](http://code.kylebaker.io/2018/03/16/stack-overflow/)