
    
exports.data = {
    title:"squid-checkbox-group",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-checkbox-group</h1>
    <h2>Description</h2> <p>Creates an accessible checkbox group using <a href="../squid-checkbox"><code>SquidCheckbox</code></a> or a similar component.</p>
<p>The <code>SquidCheckbox</code> element is an implementation of the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">checkbox element</a>.</p>
<blockquote>
<p>Checkboxes are used to select a single item or multiple items. A checkbox has two selection states: unselected and selected.
The difference between radio buttons and checkboxes is that a radio button is for a single selection from a set of options and a checkbox allows for multiple selections from a set of options.
The main difference between a toggle and a checkbox is that the <a href="../squid-toggle">toggle switch</a> is for action and checkbox is for status.</p>
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
<td>form</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>checkedElements</td>
<td>undefined</td>
<td>field</td>
<td>Get all checked checkboxes</td>
</tr>
<tr>
<td>elements</td>
<td>undefined</td>
<td>field</td>
<td>Get all child checkboxes</td>
</tr>
<tr>
<td>value</td>
<td>undefined</td>
<td>field</td>
<td>Return the value of all checked squid-checkboxes</td>
</tr>
<tr>
<td>legend</td>
<td>String</td>
<td>field</td>
<td>Set the fieldset's legend text. Reflected as a property.</td>
</tr>
<tr>
<td>tagName</td>
<td>String</td>
<td>field</td>
<td>By default set to <code>squid-checkbox</code>. This tells the component what tag name to check for changes on. Must be set before the element is created. After that, changes will cause unexpected behavior.</td>
</tr>
<tr>
<td>required</td>
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
<td>__onChange</td>
<td>method</td>
<td>Custom change event from checkbox</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-checkbox-group</span> <span class="hljs-attr">legend</span>=<span class="hljs-string">&quot;Favorite Star Wars Movies&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;The Phantom Menace&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>The Phantom Menace<span class="hljs-tag">&lt;/<span class="hljs-name">squid-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Attack of the Clones&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Attack of the Clones<span class="hljs-tag">&lt;/<span class="hljs-name">squid-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Revenge of the Sith&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Revenge of the Sith<span class="hljs-tag">&lt;/<span class="hljs-name">squid-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;A New Hope&quot;</span>&gt;</span>A New Hope<span class="hljs-tag">&lt;/<span class="hljs-name">squid-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;The Empire Strikes Back&quot;</span>&gt;</span>The Empire Strikes Back<span class="hljs-tag">&lt;/<span class="hljs-name">squid-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Return of the Jedi&quot;</span>&gt;</span>Return of the Jedi<span class="hljs-tag">&lt;/<span class="hljs-name">squid-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;The Force Awakens&quot;</span>&gt;</span>The Force Awakens<span class="hljs-tag">&lt;/<span class="hljs-name">squid-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;The Last Jedi&quot;</span>&gt;</span>The Last Jedi<span class="hljs-tag">&lt;/<span class="hljs-name">squid-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Rogue One&quot;</span>&gt;</span>Rogue One<span class="hljs-tag">&lt;/<span class="hljs-name">squid-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">squid-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Solo&quot;</span>&gt;</span>Solo<span class="hljs-tag">&lt;/<span class="hljs-name">squid-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-checkbox-group</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-checkbox-group legend="Favorite Star Wars Movies">
<squid-checkbox value="The Phantom Menace" disabled>The Phantom Menace</squid-checkbox>
<squid-checkbox value="Attack of the Clones" disabled>Attack of the Clones</squid-checkbox>
<squid-checkbox value="Revenge of the Sith" disabled>Revenge of the Sith</squid-checkbox>
<squid-checkbox value="A New Hope">A New Hope</squid-checkbox>
<squid-checkbox value="The Empire Strikes Back">The Empire Strikes Back</squid-checkbox>
<squid-checkbox value="Return of the Jedi">Return of the Jedi</squid-checkbox>
<squid-checkbox value="The Force Awakens">The Force Awakens</squid-checkbox>
<squid-checkbox value="The Last Jedi">The Last Jedi</squid-checkbox>
<squid-checkbox value="Rogue One">Rogue One</squid-checkbox>
<squid-checkbox value="Solo">Solo</squid-checkbox>
</squid-checkbox-group> 
    </div>
    </div>
                    `;
                    