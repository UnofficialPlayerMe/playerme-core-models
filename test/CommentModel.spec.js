import {assertProperty, assertMethod} from './utils/TestHelpers';
import CommentModel from '../src/models/CommentModel';
import RawCommentModel from './mocks/RawCommentModel';

describe("CommentModel", function() {
    it("has the expected fields", function() {
        var model = new CommentModel(RawCommentModel);

        // Test standard comment model
        assertProperty( model, 'id',             'number'    );
        assertProperty( model, 'userId',         'number'    );
        assertProperty( model, 'activityUserId', 'number'    );
        assertProperty( model, 'activityId',     'number'    );
        assertProperty( model, 'post',           'string'    );
        assertProperty( model, 'postRaw',        'string'    );
        assertProperty( model, 'metas',          'array'     );
        assertProperty( model, 'createdAt',      'Date'      );
        assertProperty( model, 'updatedAt',      'Date'      );
        assertProperty( model, 'editedAt',       'null'      );
        assertProperty( model, 'deletedAt',      'null'      );
        assertProperty( model, 'user',           'UserModel' );
        assertProperty( model, 'userIsBlocked',  'boolean'   );
        assertProperty( model, 'hasLiked',       'boolean'   );
        assertProperty( model, 'url',            'string'    );
        assertProperty( model, 'showDelete',     'boolean'   );
        assertProperty( model, 'showEdit',       'boolean'   );
        assertProperty( model, 'isOwnComment',   'boolean'   );
        assertProperty( model, 'likesCount',     'number'    );

        // Test meta
        assertProperty(model.metas, '0', 'CommentMeta');
        var meta = model.metas[0];

        assertProperty( meta, 'images',      'array'   );
        assertProperty( meta, 'url',         'string'  );
        assertProperty( meta, 'title',       'string'  );
        assertProperty( meta, 'description', 'string'  );
        assertProperty( meta, 'provider',    'string'  );
        assertProperty( meta, 'content',     'string'  );
        assertProperty( meta, 'isInternal',  'boolean' );
        assertProperty( meta, 'thumbnail',   'string'  );

        assertMethod( meta, 'isPhoto', [], 'boolean', meta.content == 'photo' );
        assertMethod( meta, 'isVideo', [], 'boolean', meta.content == 'video' );
    });
});
