
    
exports.data = {
    title:"squid-a",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-a</h1>
    <h2>Description</h2> <p><code>SquidA</code> is a web component.</p>
<p>There are several variants of the button, called types. Each has it's own specific meaning and use cases; more detail can be found at the link above. Here's what the system says about the button component.</p>
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
<td>target</td>
<td>String</td>
<td>field</td>
<td>Sets the anchor's target. If set to <code>_blank</code> the anchor will also include a <code>rel=&quot;noopener&quot;</code> unless the element's override attribute is set to 'allow'.</td>
</tr>
<tr>
<td>size</td>
<td>String</td>
<td>field</td>
<td>Changes the button's size. Valid values are <code>'normal'</code> and <code>'small'</code>.</td>
</tr>
<tr>
<td>_target</td>
<td>string</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>href</td>
<td>String</td>
<td>field</td>
<td>The anchor's href. If not set, the value will default to a <code>javascript:void(0)</code> value. Reflected as a property.</td>
</tr>
<tr>
<td>variant</td>
<td>String</td>
<td>field</td>
<td>The variant attribute defines what class of button is rendered. It is reflected by the <code>type</code> property on the element. The possible values are <code>'link'</code>, <code>'action'</code>, <code>'progressive'</code>, <code>'regressive'</code>, <code>'destructive'</code>, <code>'ghost'</code>, <code>'text'</code>, <code>'left'</code> and <code>'right'</code>. If one of the button values is used, the anchor will be given a role of <code>'button'</code>. This was previously the <code>type</code> attribute until version 5.</td>
</tr>
<tr>
<td>referrer</td>
<td>String</td>
<td>field</td>
<td>If set to 'allow' will not set the the anchor's <code>rel</code> attribute to <code>'noopener'</code>. This is strongly discouraged for security reasons.</td>
</tr>
<tr>
<td>rel</td>
<td>string</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>field</td>
<td>Sets the anchor to be disabled or not.</td>
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
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">squid-a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://github.com/&quot;</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;_blank&quot;</span>&gt;</span>GitHub in a new tab<span class="hljs-tag">&lt;/<span class="hljs-name">squid-a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">squid-a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://google&quot;</span>&gt;</span>google<span class="hljs-tag">&lt;/<span class="hljs-name">squid-a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <p><squid-a href="https://github.com/" target="_blank">GitHub in a new tab</squid-a></p>
<p><squid-a href="https://google">google</squid-a></p> 
    </div>
    </div>
                    `;
                    