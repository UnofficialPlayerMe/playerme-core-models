import {Formats} from 'playerme-core-utils';

var standard = {
    id: 123,
    title: "title",
    description: "description",
    display_source: false,
    released_at: "2016-04-10",
    steam_id: 0,
    xbox360_id: 0,
    xboxone_id: 0,
    created_at: Formats.getDateString(),
    updated_at: Formats.getDateString(),
    deleted_at: null,
    cover: {
        original: "cover.original",
        cached: "cover.cached",
        original_filename: "cover.original_filename"
    },
    cover_by: 1,
    box: {
        original: "original.original",
        cached: "original.cached",
        original_filename: "original.original_filename"
    },
    alias: "alias\ntitle alias",
    short_description: null,
    slug: "slug",
    website: "website",
    facebook: "facebook",
    twitter: "twitter",
    gplus: "gplus",
    steam: "steam",
    twitch: "twitch",
    youtube: "youtube",
    buy_link: "buy_link",
    kickstarter: "kickstarter",
    platforms: [{
        "id":63,
        "name":"PSP",
        "order":"1260",
        "slug":"psp",
        "display_name":null
    }],
    url: "url",
    likes_count: 0,
    favourites_count: 0,
    developers: [{
        id: 12,
        user_id: 0,
        name: "developer",
        description: "developer.description",
        homepage: "developer.homepage",
        slug: "developer.slug",
        created_at: Formats.getDateString(),
        updated_at: Formats.getDateString(),
        deleted_at: null,
        pivot: {
            game_id: "123",
            company_id: "12"
        }
    }],
    publishers: [{
        id: 12,
        user_id: 0,
        name: "publisher",
        description: "publisher.description",
        homepage: "publisher.homepage",
        slug: "publisher.slug",
        created_at: Formats.getDateString(),
        updated_at: Formats.getDateString(),
        deleted_at: null,
        pivot: {
            game_id: "123",
            company_id: "12"
        }
    }]
};

export {
    standard as default
};