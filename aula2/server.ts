import  express from "express";
import  { Express,Request,Response } from "express";
import Verificacep from "./cep";

const app: Express = express();

app.get('/verificar-cep/:cep', (req: Request, res: Response) => {
    const cep = req.params.cep
    const cepResponse = Verificacep(cep)
    res.json({cepResponse})
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})