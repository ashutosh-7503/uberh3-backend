# H3 Demand Heatmap API

A Node.js backend that simulates Uber's H3-based demand heatmap. Ride requests are bucketed into hexagonal H3 cells, aggregated in Redis, and served via a REST API with a live map visualization.

## Why H3?

Calculating distance between two GPS points on a sphere is mathematically expensive. H3 solves this by dividing the Earth into hexagonal cells where all neighbouring cells are equidistant from the center — turning expensive spherical distance math into simple cell ID lookups.

## Tech Stack

- **Node.js** with ES Modules
- **Express** — REST API
- **H3-js** — Uber's hexagonal spatial indexing library
- **Redis (Memurai)** — demand counters per cell
- **Leaflet** — live map visualization

## How It Works

1. The ingester runs in the background, generating a fake ride request every 500ms at a random location around Bengaluru
2. Each request's GPS coordinate is immediately converted to an H3 cell ID
3. A counter for that cell is incremented in Redis and expires after 5 minutes
4. When the frontend calls `/api/heatmap`, the backend fetches all cell counts within the requested radius and returns them
5. The frontend redraws the hexagon map every 2 seconds