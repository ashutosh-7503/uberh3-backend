import { latLngToCell, gridDisk } from 'h3-js';
import { H3_RESOLUTION } from '../config/constants.js';
import { getCellCounts } from '../repositories/demand.repository.js';
import { createCell } from '../models/cell.model.js';

export async function getHeatmap(lat, lng, radius) {
  const centerCell = latLngToCell(lat, lng, H3_RESOLUTION);
  const cells = gridDisk(centerCell, radius);
  const counts = await getCellCounts(cells);

  return {
    centerCell,
    cells: cells.map(cellId => createCell(cellId,counts[cellId]))
  } 
}
