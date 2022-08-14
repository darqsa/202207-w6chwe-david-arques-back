import { RobotDBResponse } from "../types/interfaces";

const parseRobotDB = ({
  _id,
  image,
  stats: { strength, speed, creationDate },
}: RobotDBResponse) => ({
  id: _id.toString(),
  image,
  stats: {
    strength,
    speed,
    creationDate: creationDate.toLocaleDateString("en-GB"),
  },
});

export default parseRobotDB;
