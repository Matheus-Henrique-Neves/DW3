"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Verificacep;
function Verificacep(cep) {
    const ceplimpo = cep.replace("-", "");
    if (ceplimpo.length !== 8) {
        return false;
    }
    return true;
}
;
