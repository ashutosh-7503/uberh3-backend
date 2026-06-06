import { latLngToCell } from "h3-js";
import { incrementCell } from "./repositories/demand.repository.js";
import { H3_RESOLUTION } from "./config/constants.js";

export async function startIngester() {
  setInterval(async () => {
    const centerLat = 12.9716,
      centerLong = 77.5946;
    const randomNumber1 = (Math.random()-0.5) * 0.05;
    const randomNumber2 = (Math.random()-0.5) * 0.05;
    const randomLat = centerLat + randomNumber1,
      randomLong = centerLong + randomNumber2;
    const cellId = latLngToCell(randomLat, randomLong,H3_RESOLUTION);
    await incrementCell(cellId);
  }, 500);
}
