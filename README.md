<h1>🛠️ UTILS</h1>
Lightweight personal utilities for javascript manipulation.<br><br>
<ol>
    <li><a href="#createElement">createElement</a></li>
    <li><a href="#getComputedTranslateXY">getComputedTranslateXY</a></li>
    <li><a href="#ancestorFinder">ancestorFinder</a></li>
    <li><a href="#watch">watch</a></li>
     <li><a href="#SVGLength">SVGLength</a></li>
    <li><a href="#mathAffine">math.createAffine</a></li>
    <li><a href="#mathRandom">math.random</a></li>
    <li><a href="#mathShuffle">math.shuffle</a></li>
</ol>

- [ ] classAction
- [ ] prefixBrowser
- [ ] eventBinder
- [ ] rAF
- [ ] wordWrapper
- [ ] createPromise
- [ ] debounce
- [ ] throttle

<h2 id="createElement">createElement</h2>
This function create DOM elements with styles, attributes, content and let you insert it in the DOM through multiple options.

### SYNTAX
**``` utils.createElement([option, insert]); ```**

### USE

```javascript

import { utils } from 'utils';

let el = utils.createElement({
    type: 'a',
    link: 'image.png',
    style: 'my-first-style my-second-style',
    attributes: {'target': '_blank', 'title': 'this is awesome'},
    content: 'click here'
  },{
    target: document.getElementById('target'),
    type: 'sibling',
    method: 'after'
  });

```

### OPTIONS AND SETTINGS
This function has two optionals parameters you can use with object type argument. 
The first one is set in order to define element configuration wherheas the second one is used in order to configure the insertion in the DOM. Several **optional** properties can be set inside of them:

#### Option object (1st argument)

<div class="tg-wrap"><table>
  <tr>
    <th>option</th>
    <th>type</th>
    <th>explanation</th>
    <th>exemple</th>
  </tr>
  <tr valign="middle">
    <td><b>type</b> - default: 'div'</td>
    <td>String</td>
    <td>Element type you want to create</td>
    <td valign="middle"><pre><code>'type' : 'img'</code></pre></td>
  </tr>
  <tr valign="middle">
    <td><b>id</b></td>
    <td>String</td>
    <td>Id that you may want to set on the element.</td>
    <td valign="middle"><pre><code>'id' : 'myID'</code></pre></td>
  </tr>
  <tr valign="middle">
    <td rowspan="2"><b>style</b></td>
    <td>String</td>
    <td>You can set one or multiple classes by adding them in string separated by space.</td>
    <td valign="middle"><pre><code>'style': 'style1 style2'</code></pre></td>
  </tr>
  <tr valign="middle">
    <td>Object</td>
    <td>You can also set inline style using an object listing all the style you want to apply, separated by comma.</td>
    <td valign="middle">
<pre><code>'style': {
  'height': '200px', 
  'z-index': '-1'
}</code></pre></td>
  </tr>
  <tr valign="middle">
    <td><b>attributes</b></td>
    <td>Object</td>
    <td>List of attributes to apply. Think about `target` or `title` for &lt;a&gt; element or `alt` for &lt;img&gt; element. Data attributes can also be set.</td>
    <td valign="middle">
<pre><code>'attributes': {
  'data-attr' : 'true',
  'target': '_blank',
  'title': 'titre'
}</code></td>
  </tr>
  <tr valign="middle">
    <td><b>src</b></td>
    <td>String</td>
    <td>Link to the image for src attribute on media elements.</td>
    <td valign="middle"><pre><code>'src' : './myimage.png'</code></pre></td>
  </tr>
  <tr>
    <td><b>link</b></td>
    <td>String</td>
    <td>Target you want to link with href attribute on link elements (internal or external links are OK)</td>
    <td valign="middle"><pre><code>'link' : 'mylink.html'</code></pre></td>
  </tr>
  <tr valign="middle">
    <td rowspan="2"><b>content</b></td>
    <td>String</td>
    <td>String that will be added to the content of the new element.</td>
      <td valign="middle"><pre><code>'content' : 'my content here'</code></pre></td>
  </tr>
  <tr valign="middle">
    <td>HTMLNode</td>
    <td>Node that will be added to the content of the new element</td>
    <td valign="middle"><pre><code>'content': '&lt;span&gt;here&lt;/span&gt;'</code></pre></td>
  </tr>
</table></div>

 
#### Insert object (2nd argument)
<div class="tg-wrap"><table>
  <tr>
    <th>option</th>
    <th>type</th>
    <th>value</th>
    <th>explanation</th>
    <th>exemple</th>
  </tr>
  <tr>
    <td><b>target</b></td>
    <td>HTMLNode</td>
    <td></td>
    <td>Target element that is the reference for adding the new element in the DOM.</td>
      <td valign="middle"><pre><code>'target' : targetEl</code></pre></td>
  </tr>
  <tr>
    <td rowspan="2"><b>type</b> - default: 'sibling'</td>
    <td rowspan="2">String</td>
    <td>sibling</td>
    <td>The new element will be adding as a sibling of the targeted element.</td>
      <td valign="middle"><pre><code>'type' : 'sibling'</code></pre></td>
  </tr>
  <tr>
    <td>container</td>
    <td>The new element will be adding as a child of targeted element.</td>
    <td valign="middle"><pre><code>'type' : 'container'</code></pre></td>
  </tr>
  <tr>
    <td rowspan="2"><b>method</b> default: 'after'</td>
    <td rowspan="2">String</td>
    <td>before</td>
    <td>The new element will be added before the target in case of sibling type or as a first child of the target in case of container type.</td>
    <td valign="middle"><pre><code>'method' : 'before'</code></pre></td>
  </tr>
  <tr>
    <td>after</td>
    <td>The new element will be added after the target in case of sibling type or as a last child of the target in case of container type.</td>
    <td valign="middle"><pre><code>'method' : 'after'</code></pre></td>
  </tr>
