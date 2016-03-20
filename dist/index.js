'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UserModel = require('./models/UserModel');

var _UserModel2 = _interopRequireDefault(_UserModel);

var _UserExtendedModel = require('./models/UserExtendedModel');

var _UserExtendedModel2 = _interopRequireDefault(_UserExtendedModel);

var _CommentModel = require('./models/CommentModel');

var _CommentModel2 = _interopRequireDefault(_CommentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UpaModels = {
    UserModel: _UserModel2.default,
    UserExtendedModel: _UserExtendedModel2.default,
    CommentModel: _CommentModel2.default
};

exports.default = UpaModels;