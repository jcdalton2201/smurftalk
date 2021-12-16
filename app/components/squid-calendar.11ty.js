
    
exports.data = {
    title:"squid-calendar",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-calendar</h1>
    <h2>Description</h2> <p>Calendars is a visual calendar for selecting dates.</p>

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
<td>currentDate</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>displayMonth</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>vaue</td>
<td>undefined</td>
<td>field</td>
<td>This must be in a Javascript Date parsable format</td>
</tr>
<tr>
<td>value</td>
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
<td>close</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>submit</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__setYear</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__generateYears</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__generateMonth</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__increment</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__decrease</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__selectDate</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__removeSelectDate</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__toggleYear</td>
<td>method</td>
<td>undefined</td>
</tr>
</tbody>
</table>

    <h2>Example</h2>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-calendar</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">squid-calendar</span>&gt;</span>
</code></pre>

    <hr>
    <div>
    <squid-calendar>
</squid-calendar> 
    </div>
    </div>
                    `;
                    