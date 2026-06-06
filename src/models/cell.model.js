import { cellToBoundary } from "h3-js";
import { SURGE_THRESHOLD } from "../config/constants.js";
function demandLevel(demand){
    if(demand==0) return 'none';
    else if(demand<=1) return 'low';
    else if(demand<=2) return 'high';
    else return "surge";
}
export function createCell(cellId,demand){
    return {
        cellId,
        demand,
        boundary: cellToBoundary(cellId),
        demandLevel: demandLevel(demand)
    };
}