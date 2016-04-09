import RawUserModel from '../mocks/RawUserModel';
import RawCommentMeta from '../mocks/RawCommentMeta';

var date = new Date(2000, 0, 1, 1, 0, 0, 0);
var dateString = date.toISOString();

var standard = {
    id:                 1,
    user_id:            2,
    activity_user_id:   3,
    activity_id:        4,
    post:               'post',
    post_raw:           'post_raw',
    metas:              [RawCommentMeta],
    created_at:         dateString,
    updated_at:         dateString,
    edited_at:          null,
    deleted_at:         null,
    user:               RawUserModel,
    userIsBlocked:      false,
    hasLiked:           true,
    url:                'url',
    showDelete:         false,
    showEdit:           false,
    isOwnComment:       false,
    likesCount:         5
};

export {
    standard as default
};
