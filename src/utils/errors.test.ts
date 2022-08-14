import { CustomError } from "../types/interfaces";
import createCustomError from "./errors";

describe("Given a createCustomError function", () => {
  describe("When invoked and gets 222 as code and 'hola' as message", () => {
    test("Then it should return a new error with code 222 and message 'hola'", () => {
      const code = 222;
      const message = "hola";
      const fakeError = createCustomError(code, message);

      const expectedError = new Error() as CustomError;
      expectedError.statusCode = code;
      expectedError.publicMessage = message;
      expectedError.privateMessage = expectedError.message;

      expect(fakeError).toStrictEqual(expectedError);
    });
  });
});
