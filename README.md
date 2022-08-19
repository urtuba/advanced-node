# advanced-node

## 1 - Async Patterns

0. [callback:](https://github.com/urtuba/advanced-node/blob/master/1-async-paterns/0-callback.js) > async `callback` pattern, `error handling` in callback pattern
1. [callback hell:](https://github.com/urtuba/advanced-node/blob/master/1-async-paterns/1-callback-hell.js) > `callback hell` pattern, avoiding callbacks using `promise`s, then
2. [promisify:](https://github.com/urtuba/advanced-node/blob/master/1-async-paterns/2-promisify.js) > using `promisify` to create promises from async functions with callback
3. [sync execution:](https://github.com/urtuba/advanced-node/blob/master/1-async-paterns/3-sync-execution.js) > execute async funcs synchoronous using `callback hell`
4. [sync execution w/ promise:](https://github.com/urtuba/advanced-node/blob/master/1-async-paterns/4-sync-execution-promise.js) > sync run using promises and `.then`
5. [sync execution w/ await:](https://github.com/urtuba/advanced-node/blob/master/1-async-paterns/5-sync-execution-await.js) > sync run using promises and `await`
6. [parallel execution:](https://github.com/urtuba/advanced-node/blob/master/1-async-paterns/6-parallel-execution.js) > parallel execution using `Promise.all`
7. [concurrent tasks:](https://github.com/urtuba/advanced-node/blob/master/1-async-paterns/7-concurrent-tasks.js) a `promise queue` to run concurrent tasks with `concurency` limit

## 2 - Streams

0. [buffer:](https://github.com/urtuba/advanced-node/blob/master/2-streams/0-buffer.js) > http server, serving video using `buffer`
1. [stream:](https://github.com/urtuba/advanced-node/blob/master/2-streams/1-stream.js) > http server, serving video using `stream`, piping response
2. [readable stream:](https://github.com/urtuba/advanced-node/blob/master/2-streams/2-readable-stream.js) > `readable stream`, streaming string array as binary, string, and object
3. [stdin stream:](https://github.com/urtuba/advanced-node/blob/master/2-streams/3-readable-stream.js) `stdin` as readable stream, video reading stream, pausing stream
4. [stdin stream:](https://github.com/urtuba/advanced-node/blob/master/2-streams/4-writable-stream.js) `writable stream`, copying file using streams, `stdout`
