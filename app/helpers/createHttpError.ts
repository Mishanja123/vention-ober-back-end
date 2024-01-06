export interface HttpError extends Error {
  status: number;
}

const messages: Record<number, string> = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
  500: "Internal Server Error",
};

const createHttpError = (
  status: number,
  message: string = messages[status]
): HttpError => {
  const error = new Error(message) as HttpError;
  error.status = status;

  return error;
};

export default createHttpError;
