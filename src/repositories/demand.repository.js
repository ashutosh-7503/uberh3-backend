import redis from "../config/redis.js";

export async function incrementCell(cellId){
    await redis.incr(`demand:${cellId}`);
    await redis.expire(`demand:${cellId}`,300);
}

export async function getCellCounts(cellIds) {
    if(!cellIds.length) return {};
    const counts= await redis.mget(cellIds.map(id => `demand:${id}`));

    const result={};
    cellIds.forEach((id,i) => {
        result[id] = parseInt(counts[i])|| 0;
    });

    return result;
}
