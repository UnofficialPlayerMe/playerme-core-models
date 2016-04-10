import {assertProperty, assertMethod} from './utils/TestHelpers';
import UserExtendedModel from '../src/models/UserExtendedModel';
import RawUserExtendedModel from './mocks/RawUserExtendedModel';

describe("CommentModel", function() {
    it("has the expected fields", function() {
        var model = new UserExtendedModel(RawUserExtendedModel);

        // Basic model
        assertProperty( model, 'id',             'number'  );
        assertProperty( model, 'username',       'string'  );
        assertProperty( model, 'accountType',    'string'  );
        assertProperty( model, 'slug',           'string'  );
        assertProperty( model, 'avatar',         'string'  );
        assertProperty( model, 'cover',          'string'  );
        assertProperty( model, 'url',            'string'  );
        assertProperty( model, 'followersCount', 'number'  );
        assertProperty( model, 'isFeatured',     'boolean' );
        assertProperty( model, 'isVerified',     'boolean' );
        assertProperty( model, 'isPartner',      'boolean' );
        assertProperty( model, 'isPrivate',      'boolean' );

        assertMethod( model, 'isUser',  [], 'boolean', model.accountType == 'user'  );
        assertMethod( model, 'isGroup', [], 'boolean', model.accountType == 'group' );

        // Extended
        assertProperty( model, 'shortDescription',          'string' );
        assertProperty( model, 'description',               'string' );
        assertProperty( model, 'descriptionHtml',           'string' );
        assertProperty( model, 'coverOriginal',             'string' );
        assertProperty( model, 'coverOriginalFilename',     'string' );
        assertProperty( model, 'avatarOriginal',            'string' );
        assertProperty( model, 'avatarOriginalFilename',    'string' );
        assertProperty( model, 'createdAt',                 'Date'    );
        assertProperty( model, 'generatedBy',               'string'  );
        assertProperty( model, 'isCurrentUser',             'boolean' );
        assertProperty( model, 'isFollowing',               'boolean' );
        assertProperty( model, 'isFollowed',                'boolean' );
        assertProperty( model, 'isFriend',                  'boolean' );
        assertProperty( model, 'isBlocked',                 'boolean' );
        assertProperty( model, 'canMessage',                'boolean' );
        assertProperty( model, 'isOnline',                  'boolean' );
        assertProperty( model, 'followingCount',            'number'  );
    });
});
