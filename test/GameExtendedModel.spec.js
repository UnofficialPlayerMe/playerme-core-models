import {Jasmine} from 'playerme-core-utils';
var assertProperty = Jasmine.assertProperty;
var assertType = Jasmine.assertType;
var assertObject = Jasmine.assertObject;

import GameExtendedModel from '../src/models/game/GameExtendedModel';
import RawGameExtendedModel from './mocks/RawGameExtendedModel';

describe("GameExtendedModel", function() {
    it("has the expected fields", function() {
        var model = new GameExtendedModel(RawGameExtendedModel);

        assertObject('GameExtendedModel', model, {
            // Parent properties
            id:                    'number',
            title:                 'string',
            shortDescription:      'string',
            cover:                 'string',
            coverOriginal:         'string',
            coverOriginalFilename: 'string',
            box:                   'string',
            boxOriginal:           'string',
            boxOriginalFilename:   'string',
            slug:                  'string',
            url:                   'string',
            likesCount:            'number',
            hasLiked:              'boolean',

            // Extended properties
            description:     'string' ,
            displaySource:   'boolean',
            releasedAt:      'Date',
            steamId:         'number',
            xbox360Id:       'number',
            xboxoneId:       'number',
            createdAt:       'Date',
            updatedAt:       'Date',
            deletedAt:       'null',
            coverBy:         'number',
            aliases:         'string[]',
            website:         'string',
            facebook:        'string',
            twitter:         'string',
            gplus:           'string',
            steam:           'string',
            twitch:          'string',
            youtube:         'string',
            buyLink:         'string',
            kickstarter:     'string',
            favouritesCount: 'number',
            platforms:       'GamePlatform[]',
            developers:      'GameCompany[]',
            publishers:      'GameCompany[]'
        }, true, 'GameExtendedModel');
    });
});

describe("GamePlatform", function() {
    it("has the expected fields", function() {
        var game = new GameExtendedModel(RawGameExtendedModel);
        var platform = game.platforms[0];
        assertType("platform", platform, 'GamePlatform');

        assertProperty(platform, 'id',          'number');
        assertProperty(platform, 'name',        'string');
        assertProperty(platform, 'order',       'string');
        assertProperty(platform, 'slug',        'string');
        assertProperty(platform, 'displayName', 'null'  );
    });
});

describe("GameCompany", function() {
    it("has the expected fields", function() {
        var game = new GameExtendedModel(RawGameExtendedModel);
        var developer = game.developers[0];
        expect(developer).toBeDefined("No company to test");

        assertProperty(developer, 'id',          'number');
        assertProperty(developer, 'userId',      'number');
        assertProperty(developer, 'name',        'string');
        assertProperty(developer, 'description', 'string');
        assertProperty(developer, 'homepage',    'string');
        assertProperty(developer, 'slug',        'string');
        assertProperty(developer, 'createdAt',   'Date'  );
        assertProperty(developer, 'updatedAt',   'Date'  );
        assertProperty(developer, 'deletedAt',   'null'  );
    });
});
