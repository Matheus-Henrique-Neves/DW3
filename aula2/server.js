"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cep_1 = __importDefault(require("./cep"));
const app = (0, express_1.default)();
app.get('/verificar-cep/:cep', (req, res) => {
    const cep = req.params.cep;
    const cepResponse = (0, cep_1.default)(cep);
    res.json({ cepResponse });
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
