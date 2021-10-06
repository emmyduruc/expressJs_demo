"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.post('/user', function (req, res) {
    var body = req.body;
    var params = req.params;
    //   fs.writeFile('user.json', JSON.stringify(body))
    console.log('body', body.firstName);
    console.log('params', params);
    res.send('user created');
});
router.put('/user/:userId', function (req, res) {
    var userId = req.params.userId;
    console.log('userId', userId);
    res.send('updated');
});
exports.default = router;
