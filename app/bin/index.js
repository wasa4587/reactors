#! /usr/bin/env node

import os from 'os';
import init from '../lib/init';
import exec from '../lib/exec';

const [, , cmd, app, platform] = process.argv;

switch (cmd) {
case 'init':
  console.log();
  console.log('Creating Reactors app', app);
  console.log();

  init(app)
    .then(() => console.log('Your app is ready to be awesome'))
    .catch(error => console.log(error.stack));
  break;
case 'run':
  switch (platform) {
  case 'android':
  case 'ios':
    exec(`react-native run-${platform}`);
    break;
  case 'web':
    switch (os.platform()) {
    case 'darwin':
      exec('open index.html');
      break;
    case 'linux':
      exec('x-www-browser index.html');
      break;
    default:
      throw new Error('Platform not supported: ' + os.platform());
    }
    break;
  default:
    throw new Error('Unknown platform');
  }
  break;
default:
  console.log('reactors [init] [app]');
}
