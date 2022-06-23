import {fork} from 'child_process';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

console.error('Main script');
console.error('Exec path', process.execPath);
console.error('Exec argv', process.execArgv);

const projectDir = dirname(fileURLToPath(import.meta.url));
const workerProcess = fork(join(projectDir, 'worker.mjs'), {stdio: 'inherit'});

workerProcess.on('close', (code, signal) => console.info('Done', code, signal));
