"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = require("mongoose");
var helmet_1 = __importDefault(require("helmet"));
var user_1 = __importDefault(require("./routers/user"));
var postRouter_1 = __importDefault(require("./routers/postRouter"));
(0, mongoose_1.connect)("mongodb://localhost:27017/social_media")
    .then(function () {
    console.log("MongoDB connected successfully");
})
    .catch(function (error) {
    console.log(" MongoDB failed to connect: " + error);
});
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
// app.use(morgan("common"));
// app.use(authentication);
// app.use("/students",logger);
app.use("/user", user_1.default);
app.use("/api/post", postRouter_1.default);
app.listen(8800, function () {
    console.log("Server is running on 8800");
});
