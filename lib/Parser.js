
'use strict';

const Base = require('./base');
const _ = require('lodash');

/**
 * @desc Can be accessed through `textrazor.parser`
 */
class Parser extends Base {

  constructor(apiKey, opts) {
    super(apiKey, opts);
  }

  /**
   * @desc Parses content for entity recognition.  If `text` is not passed, `opts.url` is required.
   *
   * @example
   * textrazor.parser.parse('The Sword of One Thousand Truths holds unspeakable powers.')
   *   .then((results) => {
   *      console.log(results);
   *   })
   *   .catch((err) => {
   *     console.log(err);
   *   });
   *
   * @param {String} [text] - text to be parsed
   * @param {Object} opts - other request options. See https://www.textrazor.com/docs/rest#analysis
   * @returns {Promise}
   */
  parse(text, opts) {
    let requestOpts = {};

    if (_.isObject(text)) {
      opts = text;
    } else {
      requestOpts.text = text;
    }

    requestOpts = _.merge(requestOpts, {
      'extractors': 'entities'
    }, opts);

    return this._makeRequest('post', '', {form: requestOpts});
  }
}

module.exports = Parser;