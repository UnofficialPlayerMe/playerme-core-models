'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserModel2 = require('./UserModel');

var _UserModel3 = _interopRequireDefault(_UserModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A model representing an extended data set for a Player.me User.
 * @extends UserModel
 */

var UserExtendedModel = function (_UserModel) {
  _inherits(UserExtendedModel, _UserModel);

  /**
   * Create a new extended User model.
   * @param {Object} [obj] A player response object to initialise this model with.
   */

  function UserExtendedModel() {
    var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    _classCallCheck(this, UserExtendedModel);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserExtendedModel).call(this, obj));

    var cover = obj && obj.cover || null;
    var avatar = obj && obj.avatar || null;

    _this._shortDescription = obj && obj.short_description || '';
    _this._description = obj && obj.description || '';
    _this._descriptionHtml = obj && obj.descriptionHtml || '';
    _this._coverOriginal = cover && cover.original || '';
    _this._coverCached = cover && cover.cached || '';
    _this._coverOriginalFilename = cover && cover.original_filename || '';
    _this._avatarOriginal = avatar && avatar.original || '';
    _this._avatarCached = avatar && avatar.cached || '';
    _this._avatarOriginalFilename = avatar && avatar.original_filename || '';
    _this._createdAt = obj && obj.created_at || '';
    _this._generatedBy = obj && obj.generated_by || null;
    _this._isCurrentUser = obj && obj.is_current_user || false;
    _this._isFollowing = obj && obj.is_following || false;
    _this._isFollowed = obj && obj.is_followed || false;
    _this._isFriend = obj && obj.is_friend || false;
    _this._isBlocked = obj && obj.is_blocked || false;
    _this._canMessage = obj && obj.can_message || false;
    _this._isOnline = obj && obj.is_online || false;
    _this._followingCount = obj && obj.following_count || 0;

    // Overrides
    if (cover && !_this._cover) _this._cover = cover.cached;
    if (avatar && !_this._avatar) _this._avatar = avatar.cached;
    return _this;
  }

  /**
   * The user's short bio.
   * @readonly
   * @member {string} UserExtendedModel#shortDescription
   * @returns {string}
   */


  _createClass(UserExtendedModel, [{
    key: 'shortDescription',
    get: function get() {
      return this._shortDescription;
    }

    /**
     * The user's bio.
     * @readonly
     * @member {string} UserExtendedModel#description
     * @returns {string}
     */

  }, {
    key: 'description',
    get: function get() {
      return this._description;
    }

    /**
     * The user's bio in HTML.
     * @readonly
     * @member {string} UserExtendedModel#descriptionHtml
     * @returns {string}
     */

  }, {
    key: 'descriptionHtml',
    get: function get() {
      return this._descriptionHtml;
    }

    /**
     * The path to the original cover image.
     * @readonly
     * @member {string} UserExtendedModel#coverOriginal
     * @returns {string}
     */

  }, {
    key: 'coverOriginal',
    get: function get() {
      return this._coverOriginal;
    }

    /**
     * The path to the cached cover image.
     * @readonly
     * @member {string} UserExtendedModel#coverCached
     * @returns {string}
     */

  }, {
    key: 'coverCached',
    get: function get() {
      return this._coverCached;
    }

    /**
     * The original cover image's filename.
     * @readonly
     * @member {string} UserExtendedModel#coverOriginalFilename
     * @returns {string}
     */

  }, {
    key: 'coverOriginalFilename',
    get: function get() {
      return this._coverOriginalFilename;
    }

    /**
     * The path to the original avatar.
     * @readonly
     * @member {string} UserExtendedModel#avatarOriginal
     * @returns {string}
     */

  }, {
    key: 'avatarOriginal',
    get: function get() {
      return this._avatarOriginal;
    }

    /**
     * The path to the cached avatar.
     * @readonly
     * @member {string} UserExtendedModel#avatarCached
     * @returns {string}
     */

  }, {
    key: 'avatarCached',
    get: function get() {
      return this._avatarCached;
    }

    /**
     * The original avatar's filename.
     * @readonly
     * @member {string} UserExtendedModel#avatarOriginalFilename
     * @returns {string}
     */

  }, {
    key: 'avatarOriginalFilename',
    get: function get() {
      return this._avatarOriginalFilename;
    }

    /**
     * The date and time the user was created on.
     * @readonly
     * @member {Date} UserExtendedModel#createdAt
     * @returns {Date}
     */

  }, {
    key: 'createdAt',
    get: function get() {
      return this._createdAt;
    }

    /**
     * TODO What is a user's generatedBy field?
     * @readonly
     * @member {string} UserExtendedModel#generatedBy
     * @returns {string}
     */

  }, {
    key: 'generatedBy',
    get: function get() {
      return this._generatedBy;
    }

    /**
     * Whether this is the logged in user.
     * @readonly
     * @member {boolean} UserExtendedModel#isCurrentUser
     * @returns {boolean}
     */

  }, {
    key: 'isCurrentUser',
    get: function get() {
      return this._isCurrentUser;
    }

    /**
     * Whether this user is following the logged in user.
     * @readonly
     * @member {boolean} UserExtendedModel#isFollowing
     * @returns {boolean}
     */

  }, {
    key: 'isFollowing',
    get: function get() {
      return this._isFollowing;
    }

    /**
     * Whether the logged in user has followed this user.
     * @readonly
     * @member {boolean} UserExtendedModel#isFollowed
     * @returns {boolean}
     */

  }, {
    key: 'isFollowed',
    get: function get() {
      return this._isFollowed;
    }

    /**
     * Whether this and the logged in user are following each other.
     * @readonly
     * @member {boolean} UserExtendedModel#isFriend
     * @returns {boolean}
     */

  }, {
    key: 'isFriend',
    get: function get() {
      return this._isFriend;
    }

    /**
     * Whether the logged in user has blocked this user.
     * @readonly
     * @member {boolean} UserExtendedModel#isBlocked
     * @returns {boolean}
     */

  }, {
    key: 'isBlocked',
    get: function get() {
      return this._isBlocked;
    }

    /**
     * Whether the logged in user can message this user.
     * @readonly
     * @member {boolean} UserExtendedModel#canMessage
     * @returns {boolean}
     */

  }, {
    key: 'canMessage',
    get: function get() {
      return this._canMessage;
    }

    /**
     * Whether the user is logged in.
     * @readonly
     * @member {boolean} UserExtendedModel#isOnline
     * @returns {boolean}
     */

  }, {
    key: 'isOnline',
    get: function get() {
      return this._isOnline;
    }

    /**
     * The number of user's this user is following.
     * @readonly
     * @member {number} UserExtendedModel#followingCount
     * @returns {number}
     */

  }, {
    key: 'followingCount',
    get: function get() {
      return this._followingCount;
    }
  }]);

  return UserExtendedModel;
}(_UserModel3.default);

exports.default = UserExtendedModel;