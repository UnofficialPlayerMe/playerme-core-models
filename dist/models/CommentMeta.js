'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class representing a Player.me Comment's assets.
 */

var CommentMeta = function () {
  /**
   * Create a new Comment Meta instance.
   * @param {Object} [obj] A player response object to initialise this object with.
   */

  function CommentMeta() {
    var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    _classCallCheck(this, CommentMeta);

    this._images = obj && obj.images || [];
    this._url = obj && obj.url || '';
    this._title = obj && obj.title || '';
    this._description = obj && obj.description || '';
    this._provider = obj && obj.provider || '';
    this._content = obj && obj.content || '';
    this._isInternal = obj && obj.isInternal || false;
    this._thumbnail = obj && obj.thumbnail || '';
  }

  /**
   * An array of URLs to images.
   * @readonly
   * @member {string[]} CommentMetaModel#images
   * @returns {string[]}
   */


  _createClass(CommentMeta, [{
    key: 'isPhoto',


    /**
     * Whether this asset is a photo.
     * @returns {boolean}
     */
    value: function isPhoto() {
      return this._content == 'photo';
    }

    /**
     * Whether this asset is a video.
     * @returns {boolean}
     */

  }, {
    key: 'isVideo',
    value: function isVideo() {
      return this._content == 'video';
    }
  }, {
    key: 'images',
    get: function get() {
      return this._images;
    }

    /**
     * Absolute path to this asset.
     * @readonly
     * @member {string} CommentMetaModel#url
     * @returns {string}
     */

  }, {
    key: 'url',
    get: function get() {
      return this._images;
    }

    /**
     * Title of this asset.
     * @readonly
     * @member {string} CommentMetaModel#title
     * @returns {string}
     */

  }, {
    key: 'title',
    get: function get() {
      return this._title;
    }

    /**
     * Description for this asset.
     * @readonly
     * @member {string} CommentMetaModel#description
     * @returns {string}
     */

  }, {
    key: 'description',
    get: function get() {
      return this._description;
    }

    /**
     * The provider that hosts this asset.
     * @readonly
     * @member {string} CommentMetaModel#provider
     * @returns {string}
     */

  }, {
    key: 'provider',
    get: function get() {
      return this._provider;
    }

    /**
     * The type of asset.
     * @readonly
     * @member {string} CommentMetaModel#content
     * @returns {string}
     */

  }, {
    key: 'content',
    get: function get() {
      return this._content;
    }

    /**
     * TODO What is CommentMetaModel isInternal?
     * @readonly
     * @member {boolean} CommentMetaModel#isInternal
     * @returns {boolean}
     */

  }, {
    key: 'isInternal',
    get: function get() {
      return this._isInternal;
    }

    /**
     * The URL of a thumbnail for the asset.
     * @readonly
     * @member {string} CommentMetaModel#thumbnail
     * @returns {string}
     */

  }, {
    key: 'thumbnail',
    get: function get() {
      return this._thumbnail;
    }
  }]);

  return CommentMeta;
}();

exports.default = CommentMeta;