import {Jasmine} from 'playerme-core-utils';
var assertObject = Jasmine.assertObject;

import CommentModel from '../src/models/activity/comment/CommentModel';
import RawCommentModel from './mocks/RawCommentModel';

describe("CommentModel", function() {
    it("has the expected fields", function() {
        var model = new CommentModel(RawCommentModel);

        assertObject("Comment Model", model, {
            'id':             {type:'number', value: 1},
            'userId':         {type:'number', value: 1000},
            'activityUserId': {type:'number', value: 1},
            'activityId':     {type:'number', value: 1},
            'post':           {type:'string', value: "post"},
            'postRaw':        {type:'string', value: "post_raw"},
            'metas':          'array',
            'createdAt':      'Date',
            'updatedAt':      'Date',
            'editedAt':       'null',
            'deletedAt':      'null',
            'user':           'UserModel',
            'userIsBlocked':  'boolean',
            'hasLiked':       'boolean',
            'url':            'string',
            'showDelete':     'boolean',
            'showEdit':       'boolean',
            'isOwnComment':   'boolean',
            'likesCount':     'number',
            'like':           {args:[]}
        }, true, 'CommentModel');

        expect(model.metas.length).toBeGreaterThan(0, "Expected at least one metadata");
        var meta = model.metas[0];

        assertObject("Comment Metadata", meta, {
            'images':      'array',
            'url':         'string',
            'title':       'string',
            'description': 'string',
            'provider':    'string',
            'content':     'string',
            'isInternal':  'boolean',
            'thumbnail':   'string',
            'isPhoto':     { args: [], type: "boolean", value: meta.content == 'photo' },
            'isVideo':     { args: [], type: "boolean", value: meta.content == 'video' }
        }, true, 'CommentMeta');
    });
});
