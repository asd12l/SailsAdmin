// api/models/SecurityLog.js

var _ = require('lodash');
var _super = require('sails-permissions/api/models/SecurityLog');

delete _super.attributes.request.primaryKey;

_.merge(exports, _super);
_.merge(exports, {

  // Extend with custom logic here by adding additional fields, methods, etc.

});
