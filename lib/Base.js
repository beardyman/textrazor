'use strict';

const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const _ = require('lodash');


/**
 * @abstract
 */
class BaseRazor {

  /**
   * Sets up default request options.
   *
   * @param apiKey
   * @param opts
   */
  constructor(apiKey, opts) {
    this._opts = _.merge({
      host: 'api.textrazor.com',
      protocol: 'https',
      headers: {
        'Content-type': 'application/form',
      },
      gzip: true
    }, opts);

    this._opts.headers['x-textrazor-key'] = apiKey;
    this._baseUrl = `${this._opts.protocol}://${this._opts.host}`;
  }

  /**
   * Makes rest requests and formats the response as JSON.
   *
   * @param method
   * @param endpoint
   * @param opts
   * @private
   */
  _makeRequest(method, endpoint, opts) {
    const requestOpts = _.merge({url:`${this._baseUrl}${endpoint}`, headers: this._opts.headers}, opts);

    return request[`${method}Async`](requestOpts).then((response) => JSON.parse(response.body));
  }
}

module.exports = BaseRazor;