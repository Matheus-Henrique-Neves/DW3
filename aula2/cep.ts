import e from "express";

export default function Verificacep(cep: string): boolean {
    const ceplimpo=cep.replace("-","")
    if (ceplimpo.length !== 8) {
        return false;
      }
    
      return true
};