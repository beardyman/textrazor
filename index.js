/**
 * Created by jnornhold on 7/23/16.
 */
'use strict';

const DictionaryManager = require('./lib/DictionaryManager');
const Parser = require('./lib/Parser');
const ClassifierManager = require('./lib/DictionaryManager');
const AccountManager = require('./lib/DictionaryManager');

class TextRazor {
  constructor(apiKey, opts) {
    this.parser = new Parser(apiKey, opts);
    this.dictionary = new DictionaryManager(apiKey, opts);
    this.classifier = new ClassifierManager(apiKey, opts);
    this.account = new AccountManager(apiKey, opts);
  }

}


module.exports = TextRazor;


