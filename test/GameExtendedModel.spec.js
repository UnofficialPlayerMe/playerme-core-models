import {assertProperty, assertMethod} from './utils/TestHelpers';
import GameExtendedModel from '../src/models/game/GameExtendedModel';
import RawGameExtendedModel from './mocks/RawGameExtendedModel';

describe("GameExtendedModel", function() {
    it("has the expected fields", function() {
        var model = new GameExtendedModel(RawGameExtendedModel);

        // Parent properties
        assertProperty( model, 'id',                    'number'  );
        assertProperty( model, 'title',                 'string'  );
        assertProperty( model, 'shortDescription',      'string'  );
        assertProperty( model, 'cover',                 'string'  );
        assertProperty( model, 'coverOriginal',         'string'  );
        assertProperty( model, 'coverOriginalFilename', 'string'  );
        assertProperty( model, 'box',                   'string'  );
        assertProperty( model, 'boxOriginal',           'string'  );
        assertProperty( model, 'boxOriginalFilename',   'string'  );
        assertProperty( model, 'slug',                  'string'  );
        assertProperty( model, 'url',                   'string'  );
        assertProperty( model, 'likesCount',            'number'  );
        assertProperty( model, 'hasLiked',              'boolean' );

        // Extended properties
        assertProperty( model, 'description',     'string' );
        assertProperty( model, 'displaySource',   'boolean');
        assertProperty( model, 'releasedAt',      'Date'   );
        assertProperty( model, 'steamId',         'number' );
        assertProperty( model, 'xbox360Id',       'number' );
        assertProperty( model, 'createdAt',       'Date'   );
        assertProperty( model, 'updatedAt',       'Date'   );
        assertProperty( model, 'deletedAt',       'Date'   );
        assertProperty( model, 'coverBy',         'number' );
        assertProperty( model, 'alias',           'null'   );
        assertProperty( model, 'website',         'string' );
        assertProperty( model, 'facebook',        'string' );
        assertProperty( model, 'twitter',         'string' );
        assertProperty( model, 'gplus',           'string' );
        assertProperty( model, 'steam',           'string' );
        assertProperty( model, 'twitch',          'string' );
        assertProperty( model, 'youtube',         'string' );
        assertProperty( model, 'buyLink',         'string' );
        assertProperty( model, 'kickstarter',     'string' );
        assertProperty( model, 'platforms',       'array'  );
        assertProperty( model, 'favouritesCount', 'string' );
        assertProperty( model, 'developers',      'array'  );
        assertProperty( model, 'publishers',      'array'  );

        var platforms  = model.platforms;
        var developers = model.developers;
        var publishers = model.publishers;

        assertProperty( platforms,  '0', 'GamePlatform');
        assertProperty( developers, '0', 'GameCompany' );
        assertProperty( publishers, '0', 'GameCompany' );
    });
});

describe("GamePlatform", function() {
    it("has the expected fields", function() {
        var game = new GameExtendedModel(RawGameExtendedModel);
        var platform = game.platforms[0];
        expect(platform).toBeDefined("No platform to test");

        assertProperty(platform, 'id',          'number');
        assertProperty(platform, 'name',        'string');
        assertProperty(platform, 'order',       'number');
        assertProperty(platform, 'slug',        'string');
        assertProperty(platform, 'displayName', 'string');
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
        assertProperty(developer, 'deletedAt',   'Date'  );
    });
});
