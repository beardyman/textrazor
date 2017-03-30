<a name="Parser"></a>

## Parser
**Kind**: global class  

* [Parser](#Parser)
    * [new Parser()](#new_Parser_new)
    * [.parse([text], opts)](#Parser+parse) ⇒ <code>Promise</code>

<a name="new_Parser_new"></a>

### new Parser()
Can be accessed through `textrazor.parser`

<a name="Parser+parse"></a>

### parser.parse([text], opts) ⇒ <code>Promise</code>
Parses content for entity recognition.  If `text` is not passed, `opts.url` is required.

**Kind**: instance method of <code>[Parser](#Parser)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[text]</td><td><code>String</code></td><td><p>text to be parsed</p>
</td>
    </tr><tr>
    <td>opts</td><td><code>Object</code></td><td><p>other request options. See <a href="https://www.textrazor.com/docs/rest#analysis">https://www.textrazor.com/docs/rest#analysis</a></p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
textrazor.parser.parse('The Sword of One Thousand Truths holds unspeakable powers.')
  .then((results) => {
     console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
```
