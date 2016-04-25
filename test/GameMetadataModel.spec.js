import {assertProperty, assertMethod} from './utils/TestHelpers';
import GameMetadataModel from '../src/models/game/GameMetadataModel';
import RawGameMetadataModel from './mocks/RawGameMetadataModel';

describe("GameMetadataModel", function() {
    it("has the expected fields", function() {
        var model = new GameMetadataModel(RawGameMetadataModel);

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
