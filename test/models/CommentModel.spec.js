import CommentModel from '../../src/models/CommentModel';
import RawCommentModel from '../mocks/RawCommentModel';

describe("CommentModel", function() {
    it("has the expected fields", function() {
        var model = new CommentModel(RawCommentModel);

        var hasProperty = (key, type, target) => {
            target = target || model;
            let value = target[key];

            expect(value).toBeDefined("["+key+"] is not defined");

            switch(type){
                case undefined:
                    break;
                default:
                    expect(value.constructor.name).toBe(type, "["+key+"] is not an instance of ["+type+"]");
                    break;
                case 'null':
                    expect(value).toBeNull("["+key+"] is not null");
                    break;
                case 'undefined':
                case 'object':
                case 'boolean':
                case 'number':
                case 'string':
                case 'symbol':
                case 'function':
                    expect(typeof value).toBe(type, "["+key+"] is not of type ["+type+"]");
                    break;
            }
        };

        hasProperty('id',               'number');
        hasProperty('userId',           'number');
        hasProperty('activityUserId',   'number');
        hasProperty('activityId',       'number');
        hasProperty('post',             'string');
        hasProperty('postRaw',          'string');
        hasProperty('metas',            'object');
        hasProperty('0',                'CommentMeta', model.metas);
        hasProperty('createdAt',        'Date');
        hasProperty('updatedAt',        'Date');
        hasProperty('editedAt',         'null');
        hasProperty('deletedAt',        'null');
        hasProperty('user',             'UserModel');
        hasProperty('userIsBlocked',    'boolean');
        hasProperty('hasLiked',         'boolean');
        hasProperty('url',              'string');
        hasProperty('showDelete',       'boolean');
        hasProperty('showEdit',         'boolean');
        hasProperty('isOwnComment',     'boolean');
        hasProperty('likesCount',       'number');
    });
});
