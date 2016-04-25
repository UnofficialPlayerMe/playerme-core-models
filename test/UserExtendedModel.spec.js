import {assertObject} from './utils/TestHelpers';
import UserExtendedModel from '../src/models/user/UserExtendedModel';
import {user as RawUser, group as RawGroup} from './mocks/RawUserExtendedModel';

describe("UserExtendedModel", function() {
    it("has the expected fields for a user", function() {
        var model = new UserExtendedModel(RawUser);

        assertObject("User Extended Model", model, {
            // Basic model
            'id':             'number',
            'username':       'string',
            'accountType':    {type:'string', value: 'user'},
            'slug':           'string',
            'avatar':         'string',
            'cover':          'string',
            'url':            'string',
            'followersCount': 'number',
            'isFeatured':     'boolean',
            'isVerified':     'boolean',
            'isPartner':      'boolean',
            'isPrivate':      'boolean',

            // Extended
            'shortDescription':       'string',
            'description':            'string',
            'descriptionHtml':        'string',
            'coverOriginal':          'string',
            'coverOriginalFilename':  'string',
            'avatarOriginal':         'string',
            'avatarOriginalFilename': 'string',
            'createdAt':              'Date',
            'generatedBy':            'string',
            'isCurrentUser':          'boolean',
            'isFollowing':            'boolean',
            'isFollowed':             'boolean',
            'isFriend':               'boolean',
            'isBlocked':              'boolean',
            'canMessage':             'boolean',
            'isOnline':               'boolean',
            'followingCount':         'number',

            // Group Only
            'isConfirmedGroupMember': {type:'boolean', value: false},
            'canConfirmMembership':   {type:'boolean', value: false},
            'canRemoveMembership':    {type:'boolean', value: false},

            // Methods
            'isUser':  { args: [], type: 'boolean', value: model.accountType == 'user'  },
            'isGroup': { args: [], type: 'boolean', value: model.accountType == 'group' }
        }, true, 'UserExtendedModel');
    });
    it("has the expected fields for a group", function() {
        var model = new UserExtendedModel(RawGroup);

        assertObject("User Extended Model", model, {
            // Basic model
            'id':             'number',
            'username':       'string',
            'accountType':    {type:'string', value:'group'},
            'slug':           'string',
            'avatar':         'string',
            'cover':          'string',
            'url':            'string',
            'followersCount': 'number',
            'isFeatured':     'boolean',
            'isVerified':     'boolean',
            'isPartner':      'boolean',
            'isPrivate':      'boolean',

            // Extended
            'shortDescription':       'string',
            'description':            'string',
            'descriptionHtml':        'string',
            'coverOriginal':          'string',
            'coverOriginalFilename':  'string',
            'avatarOriginal':         'string',
            'avatarOriginalFilename': 'string',
            'createdAt':              'Date',
            'generatedBy':            'string',
            'isCurrentUser':          'boolean',
            'isFollowing':            'boolean',
            'isFollowed':             'boolean',
            'isFriend':               'boolean',
            'isBlocked':              'boolean',
            'canMessage':             'boolean',
            'isOnline':               'boolean',
            'followingCount':         'number',

            // Group Only
            'isConfirmedGroupMember': {type:'boolean', value: true},
            'canConfirmMembership':   'boolean',
            'canRemoveMembership':    'boolean',

            // Methods
            'isUser':  { args: [], type: 'boolean', value: model.accountType == 'user'  },
            'isGroup': { args: [], type: 'boolean', value: model.accountType == 'group' }
        }, true, 'UserExtendedModel');
    });
});
