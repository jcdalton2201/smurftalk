
    
exports.data = {
    title:"squid-errors",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-errors</h1>
    <h2>Description</h2> <p>To be used with the SquidInput it will display the error message for validation in a constant manor.</p>

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
<td>id</td>
<td>String</td>
<td>field</td>
<td>the id for the element to be used with labels.</td>
</tr>
<tr>
<td>form</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>validityMessages</td>
<td>undefined</td>
<td>field</td>
<td>Default validity messages intentionally newed up for each instance</td>
</tr>
<tr>
<td>_inputs</td>
<td>array</td>
<td>field</td>
<td>Set up inputs array</td>
</tr>
<tr>
<td>validators</td>
<td>undefined</td>
<td>field</td>
<td>Set up initial validators</td>
</tr>
<tr>
<td>_message</td>
<td>String</td>
<td>field</td>
<td>the message to be shown inside the error box.</td>
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
<td>setSelector</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>setDescribes</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_addEventListeners</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>appendHelper</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_onDescribesInput</td>
<td>method</td>
<td>Input input event watcher used to remove errors</td>
</tr>
<tr>
<td>when this.describes is altered</td>
<td></td>
<td></td>
</tr>
<tr>
<td>preventDefault</td>
<td>method</td>
<td>check to see if we need to prevent an event.</td>
</tr>
<tr>
<td>checkValidity</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>setHelper</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>handleChange</td>
<td>method</td>
<td>When the input changes display the messae</td>
</tr>
<tr>
<td>_inputInvalid</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_inputValid</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_initInput</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>_generateMessage</td>
<td>method</td>
<td>Set the message</td>
</tr>
<tr>
<td>bindMethod</td>
<td>method</td>
<td>bind this to the method</td>
</tr>
<tr>
<td>bindMethods</td>
<td>method</td>
<td>binds the array of methods with this.</td>
</tr>
<tr>
<td>setCustomError</td>
<td>method</td>
<td>Set the error message with this one.</td>
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
                    