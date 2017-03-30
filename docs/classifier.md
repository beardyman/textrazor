<a name="ClassifierManager"></a>

## ClassifierManager
**Kind**: global class  

* [ClassifierManager](#ClassifierManager)
    * [new ClassifierManager()](#new_ClassifierManager_new)
    * [.create(classifier, [opts])](#ClassifierManager+create) ⇒ <code>Promise</code>
    * [.delete(classifier)](#ClassifierManager+delete) ⇒ <code>Promise</code>
    * [.list(classifier, [pageLimit], [page])](#ClassifierManager+list) ⇒ <code>\*</code>
    * [.getCategory(classifier, category)](#ClassifierManager+getCategory) ⇒ <code>Promise</code>
    * [.deleteCategory(classifier, category)](#ClassifierManager+deleteCategory) ⇒ <code>Promise</code>

<a name="new_ClassifierManager_new"></a>

### new ClassifierManager()
Can be accessed through `textrazor.classifier`.  More details can be found at https://www.textrazor.com/docs/rest#ClassifierManager

<a name="ClassifierManager+create"></a>

### classifierManager.create(classifier, [opts]) ⇒ <code>Promise</code>
Creates a new classifier
https://www.textrazor.com/docs/rest#ClassifierManager

**Kind**: instance method of <code>[ClassifierManager](#ClassifierManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>classifier</td><td><code>String</code></td><td><p>classifier id</p>
</td>
    </tr><tr>
    <td>[opts]</td><td><code>Object</code></td><td><p>additional options</p>
</td>
    </tr>  </tbody>
</table>

<a name="ClassifierManager+delete"></a>

### classifierManager.delete(classifier) ⇒ <code>Promise</code>
Deletes a Classifier

**Kind**: instance method of <code>[ClassifierManager](#ClassifierManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>classifier</td><td><code>String</code></td><td><p>classifier id</p>
</td>
    </tr>  </tbody>
</table>

<a name="ClassifierManager+list"></a>

### classifierManager.list(classifier, [pageLimit], [page]) ⇒ <code>\*</code>
Lists all categories for a given classifier.

**Kind**: instance method of <code>[ClassifierManager](#ClassifierManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>classifier</td><td><code>String</code></td><td></td><td><p>classifier id</p>
</td>
    </tr><tr>
    <td>[pageLimit]</td><td><code>Number</code></td><td></td><td><p>number of results to return per page</p>
</td>
    </tr><tr>
    <td>[page]</td><td><code>Number</code></td><td><code>0</code></td><td><p>page to view when using page limit</p>
</td>
    </tr>  </tbody>
</table>

<a name="ClassifierManager+getCategory"></a>

### classifierManager.getCategory(classifier, category) ⇒ <code>Promise</code>
Gets details for a given category within a classifier

**Kind**: instance method of <code>[ClassifierManager](#ClassifierManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>classifier</td><td><code>String</code></td><td><p>classifier id</p>
</td>
    </tr><tr>
    <td>category</td><td><code>String</code></td><td><p>category id</p>
</td>
    </tr>  </tbody>
</table>

<a name="ClassifierManager+deleteCategory"></a>

### classifierManager.deleteCategory(classifier, category) ⇒ <code>Promise</code>
Deletes a given category within a classifier

**Kind**: instance method of <code>[ClassifierManager](#ClassifierManager)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>classifier</td><td><code>String</code></td><td><p>classifier id</p>
</td>
    </tr><tr>
    <td>category</td><td><code>String</code></td><td><p>category id</p>
</td>
    </tr>  </tbody>
</table>

