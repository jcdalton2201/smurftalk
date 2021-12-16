
    
exports.data = {
    title:"squid-hero-number",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-hero-number</h1>
    <h2>Description</h2> <p>The <code>SquidHeroNumber</code> elemement is a stylized display of a number and label.</p>
<blockquote>
<p>Hero Numbers are used to surface important data points in a stylistic manner. One common usage is displaying account balances or other critical account information.</p>
</blockquote>
<p>Further information and usage guidelines can be found at the lsquid above.</p>

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
<td>currency</td>
<td>String</td>
<td>field</td>
<td>set the format of the currecy. Exampe <code>'USD'</code></td>
</tr>
<tr>
<td>_currency</td>
<td>string</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>alignment</td>
<td>String</td>
<td>field</td>
<td>The alignment of the element. Setting the value to <code>'center'</code> will center the contents, any other value will left align the elements. Reflected as a property.</td>
</tr>
<tr>
<td>size</td>
<td>String</td>
<td>field</td>
<td>The size of the hero number and label itself. Reflected as a property.</td>
</tr>
<tr>
<td>numberStyle</td>
<td>object</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>local</td>
<td>String</td>
<td>field</td>
<td>locale identifier string such as <code>'en-US'</code> or <code>'de-DE'</code></td>
</tr>
<tr>
<td>number</td>
<td>String</td>
<td>field</td>
<td>The number to display. This is reflected as a property.</td>
</tr>
<tr>
<td>label</td>
<td>String</td>
<td>field</td>
<td>An optional label to append to the element. Reflected as a property.</td>
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
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-hero-number</span> <span class="hljs-attr">number</span>=<span class="hljs-string">&quot;1234.56&quot;</span>  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Available credit&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">squid-hero-number</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-hero-number</span> <span class="hljs-attr">number</span>=<span class="hljs-string">&quot;1234.56&quot;</span>  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Current balance&quot;</span> <span class="hljs-attr">alignment</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">squid-hero-number</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-hero-number</span> <span class="hljs-attr">number</span>=<span class="hljs-string">&quot;1234.56&quot;</span>  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Current balance&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">currency</span>=<span class="hljs-string">&quot;USD&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">squid-hero-number</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-hero-number number="1234.56"  label="Available credit"></squid-hero-number>
<squid-hero-number number="1234.56"  label="Current balance" alignment="center"></squid-hero-number>
<squid-hero-number number="1234.56"  label="Current balance" size="small" currency="USD"></squid-hero-number> 
    </div>
    </div>
                    `;
                    