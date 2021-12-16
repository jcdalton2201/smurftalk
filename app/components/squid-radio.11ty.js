
    
exports.data = {
    title:"squid-radio",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-radio</h1>
    <h2>Description</h2> <p>&lt;squid-radio&gt; elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.</p>
<p>Only one radio button in a given group can be selected at the same time. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.</p>

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
<td>is</td>
<td>string</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>checked</td>
<td>Boolean</td>
<td>field</td>
<td>A Boolean attribute which, if present, indicates that this radio button is the default selected one in the group.</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>field</td>
<td>Whether the form control is disabled</td>
</tr>
<tr>
<td>required</td>
<td>Boolean</td>
<td>field</td>
<td>Boolean. A value is required or must be check for the form to be submittable</td>
</tr>
<tr>
<td>readonly</td>
<td>Boolean</td>
<td>field</td>
<td>Boolean. The value is not editable</td>
</tr>
<tr>
<td>autofocus</td>
<td>Boolean</td>
<td>field</td>
<td>Automatically focus the form control when the page is loaded</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>field</td>
<td>Name of the form control. Submitted with the form as part of a name/value pair.</td>
</tr>
<tr>
<td>value</td>
<td>String</td>
<td>field</td>
<td>The value attribute is one which all &lt;input&gt;s share; however, it serves a special purpose for inputs of type radio: when a form is submitted, only radio buttons which are currently checked are submitted to the server, and the reported value is the value of the value attribute. If the value is not otherwise specified, it is the string on by default. This is demonstrated in the section Value above.</td>
</tr>
<tr>
<td>form</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
</tr>
<tr>
<td>checkValidity</td>
<td>undefined</td>
<td>field</td>
<td>Proxy input checkValidity</td>
</tr>
<tr>
<td>validity</td>
<td>undefined</td>
<td>field</td>
<td>proxy input validity</td>
</tr>
<tr>
<td>validationMessage</td>
<td>undefined</td>
<td>field</td>
<td>proxy input validationMessage</td>
</tr>
<tr>
<td>willValidate</td>
<td>undefined</td>
<td>field</td>
<td>proxy input willValidate</td>
</tr>
<tr>
<td>_uid</td>
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
<td>Sync all of the inputs with the same name</td>
</tr>
<tr>
<td>blur</td>
<td>method</td>
<td>proxy blur function</td>
</tr>
<tr>
<td>click</td>
<td>method</td>
<td>proxy click function</td>
</tr>
<tr>
<td>focus</td>
<td>method</td>
<td>proxy focus function</td>
</tr>
<tr>
<td>setErrorMessage</td>
<td>method</td>
<td>Change the default error message</td>
</tr>
<tr>
<td>setCustomValidity</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>setHelper</td>
<td>method</td>
<td>Set the element's helper text</td>
</tr>
<tr>
<td>__onFormReset</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__getInput</td>
<td>method</td>
<td>undefined</td>
</tr>
<tr>
<td>__getHelper</td>
<td>method</td>
<td>undefined</td>
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
                    