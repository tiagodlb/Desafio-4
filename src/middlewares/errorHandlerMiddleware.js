import { errorTypeToStatusCode, isAppError } from '../utils/errorUtils'

export function errorHandlerMiddleware(err, _req, res, _next) {
    console.log('Ooops! An error occured!', err)

    if (isAppError(err)) {
        return res.status(errorTypeToStatusCode(err.type)).send(err.message)
    }

    return res.sendStatus(500)
}
