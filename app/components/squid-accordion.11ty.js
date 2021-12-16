
    
exports.data = {
    title:"squid-accordion",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-accordion</h1>
    <h2>Description</h2> <p><code>SquidAccordion</code> is a web component.</p>
<p>Accordions provide progressive disclosure, showing focused content and allow users to expose additional content if they choose. Accordions contain a title, an expanded and a collapsed state, spacing, and icons indicating open and close.</p>

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
<td>focus</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>theme</td>
<td>String</td>
<td>field</td>
<td>The anchor's href. If not set, the value will default to a <code>javascript:void(0)</code> value. Reflected as a property.</td>
</tr>
<tr>
<td>open</td>
<td>Boolean</td>
<td>field</td>
<td>The variant attribute defines what class of button is rendered. It is reflected by the <code>type</code> property on the element. The possible values are <code>'link'</code>, <code>'action'</code>, <code>'progressive'</code>, <code>'regressive'</code>, <code>'destructive'</code>, <code>'ghost'</code>, <code>'text'</code>, <code>'left'</code> and <code>'right'</code>. If one of the button values is used, the anchor will be given a role of <code>'button'</code>. This was previously the <code>type</code> attribute until version 5.</td>
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
<td>toggle</td>
<td>method</td>
<td>Set the open parameter and call</td>
</tr>
<tr>
<td>handle toggle to update visual state</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-accordion</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;summary&quot;</span>&gt;</span>This will the the accordion&#x27;s title<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>The accordion&#x27;s content should be placed in the content slot.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Anything inside this slot will be hidden unless the accordion is open.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-accordion</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-accordion>
<span slot="summary">This will the the accordion's title</span>
<div slot="content">
<p>The accordion's content should be placed in the content slot.</p>
<p>Anything inside this slot will be hidden unless the accordion is open.</p>
</div>
</squid-accordion> 
    </div>
    </div>
                    `;
                    