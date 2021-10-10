"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var classSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    startDate: {
        type: Date,
    },
    students: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Student",
        },
    ],
});
var ClassModel = mongoose_1.default.model("Class", classSchema);
exports.default = ClassModel;
