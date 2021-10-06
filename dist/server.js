"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = __importDefault(require("./routers/user"));
var students_1 = __importDefault(require("./routers/students"));
var authentication_1 = __importDefault(require("./middlewares/authentication"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(authentication_1.default);
// app.use("/students",logger);
app.use("/students", students_1.default);
app.use("/users", user_1.default);
app.listen(3000, function () {
    console.log("Server is running on 3000");
});
