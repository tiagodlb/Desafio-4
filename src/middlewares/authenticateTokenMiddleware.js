import jwt from "jsonwebtoken"; //É a biblioteca usada para gerar e verificar tokens JWT

export const authenticateTokenMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization']; //extrai o header autho da requis HTTP
    const token = authHeader && authHeader.split(' ')[1]; //O token JWT é esperado no formato "Bearer TOKEN", então temos o split(' ') para dividir o header e pegar apenas o token.

    if (!token) { //se n houver o token responde com 401
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, 'secret_key', (err, user) => { //tem q ser a chave secreta que está sendo usada para assinar os tokens JWT
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user; 
        next();
    });
};