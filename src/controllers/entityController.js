import { filter as entityFilter } from "../services/entities";

const filter = async (req, res) => {
  const { startId, endId } = req.body;
  try {
    const responde = await entityFilter(startId, endId);
    res.json(responde);
  } catch (error) {
    const { status, message } = error;
    res.status(status).json({ Error: message });
  }
};

const EntityController = { filter };
export default EntityController;
