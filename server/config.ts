import * as massive from "massive";
import { readEnvVariable } from "./util/env";

export interface Config {
  connection: massive.ConnectionInfo;
  testConnection: massive.ConnectionInfo;
}

let config: Config;

function setupConfig(): Config {
  const connection: massive.ConnectionInfo = {
    database: readEnvVariable("PGDATABASE"),
    host: readEnvVariable("PGHOST"),
    password: readEnvVariable("PGPASSWORD"),
    port: parseInt(readEnvVariable("PGPORT")),
    user: readEnvVariable("PGUSER")
  };
  return {
    connection: connection,
    testConnection: {
      ...connection,
      database: readEnvVariable("PGDATABASETEST")
    }
  };
}

export function readConfig(): Config {
  if (config) {
    return config;
  }
  return (config = setupConfig());
}
