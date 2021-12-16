
    
exports.data = {
    title:"squid-button",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-button</h1>
    <h2>Description</h2> <p>There are several variants of the button, called types. Each has it's own specific meaning and use cases; more detail can be found at the link above. Here's what the system says about the button component.</p>
<blockquote>
<p>Buttons communicate the action that will take place when triggered. They’re hierarchically more important than link text or another pattern that points to supplementary content.</p>
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
<td>variant</td>
<td>string</td>
<td>field</td>
<td>The type attribute defines what class of button is rendered. It is reflected by the <code>type</code> property on the element. The possible values are <code>'action'</code>, <code>'progressive'</code>, <code>'regressive'</code>, <code>'destructive'</code>, <code>'ghost'</code>, <code>'text'</code>, <code>'right</code> and <code>'left'</code>.</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td>field</td>
<td>Changes the button's size. Valid values are <code>'normal'</code> and <code>'small'</code>.</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean</td>
<td>field</td>
<td>Sets the internal button's disabled state. Is reflected by the <code>disabled</code> property.</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>field</td>
<td>Analagous to the <code>HTMLButtonElement</code>'s type attribute. Reflected as a property.</td>
</tr>
<tr>
<td>form</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>loading</td>
<td>undefined</td>
<td>field</td>
<td>The loading attribute will toggle the element's loading state. This is reflected as a property.</td>
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
<td>submitForm</td>
<td>method</td>
<td>Submits a form if there is one.</td>
</tr>
<tr>
<td>__onButtonClick</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__onFormSubmit</td>
<td>method</td>
<td>undefined</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;action&quot;</span>&gt;</span>Normal action button<span class="hljs-tag">&lt;/<span class="hljs-name">squid-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;progressive&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>Small progressive button<span class="hljs-tag">&lt;/<span class="hljs-name">squid-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;destructive&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled destructive button<span class="hljs-tag">&lt;/<span class="hljs-name">squid-button</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-button variant="action">Normal action button</squid-button>
<squid-button variant="progressive" size="small">Small progressive button</squid-button>
<squid-button variant="destructive" disabled>Disabled destructive button</squid-button> 
    </div>
    </div>
                    `;
                    