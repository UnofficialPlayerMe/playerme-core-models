import {assertProperty, assertMethod} from './utils/TestHelpers';
import GameModel from '../src/models/game/GameModel';
import RawGameModel from './mocks/RawGameModel';

describe("GameModel", function() {
    it("has the expected fields", function() {
        var model = new GameModel(RawGameModel);

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
    });
});
