
    
exports.data = {
    title:"squid-container",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-container</h1>
    <h2>Description</h2> <p>This is a contain around a section of html.</p>

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
<td>bgColor</td>
<td>String</td>
<td>field</td>
<td>Adds background color to the container</td>
</tr>
<tr>
<td>radius</td>
<td>String</td>
<td>field</td>
<td>The container's border-radius. Valid values are <code>null</code>, <code>'0'</code>, <code>'2'</code> and <code>'4'</code>. Reflected as a property. Each background color will switch the default text color for accessibility reasons, though this can be overridden by normal CSS.</td>
</tr>
<tr>
<td>padding</td>
<td>String</td>
<td>field</td>
<td>The padding size in the container. Sizes reflect ODS sizing options: <code>null</code>, <code>'tiny'</code>, <code>'small'</code>, <code>'normal'</code>, <code>'medium'</code>, <code>'large'</code>, <code>'xlarge'</code> and <code>'xxlarge'</code>. Reflected as a property.</td>
</tr>
<tr>
<td>elevation</td>
<td>String</td>
<td>field</td>
<td>The elevation attribute denotes size of the component's box shadow. Valid values are null, ( <code>'1'</code>), (<code>'2'</code>) and ( <code>'3'</code>).</td>
</tr>
<tr>
<td>margin</td>
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
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-container</span>  <span class="hljs-attr">padding</span>=<span class="hljs-string">&quot;normal&quot;</span> <span class="hljs-attr">elevation</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">radius</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Squid Container<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Really just a fancy, accessible wrapper.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-container</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-container  padding="normal" elevation="1" radius="4">
<h1>Squid Container</h1>

<p>Really just a fancy, accessible wrapper.</p>
</squid-container> 
    </div>
    </div>
                    `;
                    