
    
exports.data = {
    title:"squid-textarea",
    tags:"components",
    layout:"component_layout.11ty.js"
};
    
    exports.render = (data) =>`
    <div class='sink'><h1>squid-textarea</h1>
    <h2>Description</h2> <p>The &lt;textarea&gt; HTML element represents a multi-line plain-text editing control,
useful when you want to allow users to enter a sizeable amount of free-form text,
for example a comment on a review or feedback form.</p>

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
<td>checkValidity</td>
<td>undefined</td>
<td>field</td>
<td>Proxy input checkValidity</td>
</tr>
<tr>
<td>value</td>
<td>String</td>
<td>field</td>
<td>The text inside of the text area.</td>
</tr>
<tr>
<td>autocomplete</td>
<td>String</td>
<td>field</td>
<td>This attribute indicates whether the value of the control can be automatically completed by the browser. values are <code>off</code>, <code>on</code>.</td>
</tr>
<tr>
<td>autofocus</td>
<td>Boolean</td>
<td>field</td>
<td>This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.</td>
</tr>
<tr>
<td>cols</td>
<td>String</td>
<td>field</td>
<td>-The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20</td>
</tr>
<tr>
<td>counter</td>
<td>Boolean</td>
<td>field</td>
<td>Displays an instance of the <a href="../squid-character-count"><code>SquidCharacterCount</code></a> component if set to true and a maxlength is provided. Reflected as a property.</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>field</td>
<td>-This Boolean attribute indicates that the user cannot interact with the control.</td>
</tr>
<tr>
<td>maxlength</td>
<td>String</td>
<td>field</td>
<td>The maximum number of characters (UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.</td>
</tr>
<tr>
<td>minlength</td>
<td>String</td>
<td>field</td>
<td>The minimum number of characters (UTF-16 code units) required that the user should enter.</td>
</tr>
<tr>
<td>placeholder</td>
<td>String</td>
<td>field</td>
<td>A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.</td>
</tr>
<tr>
<td>readonly</td>
<td>Boolean</td>
<td>field</td>
<td>This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.</td>
</tr>
<tr>
<td>required</td>
<td>Boolean</td>
<td>field</td>
<td>This attribute specifies that the user must fill in a value before submitting a form.</td>
</tr>
<tr>
<td>rows</td>
<td>String</td>
<td>field</td>
<td>The number of visible text lines for the control.</td>
</tr>
<tr>
<td>spellcheck</td>
<td>Boolean</td>
<td>field</td>
<td>Specifies whether the &lt;textarea&gt; is subject to spell checking by the underlying browser/OS. The value can be: <code>true</code>, <code>false</code>, <code>default</code>.</td>
</tr>
<tr>
<td>wrap</td>
<td>String</td>
<td>field</td>
<td>Indicates how the control wraps text. Possible values are: <code>hard</code>, <code>soft</code>, <code>off</code>.</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>field</td>
<td>An id attribute to allow the &lt;textarea&gt; to be associated with a &lt;label&gt; element for accessibility purposes</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>field</td>
<td>The name of the control.</td>
</tr>
<tr>
<td>form</td>
<td>undefined</td>
<td>field</td>
<td>undefined</td>
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
<td>__onInput</td>
<td>method</td>
<td>undefined</td>
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
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">squid-textarea</span>&gt;</span>Tell us your story
</code></pre>

    <hr>
    <div>
    <squid-textarea>Tell us your story 
    </div>
    </div>
                    `;
                    