
    
exports.data = {
    title:"squid-sub-nav",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-sub-nav</h1>
    <h2>Description</h2> <p>The <code>SquidSubNav</code> component is an of a sub navigation element.
The base element for a navigation it has an anchor element for linking.</p>

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
<td>theme</td>
<td>String</td>
<td>field</td>
<td>sets a theme to <code>&quot;light&quot;</code> or <code>&quot;dark&quot;</code>. Default value is light</td>
</tr>
<tr>
<td>href</td>
<td>String</td>
<td>field</td>
<td>-the anchor link for clicks.</td>
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
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-sub-nav</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&#x27;https://google.com&#x27;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#x27;dark&#x27;</span>&gt;</span>Google<span class="hljs-tag">&lt;/<span class="hljs-name">squid-sub-nav</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-sub-nav href='https://google.com' theme='dark'>Google</squid-sub-nav> 
    </div>
    </div>
                    `;
                    