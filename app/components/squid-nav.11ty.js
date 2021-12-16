
    
exports.data = {
    title:"squid-nav",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-nav</h1>
    <h2>Description</h2> <p>The <code>SquidNav</code> component is an of a  navigation element.
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
<td>name</td>
<td>String</td>
<td>field</td>
<td>-The label for this element.</td>
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
<td>showList</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>hideList</td>
<td>method</td>
<td>undefined</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-nav</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&#x27;Search Engine&#x27;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#x27;dark&#x27;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-sub-nav</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&#x27;https://google.com&#x27;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#x27;dark&#x27;</span>&gt;</span>Google<span class="hljs-tag">&lt;/<span class="hljs-name">squid-sub-nav</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-sub-nav</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&#x27;https://bing.com&#x27;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#x27;dark&#x27;</span>&gt;</span>Bing<span class="hljs-tag">&lt;/<span class="hljs-name">squid-sub-nav</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-nav</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-nav name='Search Engine' theme='dark'>
<squid-sub-nav href='https://google.com' theme='dark'>Google</squid-sub-nav>
<squid-sub-nav href='https://bing.com' theme='dark'>Bing</squid-sub-nav>
</squid-nav> 
    </div>
    </div>
                    `;
                    