import {assertProperty, assertMethod, assertObject} from './utils/TestHelpers';
import ActivityModel from '../src/models/activity/ActivityModel';
import CommentModel from '../src/models/activity/comment/CommentModel';
import RawCommentModel from './mocks/RawCommentModel';
import {StandardPost, StandardVideo} from './mocks/RawActivityModel';

describe("ActivityModel", function() {
    var model = new ActivityModel(StandardPost);
    var comment = new CommentModel(RawCommentModel);

    it("has the expected fields", function() {
        assertObject("Activity Model", model, {
            'id':                'number',
            'resourceId':        'number',
            'type':              {type:'string', value: "post"},
            'user':              'UserModel',
            'source':            'string',
            'sourceUrl':         'string',
            'url':               'string',
            'fullUrl':           'string',
            'publishedAt':       'Date',
            'createdAt':         'Date',
            'updatedAt':         'Date',
            'editedAt':          'Date',
            'isSubscribed':      'boolean',
            'showEdit':          'boolean',
            'showDelete':        'boolean',
            'userIsHidden':      'boolean',
            'userIsBlocked':     'boolean',
            'userIsFollowed':    'boolean',
            'isOwnActivity':     'boolean',
            'hasLiked':          'boolean',
            'likesCount':        'number',
            'hasPinned':         'boolean',
            'pinsCount':         'number',
            'hasShared':         'boolean',
            'shareCount':        'number',
            'commentsCount':     'number',
            'comments':          'CommentModel[]',
            'post':              'ActivityPostData',
            'video':             'null',

            // Methods
            'isVideo':         { args: [], type: 'boolean', value: model.type   == 'video'   },
            'isPost':          { args: [], type: 'boolean', value: model.type   == 'post'    },
            'isFromYoutube':   { args: [], type: 'boolean', value: model.source == 'youtube' },
            'isFromTwitch':    { args: [], type: 'boolean', value: model.source == 'twitch'  },
            'isFromPlayer':    { args: [], type: 'boolean', value: model.source == 'player'  },
            'hasAllComments':  { args: [], type: 'boolean', value: model.comments.length >= model.commentsCount },

            // Give own test cases
            'addComment':         'function',
            'updateComment':      'function',
            'removeComment':      'function',
            'addCommentsToStart': 'function'
        }, true, "ActivityModel");
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
