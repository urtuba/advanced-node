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
5. [backpressure:](https://github.com/urtuba/advanced-node/blob/master/2-streams/5-backpressure.js) `backpressure` and `drain` in writable streams, `highWaterMark` option.
6. [piping stream:](https://github.com/urtuba/advanced-node/blob/master/2-streams/6-piping-streams.js) any `read stream` can be piped to any `write stream`
7. [duplex stream:](https://github.com/urtuba/advanced-node/blob/master/2-streams/7-duplex-stream.js) `duplex stream` can both read & write, `throttle`, reporting while streaming
8. [transform stream:](https://github.com/urtuba/advanced-node/blob/master/2-streams/7-transform-stream.js) `transfor stream` modifies data while piping it

## 3 - HTTP Streaming

0. [stream video:](https://github.com/urtuba/advanced-node/blob/master/3-http-streams/0-stream-to-browser.js) > `http` server, serving `video`
1. [range requests:](https://github.com/urtuba/advanced-node/blob/master/3-http-streams/1-range-requests.js) > handling `range requests` while streaming video using http server
