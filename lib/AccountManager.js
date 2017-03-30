
'use strict';

const Base = require('./base');


/**
 * @desc Can be accessed through `textrazor.account`
 */
class AccountManager extends Base {

  constructor(apiKey, opts) {
    super(apiKey, opts);
  }

  /**
   * @desc Gets account details
   *
   * @returns {Promise}
   */
  get() {
    return this._makeRequest('get', `/account/`);
  }
}

module.exports = ClassifierManager;