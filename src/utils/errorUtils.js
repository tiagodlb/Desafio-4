
export function isAppError(error) {
    return error.type !== undefined;
}

export function conflictError(message) {
    return { type: "conflict", message };
}

export function notFoundError(message) {
    return { type: "not_found", message };
}

export function unauthorizedError(message) {
    return { type: "unauthorized", message };
}

export function wrongSchemaError(message) {
    return { type: "wrong_schema", message };
}

export function errorTypeToStatusCode(type) {
    if (type === "conflict") return 409;
    if (type === "not_found") return 404;
    if (type === "unauthorized") return 401;
    if (type === "wrong_schema") return 422;
    return 400;
}