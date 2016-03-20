'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CommentMeta = require('./CommentMeta');

var _CommentMeta2 = _interopRequireDefault(_CommentMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A model representing a Player.me Comment.
 */

var CommentModel = function () {
  /**
   * Create a new Comment model.
   * @param {Object} [obj] A player response object to initialise this model with.
   */

  function CommentModel() {
    var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    _classCallCheck(this, CommentModel);

    var data = obj && obj.data || null;

    this._id = obj && obj.id || -1;
    this._userId = obj && obj.user_id || -1;
    this._activityUserId = obj && obj.activity_user_id || -1;
    this._activityId = obj && obj.activity_id || -1;
    this._post = data && data.post || '';
    this._postRaw = data && data.post_raw || '';
    this._metas = obj && obj.metas.map(function (meta) {
      return new _CommentMeta2.default(meta);
    }) || [];
    this._createdAt = obj && obj.created_at || null;
    this._updatedAt = obj && obj.updated_at || null;
    this._editedAt = obj && obj.edited_at || null;
    this._deletedAt = obj && obj.deleted_at || null;
    this._user = obj && obj.user || null; // TODO Convert to User model
    this._userIsBlocked = obj && obj.userIsBlocked || false;
    this._hasLiked = obj && obj.hasLiked || false;
    this._url = obj && obj.url || '';
    this._showDelete = obj && obj.showDelete || false;
    this._showEdit = obj && obj.showEdit || false;
    this._isOwnComment = obj && obj.isOwnComment || false;
    this._likesCount = obj && obj.likesCount || 0;
  }

  /**
   * The comment's ID number.
   * @readonly
   * @member {number} CommentModel#id
   * @returns {number}
   */


  _createClass(CommentModel, [{
    key: 'like',


    /**
     * Like the comment and update likesCount.
     * @param bool
     */
    value: function like() {
      var bool = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (bool == this._hasLiked) return;
      this._hasLiked = bool;
      this._likesCount += bool ? 1 : -1; // Update count
    }
  }, {
    key: 'id',
    get: function get() {
      return this._id;
    }

    /**
     * The ID of the user that posted the comment.
     * @readonly
     * @member {number} CommentModel#userId
     * @returns {number}
     */

  }, {
    key: 'userId',
    get: function get() {
      return this._userId;
    }

    /**
     * The ID of the original poster.
     * @readonly
     * @member {number} CommentModel#activity_user_id
     * @returns {number}
     */

  }, {
    key: 'activityUserId',
    get: function get() {
      return this._activityUserId;
    }

    /**
     * The ID of the activity this comment is on.
     * @readonly
     * @member {number} CommentModel#activityId
     * @returns {number}
     */

  }, {
    key: 'activityId',
    get: function get() {
      return this._activityId;
    }

    /**
     * The display text for the comment.
     * @readonly
     * @member {string} CommentModel#post
     * @returns {string}
     */

  }, {
    key: 'post',
    get: function get() {
      return this._post;
    }

    /**
     * The entered text for the comment.
     * @readonly
     * @member {string} CommentModel#postRaw
     * @returns {string}
     */

  }, {
    key: 'postRaw',
    get: function get() {
      return this._postRaw;
    }

    /**
     * Metadata associated with this comment.
     * @readonly
     * @member {Array} CommentModel#metas
     * @returns {Array}
     */

  }, {
    key: 'metas',
    get: function get() {
      return this._metas;
    }

    /**
     * The date and time the comment was created on.
     * @readonly
     * @member {Date} CommentModel#createdAt
     * @returns {Date}
     */

  }, {
    key: 'createdAt',
    get: function get() {
      return this._createdAt;
    }

    /**
     * The date and time the comment was last updated on.
     * @readonly
     * @member {Date} CommentModel#updatedAt
     * @returns {Date}
     */

  }, {
    key: 'updatedAt',
    get: function get() {
      return this._updatedAt;
    }

    /**
     * The date and time the comment was last edited by the user on (or null).
     * @readonly
     * @member {Date} CommentModel#editedAt
     * @returns {Date}
     */

  }, {
    key: 'editedAt',
    get: function get() {
      return this._editedAt;
    }

    /**
     * The date and time the comment was soft deleted on (or null).
     * @readonly
     * @member {Date} CommentModel#deletedAt
     * @returns {Date}
     */

  }, {
    key: 'deletedAt',
    get: function get() {
      return this._deletedAt;
    }

    /**
     * If the current user has blocked the user that wrote this comment.
     * @readonly
     * @member {boolean} CommentModel#userIsBlocked
     * @returns {boolean}
     */

  }, {
    key: 'userIsBlocked',
    get: function get() {
      return this._userIsBlocked;
    }

    /**
     * The user that posted the comment.
     * @readonly
     * @member {UserModel} CommentModel#user
     * @returns {UserModel}
     */

  }, {
    key: 'user',
    get: function get() {
      return this._user;
    }

    /**
     * Whether the logged in user has liked this comment.
     * @readonly
     * @member {boolean} CommentModel#hasLiked
     * @returns {boolean}
     */

  }, {
    key: 'hasLiked',
    get: function get() {
      return this._hasLiked;
    }

    /**
     * The full URL to this post on the main player.me site.
     * @readonly
     * @member {string} CommentModel#url
     * @returns {string}
     */

  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }

    /**
     * Whether the logged in user is able to delete this comment.
     * @readonly
     * @member {boolean} CommentModel#showDelete
     * @returns {boolean}
     */

  }, {
    key: 'showDelete',
    get: function get() {
      return this._showDelete;
    }

    /**
     * Whether the logged in user is able to edit this comment.
     * @readonly
     * @member {boolean} CommentModel#showEdit
     * @returns {boolean}
     */

  }, {
    key: 'showEdit',
    get: function get() {
      return this._showEdit;
    }

    /**
     * Whether this comment belongs to the logged in user.
     * @readonly
     * @member {boolean} CommentModel#isOwnComment
     * @returns {boolean}
     */

  }, {
    key: 'isOwnComment',
    get: function get() {
      return this._isOwnComment;
    }

    /**
     * The number of likes this comment has.
     * @readonly
     * @member {number} CommentModel#likesCount
     * @returns {number}
     */

  }, {
    key: 'likesCount',
    get: function get() {
      return this._likesCount;
    }
  }]);

  return CommentModel;
}();

exports.default = CommentModel;