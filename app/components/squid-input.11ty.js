
    
exports.data = {
    title:"squid-input",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-input</h1>
    <h2>Description</h2> <p>The <code>SquidInput</code> component is an implementation the HTML <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">input</a> element.</p>
<blockquote>
<p>Text inputs allow text or numeric values to be entered and edited in one line.
Text areas allow multiple lines of text to be entered.</p>
</blockquote>
<p>Squid breaks up the input elements each into their own component for convenience including <a href="../squid-checkbox"><code>SquidCheckbox</code></a>, <a href="../squid-checkbox"><code>SquidCombobox</code></a>, <a href="../squid-email"><code>SquidEmail</code></a>, <code>SquidInput</code>, <a href="../squid-number"><code>SquidNumber</code></a>, <a href="../squid-password"><code>SquidPassword</code></a>, <a href="../squid-radio"><code>SquidRadio</code></a>, <a href="../squid-search"><code>SquidSearch</code></a>, <a href="SquidSelect"><code>SquidSelect</code></a>, <a href="../squid-ssn"><code>SquidSsn</code></a>, <a href="../squid-telephone"><code>SquidTelephone</code></a> and <a href="../squid-textarea"><code>SquidTextarea</code></a>.</p>

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
<td>_showDisabled</td>
<td>string</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>_inputType</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>disabled</td>
<td>String</td>
<td>field</td>
<td>A proxy for the input disabled attribute. Reflected as a property.</td>
</tr>
<tr>
<td>required</td>
<td>String</td>
<td>field</td>
<td>A proxy for the input required attribute. Reflected as a property.</td>
</tr>
<tr>
<td>autofocus</td>
<td>String</td>
<td>field</td>
<td>A proxy for the input autofocus attribute. Reflected as a property.</td>
</tr>
<tr>
<td>compact</td>
<td>String</td>
<td>field</td>
<td>Uses a compact input. This specific style is not defined by the ONE Design System, but used widely across Financial Services.</td>
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
<td>minlength</td>
<td>String</td>
<td>field</td>
<td>The input's <code>minlength</code> attribute (<code>minLength</code> property). Reflected here solely as <code>minlength</code>.</td>
</tr>
<tr>
<td>maxlength</td>
<td>String</td>
<td>field</td>
<td>The input's <code>maxlength</code> attribute (<code>maxLength</code> property). Reflected here solely as <code>maxlength</code>.</td>
</tr>
<tr>
<td>readonly</td>
<td>String</td>
<td>field</td>
<td>A proxy for the input's <code>readonly</code> attribute (<code>readOnly</code>) property. Reflected here as <code>readonly</code>.</td>
</tr>
<tr>
<td>autocomplete</td>
<td>String</td>
<td>field</td>
<td>A proxy for the input's <code>autocomplete</code> property. Reflected as a property.</td>
</tr>
<tr>
<td>pattern</td>
<td>String</td>
<td>field</td>
<td>A RegEx to be used by the input for validation purposes. Serves as a proxy for the input's pattern property/attribute.</td>
</tr>
<tr>
<td>min</td>
<td>String</td>
<td>field</td>
<td>A proxy for the input's <code>min</code> attribute. Reflected as a property.</td>
</tr>
<tr>
<td>max</td>
<td>String</td>
<td>field</td>
<td>A proxy for the input's <code>max</code> attribute. Reflected as a property.</td>
</tr>
<tr>
<td>counter</td>
<td>String</td>
<td>field</td>
<td>Displays an instance of the <a href="../squid-character-count"><code>SquidCharacterCount</code></a> component if set to true and a maxlength is provided. Reflected as a property.</td>
</tr>
<tr>
<td>size</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>errorMessage</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>step</td>
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
<td>updatePattern</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__onInput</td>
<td>method</td>
<td>undefined</td>
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
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-input</span> <span class="hljs-attr">required</span> <span class="hljs-attr">minlength</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">tooltip</span>=<span class="hljs-string">&quot;Tooltip text&quot;</span>&gt;</span>
This input will run validations
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-input</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-input required minlength="3" maxlength="5" tooltip="Tooltip text">
This input will run validations
</squid-input> 
    </div>
    </div>
                    `;
                    