</table></div>

---

<h2 id="getComputedTranslateXY">getComputedTranslateXY</h2>

Get CSS translate state of DOM element.

---

<h2 id="ancestorFinder">ancestorFinder</h2>

Look for a parent element that matches for a specific class.

---

<h2 id="watch">Watch</h2>

Watch function let you create a proxy object in order to listen for properties values changes. Then, you can create an object with many properties, update them and trigger some functions if these properties are listened. This is useful to avoid regenerate the DOM for listening and let modules interact under the hood.

### SYNTAX
**``` let proxy = utils.watch({}); ```**

### USE

```javascript

import { utils } from 'utils';

const obj = {
    value1: 0,
    value2: false
}

// create proxy
let proxy = utils.watch(obj);

// add a listener on the proxy
let listener = proxy.addListener('value1', function(){
    console.log('change');
});

proxy.value1 = 10; // console -> 'change'

// remove a listener
proxy.removeListener(listener);
proxy.value1 = 5; // console -> ø

```
### OPTIONS AND SETTINGS

To start using this function, you need to watch an object. Then, the `watch` function will return a proxy object that you should interact with. Another module in code may want to intercept a changement on the proxy properties values. To do so, the proxy returned hold some methods:

#### Methods
#### ```addListner```
In order to listen for a property value changement. This method need two arguments: 

* a string calling the value you want to listen for
* a function you want to trigger when a modification has been detected on the value listened.

This method return a reference to the listener. Once you call this method on the proxy's property, the function will be triggered each time the value will be changed.

#### ```removeListner```
In order to remove a listener for a property. Since you already have created the listener, you only have to remove the listener by passing the listener reference in the proxy's removeListener method: `proxy.removeListener(listenerReference);`

---

<h2 id="SVGLength">SVG Total Length</h2>
A function to measure the length of an SVG path since SVGPathElement.getTotalLength() is not longer available in SVG 2. The function take an element as attribute and return the length in pixel. 

```javascript
import { utils } from 'utils';
    
const SVG = document.getElementByID('mySVG');
const SVGLength = utils.SVGLength(SVG);
SVG.style.strokeDasharray = SVG.style.strokeDashoffset = SVGLength;
```

---

<h2 id="mathAffine">Math - createAffine</h2>

This function let you generate an affine function `(AX + B)` with two couples of coordinates. This is usefull if you want to find a point related to another following a rule given by other coordinates.

This function let you get the multiplying factor variable `A`.
This function let you get the origin coordinate variable `B`.

By using a closure, you can directly create an affine function that let you get a point on the line drawn by the function (ax+b). To do, you only need to initiate the closure passing two coordinate systems (`X` and `Y`), then, by passing an `X` variable at any moment, you will get the point.

### SYNTAX
**``` utils.math.createAffine.a(array(number, number), array(number, number)); ```**<br>
**``` utils.math.createAffine.b(number, array(number, number)); ```**<br>
**``` utils.math.createAffine.func(array(number, number), array(number, number)); ```**

### USE
```javascript
import { utils } from 'utils';

const vars = {
    x: [0, -500],
    y: [100, 500]
};

//get affine variables
const affineVarA = utils.math.createAffine.a(vars.x, vars.y);
const affineVarB = utils.math.createAffine.b(vars.x, affineVarA);

//get closure function
const affineFunc = utils.math.createAffine.func(vars.x, vars.y);
affineFunc.getPoint(50);
```

### OPTIONS AND SETTINGS
The most simple way to get the affine function is to use `utils.math.affine.func(x,y)` giving two arguments (`X` and `Y` coordinates systems) to the function. This will return a closure function. Using this closure function, you can call the `getPoint()` method. `getPoint` has an unique parameter: the X variable in the affine function `(A*X+B)`.

```javascript
const affineFunc = utils.math.createAffine.func([1000, -100], [2000, 100]);
console.log(affineFunc.getPoint(1500)) // display -> 0
```
> Thanks to @NathalieVidon who helped me a lot with maths concepts on this function.

---

<h2 id="mathRandom">Math - Random</h2>

This function give you the power to get a random number between two other number. You need to pass two argument to the function: a min and a max. These arguments are optional, by default `min` argument is set to `0` and `max` is argument is set to `1`.

### SYNTAX
**``` utils.math.random([number, number]); ```**

### USE
```javascript
import { utils } from 'utils';
let random = utils.math.random(0, 10);
```
---

<h2 id="mathShuffle">Math - Shuffle</h2>

Shuffle array
