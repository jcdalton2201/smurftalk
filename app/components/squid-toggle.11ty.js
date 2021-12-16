
    
exports.data = {
    title:"squid-toggle",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-toggle</h1>
    <h2>Description</h2> <p>The <code>SquidToggle</code> element is an implementation of the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">checkbox element</a>.</p>
<blockquote>
<p>Toggle is a special type of checkbox that presents as a switch.
The main difference between a toggle and a checkbox is that the toggle switch is for action and checkbox is for status.</p>
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
<td>checked</td>
<td>Boolean</td>
<td>field</td>
<td>Analogue for the checkbox input's <code>checked</code> value. Reflected by the <code>checked</code> property.</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>field</td>
<td>Analogue for the checkbox input's <code>disabled</code> property.</td>
</tr>
<tr>
<td>required</td>
<td>Boolean</td>
<td>field</td>
<td>Analogue for the checkbox input's <code>required</code> property.</td>
</tr>
<tr>
<td>value</td>
<td>String</td>
<td>field</td>
<td>The checkbox's value. Reflected by the <code>value</code> property.</td>
</tr>
<tr>
<td>indeterminate</td>
<td>Boolean</td>
<td>field</td>
<td>Set the input to an indeterminate state. Will result in a falsy value.</td>
</tr>
<tr>
<td>_value</td>
<td>boolean</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>minlength</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>maxlength</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>tooltip</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>pattern</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>min</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>max</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>placeholder</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
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
<td>readonly</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>autofocus</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>compact</td>
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
<td>__onChange</td>
<td>method</td>
<td>Handle the checking of the box</td>
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
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-toggle</span>&gt;</span>Chcekbox<span class="hljs-tag">&lt;/<span class="hljs-name">squid-toggle</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-toggle</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Chcekbox checked<span class="hljs-tag">&lt;/<span class="hljs-name">squid-toggle</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-toggle</span> <span class="hljs-attr">disabled</span>&gt;</span>Chcekbox <span class="hljs-symbol">&amp;mdash;</span> disabled<span class="hljs-tag">&lt;/<span class="hljs-name">squid-toggle</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-toggle</span> <span class="hljs-attr">required</span>&gt;</span>Chcekbox <span class="hljs-symbol">&amp;mdash;</span> required<span class="hljs-tag">&lt;/<span class="hljs-name">squid-toggle</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-toggle>Chcekbox</squid-toggle>
<squid-toggle checked="true">Chcekbox checked</squid-toggle>
<squid-toggle disabled>Chcekbox &mdash; disabled</squid-toggle>
<squid-toggle required>Chcekbox &mdash; required</squid-toggle> 
    </div>
    </div>
                    `;
                    