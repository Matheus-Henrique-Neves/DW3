"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const globals_1 = require("@jest/globals");
const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);
(0, globals_1.test)(`subitrai ${a}-${b} retorna ${a - b}`, () => {
    (0, globals_1.expect)((0, _1.default)(a, b)).toBe(a - b);
});
(0, globals_1.test)("subitrai 2-1 retorna 1", () => {
    (0, globals_1.expect)((0, _1.default)(2, 1)).toBe(1);
});
(0, globals_1.test)("subitrai 3-1 retorna 2", () => {
    (0, globals_1.expect)((0, _1.default)(3, 1)).toBe(2);
});
(0, globals_1.test)("subitrai 1-3 retorna -2", () => {
    (0, globals_1.expect)((0, _1.default)(1, 3)).toBe(-2);
});
