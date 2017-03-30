
'use strict';

const Base = require('./base');

/**
 * @desc Can be accessed through `textrazor.dictionary`
 */
class DictionaryManager extends Base {

  constructor(apiKey, opts) {
    super(apiKey, opts);
  }

  /**
   * @desc Creates a new dictionary
   * https://www.textrazor.com/docs/rest#Dictionary
   *
   * @param {String} dictionary - dictionary id
   * @param {Object} [opts] - Hash of dictionary options
   * @returns {Promise}
   */
  create(dictionary, opts) {
    return this._makeRequest('put', `/entities/${dictionary}`, {form: opts});
  }

  /**
   * @desc Lists all existing entity dictionaries
   *
   * @returns {Promise}
   */
  list() {
    return this._makeRequest('get', '/entities/');
  }

  /**
   * @desc Gets details about a specific dictionary
   *
   * @param {String} dictionary - dictionary id
   * @returns {*}
   */
  get(dictionary) {
    return this._makeRequest('get', `/entities/${dictionary}`);
  }

  /**
   * @desc Deletes an entire dictionary
   *
   * @param {String} dictionary - dictionary id
   * @returns {Promise}
   */
  delete(dictionary) {
    return this._makeRequest('delete', `/entities/${dictionary}`);
  }

  /**
   * @desc Creates a new entity entry in a given dictionary.
   * https://www.textrazor.com/docs/rest#DictionaryEntry
   *
   * @param {String} dictionary - dictionary id
   * @param {Array} entityEntries - An array of objects
   *
   * @returns {Promise}
   */
  addEntries(dictionary, entityEntries) {
    return this._makeRequest('post', `/entities/${dictionary}/`, {form: entityEntries});
  }

  /**
   * Lists all entries in a given dictionary
   *
   * @param {String} dictionary - dictionary id
   * @param {Number} [pageLimit] - number of items to retrieve for large lists
   * @param {Number} [page=0] - page number when using page limit for large lists
   * @returns {Promise}
   */
  listEntries(dictionary, pageLimit, page = 0) {
    let qs = '';

    if (typeof pageLimit !== `undefined`) {
      qs = `?limit=${pageLimit}&offset=${page}`;
    }

    return this._makeRequest('get', `/entities/${dictionary}/_all${qs}`);
  }

  /**
   * Gets details about a given dictionary entry
   *
   * @param {String} dictionary - dictionary id
   * @param {String} entity - entity id
   * @returns {Promise}
   */
  getEntry(dictionary, entity) {
    return this._makeRequest('get', `/entities/${dictionary}/${entity}`);
  }

  /**
   * Deletes a given dictionary entry
   *
   * @param {String} dictionary - dictionary id
   * @param {String} entity - entity id
   * @returns {Promise}
   */
  deleteEntry(dictionary, entity) {
    return this._makeRequest('delete', `/entities/${dictionary}/${entity}`);
  }
}


module.exports = DictionaryManager;