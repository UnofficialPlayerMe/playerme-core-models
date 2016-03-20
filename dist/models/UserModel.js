'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A model representing a Player.me User.
 */

var UserModel = function () {
  /**
   * Create a new User model.
   * @param {Object} [obj] A player response object to initialise this model with.
   */

  function UserModel() {
    var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    _classCallCheck(this, UserModel);

    this._id = obj && obj.id || -1;
    this._username = obj && obj.username || '';
    this._accountType = obj && obj.account_type || '';
    this._slug = obj && obj.slug || '';
    this._avatar = obj && obj.avatar || '';
    this._cover = obj && obj.cover || '';
    this._url = obj && obj.url || '';
    this._followersCount = obj && obj.followers_count || 0;
    this._isFeatured = obj && obj.is_featured || false;
    this._isVerified = obj && obj.is_verified || false;
    this._isPartner = obj && obj.is_partner || false;
    this._isPrivate = obj && obj.is_private || false;
  }

  /**
   * The user's ID.
   * @readonly
   * @member {number} UserModel#id
   * @returns {number}
   */


  _createClass(UserModel, [{
    key: 'isUser',


    /**
     * Whether the account is for a normal user
     * @returns {boolean}
     */
    value: function isUser() {
      return this._accountType == 'user';
    }

    /**
     * Whether the account is for a group
     * @returns {boolean}
     */

  }, {
    key: 'isGroup',
    value: function isGroup() {
      return this._accountType == 'group';
    }
  }, {
    key: 'id',
    get: function get() {
      return this._id;
    }

    /**
     * The user's username.
     * @readonly
     * @member {string} UserModel#username
     * @returns {string}
     */

  }, {
    key: 'username',
    get: function get() {
      return this._username;
    }

    /**
     * The type of account.
     * @readonly
     * @member {string} UserModel#accountType
     * @returns {string}
     */

  }, {
    key: 'accountType',
    get: function get() {
      return this._accountType;
    }

    /**
     * The URL-friendly version of the user's name.
     * @readonly
     * @member {string} UserModel#slug
     * @returns {string}
     */

  }, {
    key: 'slug',
    get: function get() {
      return this._slug;
    }

    /**
     * The URL of the user's avatar.
     * Player provides a default.
     * @readonly
     * @member {string} UserModel#avatar
     * @returns {string}
     */

  }, {
    key: 'avatar',
    get: function get() {
      return this._avatar;
    }

    /**
     * The URL to the user's profile cover image.
     * @readonly
     * @member {string} UserModel#cover
     * @returns {string}
     */

  }, {
    key: 'cover',
    get: function get() {
      return this._cover;
    }

    /**
     * A relative URL to the user's profile
     * @readonly
     * @member {string} UserModel#url
     * @returns {string}
     */

  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }

    /**
     * The number of followers the user has.
     * @readonly
     * @member {number} UserModel#followersCount
     * @returns {number}
     */

  }, {
    key: 'followersCount',
    get: function get() {
      return this._followersCount;
    }

    /**
     * Whether Player.me has listed this as a featured user.
     * @readonly
     * @member {boolean} UserModel#isFeatured
     * @returns {boolean}
     */

  }, {
    key: 'isFeatured',
    get: function get() {
      return this._isFeatured;
    }

    /**
     * Whether Player.me has verified this user.
     * @readonly
     * @member {boolean} UserModel#isVerified
     * @returns {boolean}
     */

  }, {
    key: 'isVerified',
    get: function get() {
      return this._isVerified;
    }

    /**
     * Whether this is a Player.me staff member or partner.
     * @readonly
     * @member {boolean} UserModel#isPartner
     * @returns {boolean}
     */

  }, {
    key: 'isPartner',
    get: function get() {
      return this._isPartner;
    }

    /**
     * Whether this is a private user.
     * @readonly
     * @member {boolean} UserModel#isPrivate
     * @returns {boolean}
     */

  }, {
    key: 'isPrivate',
    get: function get() {
      return this._isPrivate;
    }
  }]);

  return UserModel;
}();

exports.default = UserModel;