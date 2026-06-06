export function validateHeatmap(req, res, next) {
  const { lng, lat } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: "lat and lng are required" });
  }

  if (isNaN(parseFloat(lat)) || isNaN(parseFloat(lng))) {
    return res.status(400).json({ error: "lat and lng must be valid numbers" });
  }

  next();
}
