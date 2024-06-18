import jwt from "jsonwebtoken";
import authService from "../services/authService";

import { unauthorizedError } from "../utils/errorUtils";

export async function ensureAuthenticatedMiddleware(req, res, next) {
    const authorization = req.headers["authorization"];
    if (!authorization) throw unauthorizedError("Missing authorization header");

    const token = authorization.replace("Bearer ", "");
    if (!token) throw unauthorizedError("Missing token");

    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        const { userId } = parseInt(jwt.verify(token, JWT_SECRET));
        const user = await authService.findUserById(userId);
        res.locals.user = user;
        next();
    } catch {
        throw unauthorizedError("Invalid token");
    }
}