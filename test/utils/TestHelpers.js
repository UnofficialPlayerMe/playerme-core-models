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
 * Assert that the passed value is of the expected class/type
 * @param {string}  name            Name of the value, to be shown in the exception message
 * @param {*}       value           The value to be tested
 * @param {string}  expectedType    The expected type/class
 */
var assertType = function (name, value, expectedType) {
    var typeLower = expectedType.toLocaleLowerCase();
    var msg;

    // Test data type
    if (dataTypes.indexOf(typeLower) >= 0){
        msg = "[" + name + "] is not of type [" + expectedType + "]";
        expect(typeof value).toBe(typeLower, msg);
        return;
    }

    // Test for null
    if (typeLower == 'null') {
        msg = "[" + name + "] is not null";
        expect(value).toBeNull(msg);
        return;
    }

    // Test for array
    if (typeLower == 'array'){
        msg = "[" + name + "] is not an array";
        expect(Array.isArray(value)).toBe(true, msg);
        return;
    }

    // Test class instance
    msg = "[" + name + "] is not an instance of [" + expectedType + "]";
    expect(value.constructor.name).toBe(expectedType, msg);
};

/**
 * Assert that the passed value is as expected
 * @param {string}  name            Name of the value, to be shown in the exception message
 * @param {*}       value           The value to be tested
 * @param {*}       expectedValue   The expected value
 */
var assertValue = function(name, value, expectedValue){
    var msg = "["+name+"] doesn't have the value ["+expectedValue+"]";
    expect(value).toBe(expectedValue, msg);
};

/**
 * Test that a model has the given property, and optionally its type/class and value
 * @param {object}  target          The model to test
 * @param {string}  key             The property's name
 * @param {string}  [expectedType]  The expected data type or class name
 * @param {*}       [expectedValue] The expected value
 */
var assertProperty = function(target, key, expectedType, expectedValue){
    let value = target[key];

    // Test property exists
    expect(value).toBeDefined("["+key+"] is not defined");

    if (typeof expectedType == 'string') {
        assertType(key, value, expectedType);
    }

    if (typeof expectedValue != 'undefined'){
        assertValue(key, value, expectedValue);
    }
};

/**
 * Test that a model has the given method, and optionally its return type/class and value
 * @param {object}  target          The model to test
 * @param {string}  key             The property's name
 * @param {Array}   [args]          Arguments to call the method with
 * @param {string}  [expectedType]  The expected data type or class name
 * @param {*}       [expectedValue] The expected value
 */
var assertMethod = function(target, key, args, expectedType, expectedValue){
    assertProperty(target, key, 'function');
    var result = target[key].apply(target, args);

    if (typeof expectedType == 'string'){
        assertType(key+'()', result, expectedType);
    }
    if (typeof expectedType != 'undefined'){
        assertValue(key+'()', result, expectedValue)
    }
};

export {
    assertType,
    assertValue,
    assertProperty,
    assertMethod
};