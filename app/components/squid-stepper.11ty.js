
    
exports.data = {
    title:"squid-stepper",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-stepper</h1>
    <h2>Description</h2> <p>The <code>SquidStepper</code> element to allow users to quickly specify a value within a given range.</p>

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
<td>formAssociated</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>internals</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>_optionsObserver</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>field</td>
<td>Name of the form control. Submitted with the form as part of a name/value pair.</td>
</tr>
<tr>
<td>label</td>
<td>String</td>
<td>field</td>
<td>The label for the element and is visual at the top of the element.</td>
</tr>
<tr>
<td>value</td>
<td>String</td>
<td>field</td>
<td>The initial value of the control.</td>
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
<td>getOptions</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_manageOptions</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__displayValue</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__setValue</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>increase</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>decrease</td>
<td>method</td>
<td>undefined</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-stepper</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&#x27;stepper&#x27;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&#x27;Traveller Class&#x27;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&#x27;2&#x27;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&#x27;1&#x27;</span>&gt;</span>First<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&#x27;2&#x27;</span>&gt;</span>Buisness<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&#x27;3&#x27;</span>&gt;</span>Coach<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-stepper</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-stepper name='stepper' label='Traveller Class' value='2'>
<option value='1'>First</option>
<option value='2'>Buisness</option>
<option value='3'>Coach</option>
</squid-stepper> 
    </div>
    </div>
                    `;
                    