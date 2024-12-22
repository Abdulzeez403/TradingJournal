import HttpException, { ErrorCode } from "./root";

// UnauthorizedError class for 401 Unauthorized errors
export class UnauthorizedException extends HttpException {
  constructor(
    message = "Unauthorized",
    errorCode: number = ErrorCode.UNAUTHORIZED
  ) {
    super(message, errorCode, 401, null);
    this.name = "UnauthorizedError";

    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

// BadRequestException class for 400 Bad Request errors
export class BadRequestException extends HttpException {
  constructor(message: string, errorCode: number = ErrorCode.BAD_REQUEST) {
    super(message, errorCode, 400, null);
    this.name = "BadRequestException";

    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

// NotFoundException class for 404 Not Found errors
export class NotFoundException extends HttpException {
  constructor(message: string, errorCode: number = ErrorCode.NOT_FOUND) {
    super(message, errorCode, 404, null);
    this.name = "NotFoundException";

    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}
