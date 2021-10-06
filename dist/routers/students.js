"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../middlewares/logger"));
var authentication_1 = __importDefault(require("../middlewares/authentication"));
var router = express_1.default.Router();
router.use(logger_1.default);
// POST /students
router.post("/", authentication_1.default, function (req, res) {
    res.send("creating student");
});
// GET /students/:studentId
router.get("/:studentId", function (req, res) {
    console.log("params", req.params);
    res.send("getting students");
});
exports.default = router;
