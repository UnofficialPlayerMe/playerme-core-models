import {assertProperty, assertMethod} from './utils/TestHelpers';
import ActivityModel from '../src/models/activity/ActivityModel';
import CommentModel from '../src/models/activity/comment/CommentModel';
import RawCommentModel from './mocks/RawCommentModel';
import {StandardPost, StandardVideo} from './mocks/RawActivityModel';

describe("ActivityModel", function() {
    var model = new ActivityModel(StandardPost);

    it("has the expected fields", function() {
        var comments = model.comments;
        assertProperty( model, 'id',                'number'            );
        assertProperty( model, 'resourceId',        'number'            );
        assertProperty( model, 'type',              'string',   'post'  );
        assertProperty( model, 'user',              'UserModel'         );
        assertProperty( model, 'source',            'string'            );
        assertProperty( model, 'sourceUrl',         'string'            );
        assertProperty( model, 'url',               'string'            );
        assertProperty( model, 'fullUrl',           'string'            );
        assertProperty( model, 'publishedAt',       'Date'              );
        assertProperty( model, 'createdAt',         'Date'              );
        assertProperty( model, 'updatedAt',         'Date'              );
        assertProperty( model, 'editedAt',          'Date'              );
        assertProperty( model, 'isSubscribed',      'boolean'           );
        assertProperty( model, 'showEdit',          'boolean'           );
        assertProperty( model, 'showDelete',        'boolean'           );
        assertProperty( model, 'userIsHidden',      'boolean'           );
        assertProperty( model, 'userIsBlocked',     'boolean'           );
        assertProperty( model, 'userIsFollowed',    'boolean'           );
        assertProperty( model, 'isOwnActivity',     'boolean'           );
        assertProperty( model, 'hasLiked',          'boolean'           );
        assertProperty( model, 'likesCount',        'number'            );
        assertProperty( model, 'hasPinned',         'boolean'           );
        assertProperty( model, 'pinsCount',         'number'            );
        assertProperty( model, 'hasShared',         'boolean'           );
        assertProperty( model, 'shareCount',        'number'            );
        assertProperty( model, 'commentsCount',     'number'            );
        assertProperty( model, 'comments',          'Array'             );
        assertProperty( comments, '0',              'CommentModel'      );
        assertProperty( model, 'post',              'ActivityPostData'  );
        assertProperty( model, 'video',             'null'              );

        assertMethod( model, 'isVideo',         [], 'boolean', model.type   == 'video'      );
        assertMethod( model, 'isPost',          [], 'boolean', model.type   == 'post'       );
        assertMethod( model, 'isFromYoutube',   [], 'boolean', model.source == 'youtube'    );
        assertMethod( model, 'isFromTwitch',    [], 'boolean', model.source == 'twitch'     );
        assertMethod( model, 'isFromPlayer',    [], 'boolean', model.source == 'player'     );
        assertMethod( model, 'hasAllComments',  [], 'boolean', model.comments.length >= model.commentsCount );
    });
    it("can have comments added", function(){
        var originalCount = model.comments.length;
        var originalTotal = model.commentsCount;

        var comment = new CommentModel(RawCommentModel);
        assertMethod( model, 'addComment',  [comment]);

        expect(model.comments.length).toBe(originalCount+1, "Comment array length is wrong");
        expect(model.commentsCount).toBe(originalTotal+1, "Comments count is wrong");
    });
    it("can have comments added", function(){
        var originalCount = model.comments.length;
        var originalTotal = model.commentsCount;

        var comment = new CommentModel(RawCommentModel);
        assertMethod( model, 'addComment',  [comment]);

        expect(model.comments.length).toBe(originalCount+1, "Comment array length is wrong");
        expect(model.commentsCount).toBe(originalTotal+1, "Comments count is wrong");
    });
    it("can have comments updated", function(){
        //TODO ActivityModel.updateComment
    });
    it("can have comments removed", function(){
        //TODO ActivityModel.removeComment
    });
    it("can have comments added to the start", function(){
        //TODO ActivityModel.addCommentsToStart
    });
});
describe("ActivityModel (Post)", function() {
    var model = new ActivityModel(StandardPost);
    it("has the expected fields", function() {
        assertProperty( model, 'type',  'string', 'post'    );
        assertProperty( model, 'post',  'ActivityPostData'  );
        assertProperty( model, 'video', 'null'              );

        var post = model.post;
        assertProperty( post, 'post',               'string'            );
        assertProperty( post, 'postRaw',            'string'            );
        assertProperty( post, 'metas',              'Array'             );
        assertProperty( post, 'game',               'GameMetadataModel' );
        assertProperty( post, 'gameCheckInType',    'string'            );
        assertMethod(   post, 'isPlayingGame', [],  'boolean', post.gameCheckInType   == 'playing' );

        var metas = post.metas;
        assertProperty( metas, '0', 'ActivityPostMetaData' );

        var meta = post.metas[0];
        assertProperty( meta, 'content',        'string'    );
        assertProperty( meta, 'title',          'string'    );
        assertProperty( meta, 'description',    'string'    );
        assertProperty( meta, 'provider',       'string'    );
        assertProperty( meta, 'isInternal',     'boolean'   );
        assertProperty( meta, 'images',         'Array'     );
        assertProperty( meta.images, '0',       'string'    );
        assertProperty( meta, 'url',            'string'    );
        assertProperty( meta, 'thumbnail',      'string'    );
    });
});
describe("ActivityModel (Video)", function() {
    var model = new ActivityModel(StandardVideo);
    it("has the expected fields", function() {
        assertProperty( model, 'type',  'string', 'video'    );
        assertProperty( model, 'post',  'null'              );
        assertProperty( model, 'video', 'ActivityVideoData' );
    });
});
