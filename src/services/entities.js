import axios from "axios";
import config from "../config/config";
import ApplicationError from "../utils/ApplicationError";
import ErrorMessages from "../utils/errorMessages";
const { apiUrl } = config;

const filter = async (startId, endId) => {
  const entities = [];
  if (
    typeof startId !== "number" ||
    typeof endId !== "number" ||
    startId > endId
  ) {
    throw new ApplicationError("Error", ErrorMessages[400]);
  }

  for (let entityId = startId; entityId <= endId; entityId++) {
    const { data } = await axios.get(`${apiUrl}/${entityId}`);
    if (!data.data.entityId) {
      throw new ApplicationError("Error", ErrorMessages[404], 404);
    }

    entities.push(data.data);
  }
  return entities;
};

export { filter };
