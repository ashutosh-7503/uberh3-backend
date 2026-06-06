import { getHeatmap } from "../services/heatmap.service.js";

export async function heatMapController(req, res) {
  const { lat, lng, radius = 3 } = req.query;
  const data=await getHeatmap(parseFloat(lat),parseFloat(lng),parseInt(radius));
  res.json(data);
}
