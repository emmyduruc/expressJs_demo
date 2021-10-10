"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var modules_1 = __importDefault(require("./modules"));
var classSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    startDate: {
        type: Date,
    },
    students: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Student',
        },
    ],
    modules: [modules_1.default],
});
var ClassModel = mongoose_1.default.model('Class', classSchema);
exports.default = ClassModel;
