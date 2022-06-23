# ts-node-esm-fork
Bug reproduction ts-node --esm breaking NodeJS forking

`yarn test`

Notice how the same `index.mts` file is getting executed again, instead of the `worker.mjs` script. 
