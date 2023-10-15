"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ttcModifiers = exports.ttcColorApi = exports.colors = void 0;
const defined_colors_1 = __importDefault(require("./src/defined-colors"));
exports.colors = defined_colors_1.default;
const ansi_1 = __importDefault(require("./src/ansi"));
exports.ttcColorApi = ansi_1.default;
const basics_1 = __importDefault(require("./src/basics"));
exports.ttcModifiers = basics_1.default;
const ttc = {
    ...defined_colors_1.default, ...ansi_1.default, ...basics_1.default
};
exports.default = ttc;
//# sourceMappingURL=index.js.map