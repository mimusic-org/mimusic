/*
  @license
	Rollup.js v4.28.1
	Fri, 06 Dec 2024 11:44:27 GMT - commit e60fb1c5d4e54ed5257495215eeda1bb43cf54ba

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
import 'tty';
