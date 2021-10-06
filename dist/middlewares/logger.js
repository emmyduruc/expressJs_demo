"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var method = req.method;
    console.log("Client just made a " + method + " request");
    next();
};
exports.default = logger;
