
    
exports.data = {
    title:"squid-character-count",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-character-count</h1>
    <h2>Description</h2> <p>The <code>SquidCharacterCount</code> is used to allow a user to track how many characters are still available in a given input.</p>

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
<td>id</td>
<td>undefined</td>
<td>field</td>
<td>TheThe element's id, corresponds to the <code>aria-describedby</code> attribute on an <code>HTMLInputElement</code> in the same <code>DocumentOrShadowRoot</code>. The element will hook into this element and attach an event listener to look for changes. Reflected as a property.</td>
</tr>
<tr>
<td>max</td>
<td>undefined</td>
<td>field</td>
<td>{Number} - The denomenator in the current/total fraction. Reflected as a property.</td>
</tr>
<tr>
<td>count</td>
<td>undefined</td>
<td>field</td>
<td>{Number} - he current character count. Reflected as a property.</td>
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
<td>_initInput</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_watchInput</td>
<td>method</td>
<td>undefined</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-character-count</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;counter&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">squid-character-count</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">&quot;counter&quot;</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-character-count id="counter" max="10"></squid-character-count>
<input aria-describedby="counter"> 
    </div>
    </div>
                    `;
                    