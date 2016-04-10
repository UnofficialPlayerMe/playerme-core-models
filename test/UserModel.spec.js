import {assertProperty, assertMethod} from './utils/TestHelpers';
import UserModel from '../src/models/UserModel';
import RawCommentModel from './mocks/RawUserModel';

describe("CommentModel", function() {
    it("has the expected fields", function() {
        var model = new UserModel(RawCommentModel);

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
    });
});
