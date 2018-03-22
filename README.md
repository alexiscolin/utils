# utils
Lightweight personal utilities for javascript manipulation.

## createElement
This function create DOM elements with styles, attributes, content and let you insert it in the DOM through multiple options.

### syntax
**``` utils.createElement([option],[insert]); ```**

### use

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

### options and Settings
Multiple parameters can be used with this function. 
The first one is set in order to define element configuration wherheas the second one is used in order to configure the insertion in the DOM. Both of them are objects and optional. Severals options can be set :

#### option object (1st parameter)

<div class="tg-wrap"><table>
  <tr>
    <th>option</th>
    <th>type</th>
    <th>optional</th>
    <th>default</th>
    <th>explanation</th>
    <th>exemple</th>
  </tr>
  <tr>
    <td><b>type</b></td>
    <td>String</td>
    <td>true</td>
    <td>'div'</td>
    <td>Element type you want to create.</td>
    <td><code>'type' : 'img'</code></td>
  </tr>
  <tr>
    <td><b>id</b></td>
    <td>String</td>
    <td>true</td>
    <td>null</td>
    <td>Id that you may want to set on the element.</td>
    <td><code>'id' : 'myID'</code></td>
  </tr>
  <tr>
    <td rowspan="2"><b>style</b></td>
    <td>String</td>
    <td>true</td>
    <td>null</td>
    <td>You can set one or multiple classes by adding them in string separated by space.</td>
    <td><code>'style' : 'my-first-style my-second-style'</code></td>
  </tr>
  <tr>
    <td>Object</td>
    <td>true</td>
    <td>null</td>
    <td>You can also set inline style using an object listing all the style you want to apply, separated by comma.</td>
    <td><code>'style' : {'height': '200px', 'z-index': '-1'}</code></td>
  </tr>
  <tr>
    <td><b>attributes</b></td>
    <td>Object</td>
    <td>true</td>
    <td>null</td>
    <td>List of attributes to apply. Think about `target` or `title` for &lt;a&gt; element or `alt` for &lt;img&gt; element. Data attributes can also be set.</td>
    <td><code>'attributes' : {'data-attr' : 'true'}</code></td>
  </tr>
  <tr>
    <td><b>src</b></td>
    <td>String</td>
    <td>true</td>
    <td>null</td>
    <td>Link to the image for src attribute on media elements.</td>
    <td><code>'src' : '.../my-image.png'</code></td>
  </tr>
  <tr>
    <td><b>link</b></td>
    <td>String</td>
    <td>true</td>
    <td>null</td>
    <td>Target you want to link with href attribute on link elements (internal or external links are OK)</td>
    <td><code>'link' : '/my-awesome-link.html'</code></td>
  </tr>
  <tr>
    <td rowspan="2"><b>content</b></td>
    <td>String</td>
    <td>true</td>
    <td>null</td>
    <td>String that will be added to the content of the new element.</td>
    <td><code>'content' : 'my content here'</code></td>
  </tr>
  <tr>
    <td>HTMLNode</td>
    <td>true</td>
    <td>null</td>
    <td>Node that will be added to the content of the new element</td>
    <td><code>'content': '&lt;span&gt;here&lt;/span&gt;'</code></td>
  </tr>
</table></div>

 
#### insert object (2nd parameter)
<div class="tg-wrap"><table>
  <tr>
    <th>option</th>
    <th>type</th>
    <th>optional</th>
    <th>value</th>
    <th>default</th>
    <th>explanation</th>
    <th>exemple</th>
  </tr>
  <tr>
    <td><b>target</b></td>
    <td>HTMLNode</td>
    <td>true</td>
    <td></td>
    <td>null</td>
    <td>Target element that is the reference for adding the new element in the DOM.</td>
    <td><code>'target' : targetEl</code></td>
  </tr>
  <tr>
    <td rowspan="2"><b>type</b></td>
    <td rowspan="2">String</td>
    <td rowspan="2">true</td>
    <td>sibling</td>
    <td rowspan="2">sibling</td>
    <td>The new element will be adding as a sibling of the targeted element.</td>
    <td><code>'type' : 'sibling'</code></td>
  </tr>
  <tr>
    <td>container</td>
    <td>The new element will be adding as a child of targeted element.</td>
    <td><code>'type' : 'container'</code></td>
  </tr>
  <tr>
    <td rowspan="2"><b>method</b></td>
    <td rowspan="2">String</td>
    <td rowspan="2">true</td>
    <td>before</td>
    <td rowspan="2">after</td>
    <td>The new element will be added before the target in case of sibling type or as a first child of the target in case of container type.</td>
    <td><code>'method' : 'before'</code></td>
  </tr>
  <tr>
    <td>after</td>
    <td>The new element will be added after the target in case of sibling type or as a last child of the target in case of container type.</td>
    <td><code>'method' : 'after'</code></td>
  </tr>
</table></div>

