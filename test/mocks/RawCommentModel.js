import {getDateString} from '../utils/MockHelpers';
import RawUserModel from '../mocks/RawUserModel';
import RawCommentMeta from '../mocks/RawCommentMeta';

var standard = {
    id:                 1,
    user_id:            RawUserModel.id,
    activity_user_id:   1,
    activity_id:        1,
    post:               'post',
    post_raw:           'post_raw',
    metas:              [RawCommentMeta],
    created_at:         getDateString(),
    updated_at:         getDateString(),
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
