
    
exports.data = {
    title:"squid-currency",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-currency</h1>
    <h2>Description</h2> <p><code>SquidCurrency</code> is an implementation of <a href="../squid-input"><code>SquidInput</code></a> with a custom mask.
Default amount is empty, not 0
Dollar sign is instantly prepended to the typed input amount upon input
Dollar sign is always displayed on the left side of the number
For amounts of less than $1, display $0.XX
Field does not pass value of dollar sign on submit
No custom number pads
Amount input must allow for input of &lt;1.00 amounts</p>

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
<td>dollar-only</td>
<td>Boolean</td>
<td>field</td>
<td>Default value is set to false, which allows decimal value of currency. When set to true, this field does not allow decimal part of currency.</td>
</tr>
<tr>
<td></td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>dollarOnly</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
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
<td>__onInputBlur</td>
<td>method</td>
<td>Blur event on the input field</td>
</tr>
<tr>
<td>__validate</td>
<td>method</td>
<td>Run custom validation against the input's value</td>
</tr>
<tr>
<td>__onInput</td>
<td>method</td>
<td>Overwrite the input event</td>
</tr>
<tr>
<td>updatePattern</td>
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
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-currency</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">squid-currency</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-currency></squid-currency> 
    </div>
    </div>
                    `;
                    