
    
exports.data = {
    title:"squid-accordion-group",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-accordion-group</h1>
    <h2>Description</h2> <p><code>SquidAccordion</code> is a web component.</p>
<p>The <code>SquidAccordionGroup</code> element exists to group instances of <code>SquidAccordion</code>. Importing the accordion group also implicitly imports the accordions. The primary function is to group accordions so that only one accordion is open at a time. *</p>

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
<td>disconnected</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_manageGroup</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_onKeyDown</td>
<td>method</td>
<td>undefined</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-accordion-group</span>&gt;</span>
<span class="hljs-comment">&lt;!-- one --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-accordion</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;summary&quot;</span>&gt;</span>The first accordion in the group<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-accordion</span>&gt;</span>

<span class="hljs-comment">&lt;!-- two --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-accordion</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;summary&quot;</span>&gt;</span>The middle child<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-accordion</span>&gt;</span>

<span class="hljs-comment">&lt;!-- three --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-accordion</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;summary&quot;</span>&gt;</span>Accordion number three<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-accordion</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-accordion-group</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-accordion-group>
<!-- one -->
<squid-accordion>
<span slot="summary">The first accordion in the group</span>
<div slot="content">
<p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
</div>
</squid-accordion>

<!-- two -->
<squid-accordion>
<span slot="summary">The middle child</span>
<div slot="content">
<p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
</div>
</squid-accordion>

<!-- three -->
<squid-accordion>
<span slot="summary">Accordion number three</span>
<div slot="content">
<p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
</div>
</squid-accordion>
</squid-accordion-group> 
    </div>
    </div>
                    `;
                    