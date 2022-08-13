// The getRobots function
// Receive a request and a response
// If
// Should call status method with 200
// And call the json method with the list with WallE and Laika

import Robot from "../../database/models/Robot";
import getRobots from "./robotsControllers";

describe("Given a getRobots controller", () => {
  describe("When it recives a response", () => {
    const req: any = {};
    const res: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call status function with 200", async () => {
      const expectedStatus = 200;

      Robot.find = jest.fn().mockResolvedValue([]);
      await getRobots(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    describe("And Robots.find() returns a list with WallE and Laika", () => {
      test("Then it should call the json method with the list with WallE and Laika", async () => {
        const robots: any = ["WallE", "Laika"];

        Robot.find = jest.fn().mockResolvedValue(robots);
        await getRobots(req, res);

        expect(res.json).toHaveBeenCalledWith({ robots });
      });
    });
  });
});
