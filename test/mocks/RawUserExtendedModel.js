import {getDateString} from '../utils/MockHelpers';

var user = {
    //Basic model
    id:                 1000,
    username:           'MockUser',
    account_type:       'user',
    slug:               'MockUser',
    url:                'url',
    followers_count:    100,
    is_featured:        false,
    is_verified:        false,
    is_partner:         false,
    is_private:         false,
    
    //Extended model overrides
    cover: {
        original:           'cover.original',
        cached:             'cover.cached',
        original_filename:  'cover.original_filename'
    },
    avatar: {
        original:           'avatar.original',
        cached:             'avatar.cached',
        original_filename:  'avatar.original_filename'
    },
    
    // Extended model
    short_description:  'short_description',
    description:        'description',
    descriptionHtml:    'descriptionHtml',
    created_at:         getDateString(),
    generated_by:       'generated_by',
    is_current_user:    false,
    is_following:       false,
    is_followed:        false,
    is_friend:          false,
    is_blocked:         false,
    can_message:        false,
    is_online:          false,
    following_count:    100
};

var group = {
    //Basic model
    id:                 1000,
    username:           'MockGroup',
    account_type:       'group',
    slug:               'MockGroup',
    url:                'url',
    followers_count:    100,
    is_featured:        false,
    is_verified:        false,
    is_partner:         false,
    is_private:         false,

    //Extended model overrides
    cover: {
        original:           'cover.original',
        cached:             'cover.cached',
        original_filename:  'cover.original_filename'
    },
    avatar: {
        original:           'avatar.original',
        cached:             'avatar.cached',
        original_filename:  'avatar.original_filename'
    },

    // Extended model
    short_description:          'short_description',
    description:                'description',
    descriptionHtml:            'descriptionHtml',
    created_at:                 getDateString(),
    generated_by:               'generated_by',
    is_current_user:            false,
    is_following:               false,
    is_followed:                false,
    is_friend:                  false,
    is_blocked:                 false,
    can_message:                false,
    is_online:                  false,
    following_count:            100,

    // Group Extended
    is_confirmed_group_member:  true,
    can_confirm_membership:     false,
    can_remove_membership:      false
};

export {
    user as default,
    user,
    group
};