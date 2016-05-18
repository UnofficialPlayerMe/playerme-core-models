import {Formats} from 'playerme-core-utils';

import RawUserModel from '../mocks/RawUserModel';
import RawCommentModel from '../mocks/RawCommentModel';
import RawActivityPostData from '../mocks/RawActivityPostData';
import RawActivityVideoData from '../mocks/RawActivityVideoData';

var StandardPost = {
    id:             1,
    resource_id:    1,
    type:           'post',
    user:           RawUserModel,
    source:         'player',
    sourceUrl:      'sourceUrl',
    url:            'url',
    full_url:       'full_url',
    published_at:   Formats.getDateString(),
    created_at:     Formats.getDateString(),
    updated_at:     Formats.getDateString(),
    edited_at:      Formats.getDateString(),
    isSubscribed:   false,
    showEdit:       false,
    showDelete:     false,
    userIsHidden:   false,
    userIsBlocked:  false,
    userIsFollowed: false,
    isOwnActivity:  false,
    hasPinned:      false,
    pinsCount:      false,
    hasShared:      false,
    shareCount:     false,
    commentsCount:  false,
    fullUrl:        false,
    likesCount:     false,
    comments:       [RawCommentModel],
    data:           RawActivityPostData
};
var StandardVideo = {
    id:             1,
    resource_id:    1,
    type:           'video',
    user:           RawUserModel,
    source:         'player',
    sourceUrl:      'sourceUrl',
    url:            'url',
    full_url:       'full_url',
    published_at:   Formats.getDateString(),
    created_at:     Formats.getDateString(),
    updated_at:     Formats.getDateString(),
    edited_at:      Formats.getDateString(),
    isSubscribed:   false,
    showEdit:       false,
    showDelete:     false,
    userIsHidden:   false,
    userIsBlocked:  false,
    userIsFollowed: false,
    isOwnActivity:  false,
    hasPinned:      false,
    pinsCount:      false,
    hasShared:      false,
    shareCount:     false,
    commentsCount:  false,
    fullUrl:        false,
    likesCount:     false,
    comments:       [RawCommentModel],
    data:           RawActivityVideoData
};

export {
    StandardPost as default,
    StandardPost,
    StandardVideo
};
