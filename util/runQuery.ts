import { AsyncDuckDB } from "@duckdb/duckdb-wasm";
import { Table as Arrow } from "apache-arrow";

import { DEBUG } from "../init/initializeDuckDb";
import { logElapsedTime } from "./perf";

/**
 * Execute a SQL query, and return the result as an Apache Arrow table.
 */
export const runQuery = async (db: AsyncDuckDB, sql: string): Promise<Arrow> => {
  const start = performance.now();
  const conn = await db.connect();
  const arrow = await conn.query(sql);
  await conn.close();

  DEBUG && logElapsedTime(`Run query: ${sql}`, start);
  return arrow;
};
