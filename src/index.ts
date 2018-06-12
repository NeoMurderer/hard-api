import {HardApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {HardApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new HardApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
