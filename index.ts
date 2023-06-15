import { AsyncDuckDB } from "@duckdb/duckdb-wasm";

import { useDuckDb } from "./hooks/useDuckDb";
import { useDuckDbQuery } from "./hooks/useDuckDbQuery";
import initializeDuckDb, { getDuckDB } from "./init/initializeDuckDb";
import DuckDbProvider, { DuckDbContext } from "./provider/DuckDbProvider";
import { logElapsedTime } from "./util/perf";
import { runQuery } from "./util/runQuery";
import { getTempFilename } from "./util/tempfile";
import { toParquet } from "./util/toParquet";

export * from "./files";
export * from "./io";
export * from "./util/queries";

export {
  AsyncDuckDB,
  DuckDbContext,
  DuckDbProvider,
  getDuckDB,
  getTempFilename,
  initializeDuckDb,
  logElapsedTime,
  runQuery,
  toParquet,
  useDuckDb,
  useDuckDbQuery,
};
