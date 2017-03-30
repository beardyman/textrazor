
'use strict';

const Base = require('./base');


/**
 * @desc Can be accessed through `textrazor.classifier`.  More details can be found at https://www.textrazor.com/docs/rest#ClassifierManager
 */
class ClassifierManager extends Base {

  constructor(apiKey, opts) {
    super(apiKey, opts);
  }

  /**
   * @desc Creates a new classifier
   * https://www.textrazor.com/docs/rest#ClassifierManager
   *
   * @param {String} classifier - classifier id
   * @param {Object} [opts] - additional options
   * @returns {Promise}
   */
  create(classifier, opts) {
    return this._makeRequest('put', `/categories/${classifier}`, opts);
  }

  /**
   * Deletes a Classifier
   *
   * @param {String} classifier - classifier id
   * @returns {Promise}
   */
  delete(classifier) {
    return this._makeRequest('delete', `/categories/${classifier}`);
  }

  /**
   * @desc Lists all categories for a given classifier.
   *
   * @param {String} classifier - classifier id
   * @param {Number} [pageLimit] - number of results to return per page
   * @param {Number} [page=0] - page to view when using page limit
   * @returns {Promise}
   */
  list(classifier, pageLimit, page = 0) {
    let qs = '';

    if (typeof pageLimit !== `undefined`) {
      qs = `?limit=${pageLimit}&offset=${page}`;
    }

    return this._makeRequest('get', `/categories/${classifier}/_all${qs}`);
  }

  /**
   * @desc Gets details for a given category within a classifier
   *
   * @param {String} classifier - classifier id
   * @param {String} category - category id
   * @returns {Promise}
   */
  getCategory(classifier, category) {
    return this._makeRequest('get', `/categories/${classifier}/${category}`);
  }

  /**
   * Deletes a given category within a classifier
   *
   * @param {String} classifier - classifier id
   * @param {String} category - category id
   * @returns {Promise}
   */
  deleteCategory(classifier, category) {
    return this._makeRequest('delete', `/categories/${classifier}/${category}`);
  }
}

module.exports = ClassifierManager;