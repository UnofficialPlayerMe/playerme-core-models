import CommentModel from '../../src/models/CommentModel';
import RawCommentModel from '../mocks/RawCommentModel';

describe("CommentModel", function() {
    it("has the expected fields", function() {
        var model = new CommentModel(RawCommentModel);

        var hasProperty = (key, type) => {
            expect(model[key]).toBeDefined("["+key+"] is not defined");
            if (type) {
                expect(typeof model[key]).toBe(type, "["+key+"] is not of type ["+type+"]");
            }
        };

        hasProperty('id',               'number');
        hasProperty('userId',           'number');
        hasProperty('activityUserId',   'number');
        hasProperty('activityId',       'number');
        hasProperty('post',             'string');
        hasProperty('postRaw',          'string');
        hasProperty('metas',            'object');
        hasProperty('createdAt',        'string');
        hasProperty('updatedAt',        'string');
        hasProperty('editedAt');
        hasProperty('deletedAt');
        hasProperty('user',             'object');
        hasProperty('userIsBlocked',    'boolean');
        hasProperty('hasLiked',         'boolean');
        hasProperty('url',              'string');
        hasProperty('showDelete',       'boolean');
        hasProperty('showEdit',         'boolean');
        hasProperty('isOwnComment',     'boolean');
        hasProperty('likesCount',       'number');
    });
});
