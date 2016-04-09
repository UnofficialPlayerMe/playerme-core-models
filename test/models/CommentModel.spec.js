import CommentModel from '../../src/models/CommentModel';
import RawCommentModel from '../mocks/RawCommentModel';

describe("CommentModel", function() {
    it("has the expected fields", function() {
        var model = new CommentModel(RawCommentModel);

        var hasProperty = (key, type) => {
            expect(model[key]).toBeDefined("'", key+"' is not defined");
            if (type) {
                expect(typeof model[key]).toBe(type, "'"+key+"' is not of type "+type);
            }
        };

        hasProperty('id', 'number');
        //TODO Remaining fields
    });
});