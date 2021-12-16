
    
exports.data = {
    title:"squid-radio-group",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-radio-group</h1>
    <h2>Description</h2> <p>a collection of radio buttons describing a set of related options. Only one radio button in a group can be selected at the same time.</p>

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
<td>The value attribute is one which all &lt;input&gt;s share; however, it serves a special purpose for inputs of type radio: when a form is submitted, only radio buttons which are currently checked are submitted to the server, and the reported value is the value of the value attribute. If the value is not otherwise specified, it is the string on by default. This is demonstrated in the section Value above.</td>
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
<td>update all of the radio buttons.</td>
</tr>
<tr>
<td>__onFieldsetKeyup</td>
<td>method</td>
<td>Trap up and down keys to step through the group</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-radio-group</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>Vote<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&#x27;test&#x27;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&#x27;yes&#x27;</span> &gt;</span>YES<span class="hljs-tag">&lt;/<span class="hljs-name">squid-radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&#x27;test&#x27;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&#x27;no&#x27;</span>&gt;</span>No<span class="hljs-tag">&lt;/<span class="hljs-name">squid-radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&#x27;test&#x27;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&#x27;maybe&#x27;</span>&gt;</span>Maybe<span class="hljs-tag">&lt;/<span class="hljs-name">squid-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-radio-group</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-radio-group>
<h1 slot="title">Vote</h1>
<squid-radio name='test' value='yes' >YES</squid-radio>
<squid-radio name='test' value='no'>No</squid-radio>
<squid-radio name='test' value='maybe'>Maybe</squid-radio>
</squid-radio-group> 
    </div>
    </div>
                    `;
                    