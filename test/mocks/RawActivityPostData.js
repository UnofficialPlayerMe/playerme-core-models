import RawGameModel from '../mocks/RawGameModel';

var standard = {
    post:           'post',
    post_raw:       'post_raw',
    metas: [{
        content:        'Photo',
        title:          'Photo title',
        description:    'Photo description',
        provider:       'player',
        isInternal:     false,
        images:         ['image'],
        url:            'url',
        thumbnail:      'thumbnail'
    }],
    game:           RawGameModel,
    check_in_type:  'playing'
};

export {
    standard as default
};
