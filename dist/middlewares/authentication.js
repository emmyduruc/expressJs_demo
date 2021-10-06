"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authentication = function (req, res, next) {
    var headers = req.headers;
    var isLoggedIn = headers.is_logged_in;
    if (isLoggedIn) {
        next();
    }
    else {
        res.status(401).send("Please Login");
    }
};
exports.default = authentication;
