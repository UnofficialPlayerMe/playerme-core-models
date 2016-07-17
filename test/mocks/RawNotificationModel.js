import {Formats} from 'playerme-core-utils';

import RawUserModel from '../mocks/RawUserModel';
import RawCommentModel from '../mocks/RawCommentModel';
import RawActivityModel from '../mocks/RawActivityModel';

var FollowNotification = {
    key: 'u'+RawUserModel.id,
    type: 'follow',
    set: 'follow:u'+RawUserModel.id,
    id: 29842949,
    ids: [29842949],
    user: RawUserModel,
    url: "\/nnch?clear_notification=follow%3Au"+RawUserModel.id,
    created_at: Formats.getDateString(),
    names: RawUserModel.username,
    text: " is now following you.",
    image: "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/67\/a5\/c6\/df5a16a0f5e34032a17b38adba34d141.jpg",
    unread: false
};

var ReplyComment = {
    key: 'c'+RawCommentModel.id,
    type: 'reply_comment',
    set: 'reply_comment:c'+RawCommentModel.id,
    id: 29842529,
    ids: [29842529, 29842479, 29842304, 29823324, 29823144, 29823019],
    user: RawUserModel,
    url: "\/feed\/"+RawCommentModel.activity_id+"?comment="+RawCommentModel.id+"&clear_notification=reply_comment%3Ac"+RawCommentModel.id,
    created_at: Formats.getDateString(),
    names: RawUserModel.username+", Bob and Carly",
    text: "have posted a comment in a conversation you are in.",
    image:"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/f2\/a4\/35\/7dc172f3f56957858aa8f10bd48410ed.jpg",
    unread:false
};

var LikeComment = {
    key: 'c'+RawCommentModel.id,
    type: 'like_comment',
    set: 'like_comment:c'+RawCommentModel.id,
    id: 29823949,
    ids: [29823949],
    user: RawUserModel,
    url: "\/feed\/"+RawCommentModel.activity_id+"?comment="+RawCommentModel.id+"&clear_notification=like_comment%3Ac"+RawCommentModel.id,
    created_at: Formats.getDateString(),
    names: RawUserModel.username,
    text: "liked your comment: \""+RawCommentModel.data.post+"\".",
    image:"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/f2\/a4\/35\/7dc172f3f56957858aa8f10bd48410ed.jpg",
    unread:false
};

var MentionComment = {
    key: 'c'+RawCommentModel.id,
    type: 'mention_comment',
    set: 'mention_comment:c'+RawCommentModel.id,
    id: 29817689,
    ids: [29817689],
    user: RawUserModel,
    url: "\/feed\/"+RawCommentModel.activity_id+"?comment="+RawCommentModel.id+"&clear_notification=mention_comment%3Ac"+RawCommentModel.id,
    created_at: Formats.getDateString(),
    names: RawUserModel.username,
    text: "has mentioned your name in a comment: \""+RawCommentModel.data.post+"\".",
    image:"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/f2\/a4\/35\/7dc172f3f56957858aa8f10bd48410ed.jpg",
    unread:false
};

var LikeActivity = {
    key: 'a'+RawActivityModel.id,
    type: 'like_activity',
    set: 'like_activity:a'+RawActivityModel.id,
    id: 29784849,
    ids: [29784849],
    user: RawUserModel,
    url: "\/feed\/"+RawActivityModel.id+"?clear_notification=like_activity%3Aa"+RawActivityModel.id,
    created_at: Formats.getDateString(),
    names: RawUserModel.username,
    text: "liked your post: \""+RawActivityModel.data.post+"\".",
    image:"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/f2\/a4\/35\/7dc172f3f56957858aa8f10bd48410ed.jpg",
    unread:false
};

export {
    ReplyComment as default,
    FollowNotification,
    ReplyComment,
    LikeComment,
    MentionComment,
    LikeActivity
};
