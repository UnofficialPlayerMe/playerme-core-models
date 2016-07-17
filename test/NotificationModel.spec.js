import {Jasmine} from 'playerme-core-utils';
const assertObject = Jasmine.assertObject;

import NotificationModel from '../src/models/notification/NotificationModel';
import {
    ReplyComment as RawReplyComment
} from './mocks/RawNotificationModel';

describe("NotificationModel", function() {
    it("has the expected fields", function() {
        var model = new NotificationModel(RawReplyComment);

        assertObject("Notification Model", model, {
            'key':          'string',
            'type':         'string',
            'set':          'string',
            'id':           'number',
            'ids':          'number[]',
            'user':         'UserModel',
            'url':          'string',
            'createdAt':    'Date',
            'names':        'string',
            'text':         'string',
            'image':        'string',
            'unread':       'boolean'
        }, true, 'NotificationModel');
    });

    //TODO it("has the expected notification types", function() {});
    // Use assertObject/assertMethod,
    // but adjust assertProperty to allow target to be a function.
    // Use a custom jasmine matcher to allow it to be Object or Method?
});
