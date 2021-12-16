
    
exports.data = {
    title:"squid-alert",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-alert</h1>
    <h2>Description</h2> <p><code>SquidAlert</code> is a web component.</p>
<blockquote>
<p>Alerts allow for communication between a system and a user.
There are two types of alerts; global alerts and in-app alerts. Global alerts are system-generated and persistent, while inline alerts are presented as feedback in response to a user interaction.</p>
</blockquote>
<p>By default the <code>SquidAlert</code> element is a global alert, but can be toggled using the <code>type</code> attribute.</p>

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
<td>undefined</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>field</td>
<td>The <code>type</code> attribute controls the type of the alert component. Valid types are <code>'global'</code>, <code>'success'</code>, <code>'warning'</code>, <code>'error'</code> or <code>'informational'</code>. For guidance on when to use which alert, see the ONE Design System documentation linked above.</td>
</tr>
<tr>
<td>_allowedTypes</td>
<td>array</td>
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
<td>remove</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>focus</td>
<td>method</td>
<td>undefined</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Success alert<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;message&quot;</span>&gt;</span>Message goes here stating the message. <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;javascript:void(0);&quot;</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;button-text&quot;</span>&gt;</span>Acknowledge<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-alert</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Warning alert<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;message&quot;</span>&gt;</span>Message goes here stating the message. <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;javascript:void(0);&quot;</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;button-text&quot;</span>&gt;</span>Acknowledge<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-alert</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Error alert<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;message&quot;</span>&gt;</span>Message goes here stating the message. <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;javascript:void(0);&quot;</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;button-text&quot;</span>&gt;</span>Acknowledge<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-alert</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Informational alert<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;informational&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;message&quot;</span>&gt;</span>Message goes here stating the message. <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;javascript:void(0);&quot;</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;button-text&quot;</span>&gt;</span>Acknowledge<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-alert</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <h2>Success alert</h2>
<squid-alert type="success">
<p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
<span slot="button-text">Acknowledge</span>
</squid-alert>
<h2>Warning alert</h2>
<squid-alert type="warning">
<p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
<span slot="button-text">Acknowledge</span>
</squid-alert>
<h2>Error alert</h2>
<squid-alert type="error">
<p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
<span slot="button-text">Acknowledge</span>
</squid-alert>
<h2>Informational alert</h2>
<squid-alert type="informational">
<p slot="message">Message goes here stating the message. <a href="javascript:void(0);">Link</a></p>
<span slot="button-text">Acknowledge</span>
</squid-alert> 
    </div>
    </div>
                    `;
                    