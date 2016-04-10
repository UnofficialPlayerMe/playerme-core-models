var dataTypes = [
    'undefined',
    'object',
    'boolean',
    'number',
    'string',
    'symbol',
    'function'
];

/**
 * Test that a model has a property, and optionally it's type
 * @param {object} target The model to test
 * @param {string} key    The property's name
 * @param {string} [type] The expected data type or class name
 */
export function assertHasProperty(target, key, type){
    let value = target[key];

    // Test property exists
    expect(value).toBeDefined("["+key+"] is not defined");

    // Test property's type
    if (typeof type == 'string') {
        var typeLower = type.toLocaleLowerCase();

        // Test data type
        if (dataTypes.indexOf(typeLower) >= 0){
            let msg = "[" + key + "] is not of type [" + type + "]";
            expect(typeof value).toBe(typeLower, msg);
        }

        // Test for null
        else if (typeLower == 'null') {
            let msg = "[" + key + "] is not null";
            expect(value).toBeNull(msg);
        }

        // Test for array
        else if (typeLower == 'array'){
            let msg = "[" + key + "] is not an array";
            expect(Array.isArray(value)).toBe(true, msg);
        }

        // Test class instance
        else {
            let msg = "[" + key + "] is not an instance of [" + type + "]";
            expect(value.constructor.name).toBe(type, msg);
        }
    }
} // End of assertHasProperty
