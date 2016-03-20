import UserModel from './UserModel';

/**
 * A model representing an extended data set for a Player.me User.
 * @extends UserModel
 */
class UserExtendedModel extends UserModel{
    /**
     * Create a new extended User model.
     * @param {Object} [obj] A player response object to initialise this model with.
     */
    constructor(obj=null)
    {
        super(obj);
        var cover = obj && obj.cover || null;
        var avatar = obj && obj.avatar || null;

        this._shortDescription          = obj    && obj   .short_description    || '';
        this._description               = obj    && obj   .description          || '';
        this._descriptionHtml           = obj    && obj   .descriptionHtml      || '';
        this._coverOriginal             = cover  && cover .original             || '';
        this._coverCached               = cover  && cover .cached               || '';
        this._coverOriginalFilename     = cover  && cover .original_filename    || '';
        this._avatarOriginal            = avatar && avatar.original             || '';
        this._avatarCached              = avatar && avatar.cached               || '';
        this._avatarOriginalFilename    = avatar && avatar.original_filename    || '';
        this._createdAt                 = obj    && obj   .created_at           || '';
        this._generatedBy               = obj    && obj   .generated_by         || null;
        this._isCurrentUser             = obj    && obj   .is_current_user      || false;
        this._isFollowing               = obj    && obj   .is_following         || false;
        this._isFollowed                = obj    && obj   .is_followed          || false;
        this._isFriend                  = obj    && obj   .is_friend            || false;
        this._isBlocked                 = obj    && obj   .is_blocked           || false;
        this._canMessage                = obj    && obj   .can_message          || false;
        this._isOnline                  = obj    && obj   .is_online            || false;
        this._followingCount            = obj    && obj   .following_count      || 0;

        // Overrides
        if (cover && !this._cover) this._cover = cover.cached;
        if (avatar && !this._avatar) this._avatar = avatar.cached;
    }

    /**
     * The user's short bio.
     * @readonly
     * @member {string} UserExtendedModel#shortDescription
     * @returns {string}
     */
    get shortDescription() {
        return this._shortDescription;
    }

    /**
     * The user's bio.
     * @readonly
     * @member {string} UserExtendedModel#description
     * @returns {string}
     */
    get description() {
        return this._description;
    }

    /**
     * The user's bio in HTML.
     * @readonly
     * @member {string} UserExtendedModel#descriptionHtml
     * @returns {string}
     */
    get descriptionHtml() {
        return this._descriptionHtml;
    }

    /**
     * The path to the original cover image.
     * @readonly
     * @member {string} UserExtendedModel#coverOriginal
     * @returns {string}
     */
    get coverOriginal() {
        return this._coverOriginal;
    }

    /**
     * The path to the cached cover image.
     * @readonly
     * @member {string} UserExtendedModel#coverCached
     * @returns {string}
     */
    get coverCached() {
        return this._coverCached;
    }

    /**
     * The original cover image's filename.
     * @readonly
     * @member {string} UserExtendedModel#coverOriginalFilename
     * @returns {string}
     */
    get coverOriginalFilename() {
        return this._coverOriginalFilename;
    }

    /**
     * The path to the original avatar.
     * @readonly
     * @member {string} UserExtendedModel#avatarOriginal
     * @returns {string}
     */
    get avatarOriginal() {
        return this._avatarOriginal;
    }

    /**
     * The path to the cached avatar.
     * @readonly
     * @member {string} UserExtendedModel#avatarCached
     * @returns {string}
     */
    get avatarCached() {
        return this._avatarCached;
    }

    /**
     * The original avatar's filename.
     * @readonly
     * @member {string} UserExtendedModel#avatarOriginalFilename
     * @returns {string}
     */
    get avatarOriginalFilename() {
        return this._avatarOriginalFilename;
    }

    /**
     * The date and time the user was created on.
     * @readonly
     * @member {Date} UserExtendedModel#createdAt
     * @returns {Date}
     */
    get createdAt() {
        return this._createdAt;
    }

    /**
     * TODO What is a user's generatedBy field?
     * @readonly
     * @member {string} UserExtendedModel#generatedBy
     * @returns {string}
     */
    get generatedBy() {
        return this._generatedBy;
    }

    /**
     * Whether this is the logged in user.
     * @readonly
     * @member {boolean} UserExtendedModel#isCurrentUser
     * @returns {boolean}
     */
    get isCurrentUser() {
        return this._isCurrentUser;
    }

    /**
     * Whether this user is following the logged in user.
     * @readonly
     * @member {boolean} UserExtendedModel#isFollowing
     * @returns {boolean}
     */
    get isFollowing() {
        return this._isFollowing;
    }

    /**
     * Whether the logged in user has followed this user.
     * @readonly
     * @member {boolean} UserExtendedModel#isFollowed
     * @returns {boolean}
     */
    get isFollowed() {
        return this._isFollowed;
    }

    /**
     * Whether this and the logged in user are following each other.
     * @readonly
     * @member {boolean} UserExtendedModel#isFriend
     * @returns {boolean}
     */
    get isFriend() {
        return this._isFriend;
    }

    /**
     * Whether the logged in user has blocked this user.
     * @readonly
     * @member {boolean} UserExtendedModel#isBlocked
     * @returns {boolean}
     */
    get isBlocked() {
        return this._isBlocked;
    }

    /**
     * Whether the logged in user can message this user.
     * @readonly
     * @member {boolean} UserExtendedModel#canMessage
     * @returns {boolean}
     */
    get canMessage() {
        return this._canMessage;
    }

    /**
     * Whether the user is logged in.
     * @readonly
     * @member {boolean} UserExtendedModel#isOnline
     * @returns {boolean}
     */
    get isOnline() {
        return this._isOnline;
    }

    /**
     * The number of user's this user is following.
     * @readonly
     * @member {number} UserExtendedModel#followingCount
     * @returns {number}
     */
    get followingCount() {
        return this._followingCount;
    }
}

export default UserExtendedModel;
