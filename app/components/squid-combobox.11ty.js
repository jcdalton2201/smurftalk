
    
exports.data = {
    title:"squid-combobox",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-combobox</h1>
    <h2>Description</h2> <p>A combobox is a combination of input element and a select element much like a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">datalist</a>, but with some subtle differences. The W3C defines a combobox as:</p>
<blockquote>
<p>A combobox is a widget made up of the combination of two distinct elements: 1) a single-line textbox, and 2) an associated pop-up element for helping users set the value of the textbox. The popup may be a listbox, grid, tree, or dialog. Many implementations also include a third optional element -- a graphical button adjacent to the textbox, indicating the availability of the popup. Activating the button displays the popup if suggestions are available.
<em><a href="https://www.w3.org/TR/wai-aria-practices/#combobox">-source</a></em></p>
</blockquote>

    <h2>Attributes</h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Kind</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>String</td>
<td>field</td>
<td>Sets the input's value and emits an <code>squid-change</code> event when updated. Reflected as a property.</td>
</tr>
<tr>
<td>data</td>
<td>Array</td>
<td>field</td>
<td>This is the data set you wish to show in the popdown.  It can be an Array of Strings or an Array of objects with datalabel and datavalue attributes set</td>
</tr>
<tr>
<td>_data</td>
<td>array</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>_displayData</td>
<td>array</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>activeElemen</td>
<td>null</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>field</td>
<td>A proxy for the input disabled attribute. Reflected as a property.</td>
</tr>
<tr>
<td>required</td>
<td>Boolean</td>
<td>field</td>
<td>A proxy for the input disabled attribute. Reflected as a property.</td>
</tr>
<tr>
<td>autofocus</td>
<td>Boolean</td>
<td>field</td>
<td>A proxy for the input autofocus attribute. Reflected as a property.</td>
</tr>
<tr>
<td>tooltip</td>
<td>String</td>
<td>field</td>
<td>Sets a tooltip on the combobox label using <a href="../squid-tooltip"><code>SquidTooltip</code></a>. Reflected as a property.</td>
</tr>
<tr>
<td>placeholder</td>
<td>String</td>
<td>field</td>
<td>A proxy for the input placeholder attribute. Reflected as a property.</td>
</tr>
<tr>
<td>size</td>
<td>String</td>
<td>field</td>
<td>Can set the size on the input. Reflected as a property.</td>
</tr>
<tr>
<td>datalabel</td>
<td>String</td>
<td>field</td>
<td>Set the string to tell you what property you wish to show in your object array</td>
</tr>
<tr>
<td>datavalue</td>
<td>String</td>
<td>field</td>
<td>Set the string to tell you what property you wish to be your key in your object array</td>
</tr>
<tr>
<td>readonly</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>form</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>checkValidity</td>
<td>undefined</td>
<td>field</td>
<td>Proxy input checkValidity</td>
</tr>
<tr>
<td>validity</td>
<td>undefined</td>
<td>field</td>
<td>proxy input validity</td>
</tr>
<tr>
<td>validationMessage</td>
<td>undefined</td>
<td>field</td>
<td>proxy input validationMessage</td>
</tr>
<tr>
<td>willValidate</td>
<td>undefined</td>
<td>field</td>
<td>proxy input willValidate</td>
</tr>
<tr>
<td>_uid</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
</tbody>
</table>

    <h2>Methods</h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Kind</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>_openOptions</td>
<td>method</td>
<td>Open the option grid</td>
</tr>
<tr>
<td>_closeOptions</td>
<td>method</td>
<td>Closes the option grid</td>
</tr>
<tr>
<td>_keyDown</td>
<td>method</td>
<td>Capture the key down event</td>
</tr>
<tr>
<td>_selectPrevious</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_selectNext</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_keyInput</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_selectValue</td>
<td>method</td>
<td>the click event for a selected value</td>
</tr>
<tr>
<td>blur</td>
<td>method</td>
<td>proxy blur function</td>
</tr>
<tr>
<td>click</td>
<td>method</td>
<td>proxy click function</td>
</tr>
<tr>
<td>focus</td>
<td>method</td>
<td>proxy focus function</td>
</tr>
<tr>
<td>setErrorMessage</td>
<td>method</td>
<td>Change the default error message</td>
</tr>
<tr>
<td>setCustomValidity</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>setHelper</td>
<td>method</td>
<td>Set the element's helper text</td>
</tr>
<tr>
<td>__onFormReset</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__getInput</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__getHelper</td>
<td>method</td>
<td>undefined</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-combobox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;world&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Harry Potter characters&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;label&quot;</span>&gt;</span>Favorite Harry Potter Character<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;ME&quot;</span>&gt;</span>Harry Potter<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Ron Weasley&quot;</span>&gt;</span>Ron Weasley<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Hermione Granger&quot;</span>&gt;</span>Hermione Granger<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Albus Dumbledore&quot;</span>&gt;</span>Albus Dumbledore<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Severus Snape&quot;</span>&gt;</span>Severus Snape<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Sirius Black&quot;</span>&gt;</span>Sirius Black<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Neville &#x27;freaking&#x27; Longbottom&quot;</span>&gt;</span>Neville Longbottom<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Voldemort&quot;</span>&gt;</span>He Who Must Not Be Named<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-combobox</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-combobox name="world" placeholder="Harry Potter characters">
<label slot="label">Favorite Harry Potter Character</label>
<option value="ME">Harry Potter</option>
<option value="Ron Weasley">Ron Weasley</option>
<option value="Hermione Granger">Hermione Granger</option>
<option value="Albus Dumbledore">Albus Dumbledore</option>
<option value="Severus Snape">Severus Snape</option>
<option value="Sirius Black">Sirius Black</option>
<option value="Neville 'freaking' Longbottom">Neville Longbottom</option>
<option value="Voldemort">He Who Must Not Be Named</option>
</squid-combobox> 
    </div>
    </div>
                    `;
                    