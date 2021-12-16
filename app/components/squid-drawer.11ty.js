
    
exports.data = {
    title:"squid-drawer",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-drawer</h1>
    <h2>Description</h2> <p>The <code>SquidDrawer</code> A navigation drawer provides access to destinations and app functionality, such as switching accounts. It can either be permanently on-screen or controlled by a navigation menu icon.</p>
<blockquote>
<p>Drawer has two slots that should be filled.
slot='button' is the name that goes in the button field
slot='title' is the title that will display in the drawer
The rest of the html will be placed in the drawer.</p>
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
<td>position</td>
<td>String</td>
<td>field</td>
<td>Determines what side the drawer will be on. the values are <code>right</code> and <code>left</code></td>
</tr>
<tr>
<td>drawerTemplate</td>
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
<tbody>
<tr>
<td>closeDrawer</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>openDrawer</td>
<td>method</td>
<td>undefined</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-drawer</span> &gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&#x27;button&#x27;</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&#x27;title&#x27;</span>&gt;</span>Shakespears Quotes<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-accordion-group</span>&gt;</span>
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
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-drawer</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-drawer >
<span slot='button'>Info</span>
<span slot='title'>Shakespears Quotes</span>
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
</squid-drawer> 
    </div>
    </div>
                    `;
                    