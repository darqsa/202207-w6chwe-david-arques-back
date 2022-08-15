import { Request, Response } from "express";
import Robot from "../../database/models/Robot";
import getRobots from "./robotsControllers";

describe("Given a getRobots controller", () => {
  describe("When it recives a response", () => {
    const req: Partial<Request> = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call status function with 200", async () => {
      const expectedStatus = 200;

      Robot.find = jest.fn().mockResolvedValue([]);
      await getRobots(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    describe("And Robots.find() returns a list with WallE and Laika", () => {
      test("Then it should call the json method with the list with WallE and Laika", async () => {
        const robots = ["WallE", "Laika"];

        Robot.find = jest.fn().mockResolvedValue(robots);

        await getRobots(req as Request, res as Response);

        expect(res.json).toHaveBeenCalledWith({ robots });
      });
    });
  });
});
