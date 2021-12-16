
    
exports.data = {
    title:"squid-dialog",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-dialog</h1>
    <h2>Description</h2> <p>The <code>SquidDialog</code> component is an for a overlay modal.</p>
<blockquote>
<p>Dialogs present critical information, require users to make decisions, and can afford specific tasks without leaving the current screen.</p>
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
<td>open</td>
<td>String</td>
<td>field</td>
<td>If set, the dialog element will be displayed on the page. This is reflected as a property.</td>
</tr>
<tr>
<td>overlay</td>
<td>String</td>
<td>field</td>
<td>The theme of the dialog's overlay. Valid values are <code>'light'</code> and <code>'dark'</code> with <code>'light'</code> being the default. If no overlay value is set, the dialog will fallback to the light theme. This is reflected as a property.</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>field</td>
<td>Reflects the dialog's type. If set to <code>'decision'</code>, the dialog will behave as a decision dialog as documented in the global ONE Desigrn System documentation lsquided above. Reflected as a property.</td>
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
<td>showModal</td>
<td>method</td>
<td>Show the modal and set the appropriate ODS classes</td>
</tr>
<tr>
<td>add document keydown listener for Escape key</td>
<td></td>
<td></td>
</tr>
<tr>
<td>to close the modal</td>
<td></td>
<td></td>
</tr>
<tr>
<td>close</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__documentKeypress</td>
<td>method</td>
<td>Handel the escape event</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html">undefined
</code></pre>

    <hr>
    <div>
    undefined 
    </div>
    </div>
                    `;
                    