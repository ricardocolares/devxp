"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var path_1 = __importDefault(require("path"));
var Categories_1 = __importDefault(require("./collections/Categories"));
var Posts_1 = __importDefault(require("./collections/Posts"));
var Tags_1 = __importDefault(require("./collections/Tags"));
var Users_1 = __importDefault(require("./collections/Users"));
exports.default = (0, config_1.buildConfig)({
    serverURL: 'https://devmatesxp.herokuapp.com',
    admin: {
        user: Users_1.default.slug,
    },
    collections: [
        Categories_1.default,
        Posts_1.default,
        Tags_1.default,
        Users_1.default,
    ],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts')
    },
});
