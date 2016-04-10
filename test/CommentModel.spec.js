import CommentModel from '../src/models/CommentModel';
import {assertHasProperty} from './utils/TestHelpers';
import RawCommentModel from './mocks/RawCommentModel';

describe("CommentModel", function() {
    it("has the expected fields", function() {
        var model = new CommentModel(RawCommentModel);

        // Test standard comment model
        assertHasProperty( model,       'id',               'number'        );
        assertHasProperty( model,       'userId',           'number'        );
        assertHasProperty( model,       'activityUserId',   'number'        );
        assertHasProperty( model,       'activityId',       'number'        );
        assertHasProperty( model,       'post',             'string'        );
        assertHasProperty( model,       'postRaw',          'string'        );
        assertHasProperty( model,       'metas',            'array'         );
        assertHasProperty( model,       'createdAt',        'Date'          );
        assertHasProperty( model,       'updatedAt',        'Date'          );
        assertHasProperty( model,       'editedAt',         'null'          );
        assertHasProperty( model,       'deletedAt',        'null'          );
        assertHasProperty( model,       'user',             'UserModel'     );
        assertHasProperty( model,       'userIsBlocked',    'boolean'       );
        assertHasProperty( model,       'hasLiked',         'boolean'       );
        assertHasProperty( model,       'url',              'string'        );
        assertHasProperty( model,       'showDelete',       'boolean'       );
        assertHasProperty( model,       'showEdit',         'boolean'       );
        assertHasProperty( model,       'isOwnComment',     'boolean'       );
        assertHasProperty( model,       'likesCount',       'number'        );

        // Test metas
        assertHasProperty( model.metas,     '0',            'CommentMeta'   );
        assertHasProperty( model.metas[0],  'images',       'array'         );
        assertHasProperty( model.metas[0],  'url',          'string'        );
        assertHasProperty( model.metas[0],  'title',        'string'        );
        assertHasProperty( model.metas[0],  'description',  'string'        );
        assertHasProperty( model.metas[0],  'provider',     'string'        );
        assertHasProperty( model.metas[0],  'content',      'string'        );
        assertHasProperty( model.metas[0],  'isInternal',   'boolean'       );
        assertHasProperty( model.metas[0],  'thumbnail',    'string'        );
        assertHasProperty( model.metas[0],  'isPhoto',      'boolean'       );
        assertHasProperty( model.metas[0],  'isVideo',      'boolean'       );
    });
});
