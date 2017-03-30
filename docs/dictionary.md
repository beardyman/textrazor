<a name="DictionaryManager"></a>

## DictionaryManager
**Kind**: global class  

* [DictionaryManager](#DictionaryManager)
    * [new DictionaryManager()](#new_DictionaryManager_new)
    * [.create(dictionary, [opts])](#DictionaryManager+create) ⇒ <code>Promise</code>
    * [.list()](#DictionaryManager+list) ⇒ <code>Promise</code>
    * [.get(dictionary)](#DictionaryManager+get) ⇒ <code>\*</code>
    * [.delete(dictionary)](#DictionaryManager+delete) ⇒ <code>Promise</code>
    * [.addEntries(dictionary, entityEntries)](#DictionaryManager+addEntries) ⇒ <code>Promise</code>
    * [.listEntries(dictionary, [pageLimit], [page])](#DictionaryManager+listEntries) ⇒ <code>Promise</code>
    * [.getEntry(dictionary, entity)](#DictionaryManager+getEntry) ⇒ <code>Promise</code>
    * [.deleteEntry(dictionary, entity)](#DictionaryManager+deleteEntry) ⇒ <code>Promise</code>

<a name="new_DictionaryManager_new"></a>

### new DictionaryManager()
Can be accessed through `textrazor.dictionary`

<a name="DictionaryManager+create"></a>

### dictionaryManager.create(dictionary, [opts]) ⇒ <code>Promise</code>
Creates a new dictionary
https://www.textrazor.com/docs/rest#Dictionary

**Kind**: instance method of <code>[DictionaryManager](#DictionaryManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dictionary</td><td><code>String</code></td><td><p>dictionary id</p>
</td>
    </tr><tr>
    <td>[opts]</td><td><code>Object</code></td><td><p>Hash of dictionary options</p>
</td>
    </tr>  </tbody>
</table>

<a name="DictionaryManager+list"></a>

### dictionaryManager.list() ⇒ <code>Promise</code>
Lists all existing entity dictionaries

**Kind**: instance method of <code>[DictionaryManager](#DictionaryManager)</code>  
<a name="DictionaryManager+get"></a>

### dictionaryManager.get(dictionary) ⇒ <code>\*</code>
Gets details about a specific dictionary

**Kind**: instance method of <code>[DictionaryManager](#DictionaryManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dictionary</td><td><code>String</code></td><td><p>dictionary id</p>
</td>
    </tr>  </tbody>
</table>

<a name="DictionaryManager+delete"></a>

### dictionaryManager.delete(dictionary) ⇒ <code>Promise</code>
Deletes an entire dictionary

**Kind**: instance method of <code>[DictionaryManager](#DictionaryManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dictionary</td><td><code>String</code></td><td><p>dictionary id</p>
</td>
    </tr>  </tbody>
</table>

<a name="DictionaryManager+addEntries"></a>

### dictionaryManager.addEntries(dictionary, entityEntries) ⇒ <code>Promise</code>
Creates a new entity entry in a given dictionary.
https://www.textrazor.com/docs/rest#DictionaryEntry

**Kind**: instance method of <code>[DictionaryManager](#DictionaryManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dictionary</td><td><code>String</code></td><td><p>dictionary id</p>
</td>
    </tr><tr>
    <td>entityEntries</td><td><code>Array</code></td><td><p>An array of objects</p>
</td>
    </tr>  </tbody>
</table>

<a name="DictionaryManager+listEntries"></a>

### dictionaryManager.listEntries(dictionary, [pageLimit], [page]) ⇒ <code>Promise</code>
Lists all entries in a given dictionary

**Kind**: instance method of <code>[DictionaryManager](#DictionaryManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dictionary</td><td><code>String</code></td><td></td><td><p>dictionary id</p>
</td>
    </tr><tr>
    <td>[pageLimit]</td><td><code>Number</code></td><td></td><td><p>number of items to retrieve for large lists</p>
</td>
    </tr><tr>
    <td>[page]</td><td><code>Number</code></td><td><code>0</code></td><td><p>page number when using page limit for large lists</p>
</td>
    </tr>  </tbody>
</table>

<a name="DictionaryManager+getEntry"></a>

### dictionaryManager.getEntry(dictionary, entity) ⇒ <code>Promise</code>
Gets details about a given dictionary entry

**Kind**: instance method of <code>[DictionaryManager](#DictionaryManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dictionary</td><td><code>String</code></td><td><p>dictionary id</p>
</td>
    </tr><tr>
    <td>entity</td><td><code>String</code></td><td><p>entity id</p>
</td>
    </tr>  </tbody>
</table>

<a name="DictionaryManager+deleteEntry"></a>

### dictionaryManager.deleteEntry(dictionary, entity) ⇒ <code>Promise</code>
Deletes a given dictionary entry

**Kind**: instance method of <code>[DictionaryManager](#DictionaryManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dictionary</td><td><code>String</code></td><td><p>dictionary id</p>
</td>
    </tr><tr>
    <td>entity</td><td><code>String</code></td><td><p>entity id</p>
</td>
    </tr>  </tbody>
</table>

