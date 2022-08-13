import { CustomError } from "../types/errors";

const createCustomError = (code: number, message: string) => {
  const error = new Error() as CustomError;
  error.statusCode = code;
  error.publicMessage = message;
  error.privateMessage = error.message;

  return error;
};
export default createCustomError;
