// add "type": "module" to package.json to run it
import logUpdate from "log-update";
var toX = () => "X";

var delay = (seconds) =>
  new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });

var tasks = [
  delay(5),
  delay(2),
  delay(1),
  delay(3),
  delay(4),
  delay(6),
  delay(9),
  delay(7),
  delay(8),
  delay(10),
];

class PromiseQueue {
  constructor(promises, concurrency) {
    this.promises = promises;
    this.concurrency = concurrency;
    this.todo = promises;
    this.active = [];
    this.completed = [];
  }

  get runAnother() {
    return this.todo.length && this.active.length < this.concurrency;
  }

  graph() {
    var { turn, todo, active, completed } = this;
    logUpdate(
      `TO DO    : ${todo.map(toX)}\n` +
        `RUNNING  : ${active.map(toX)}\n` +
        `COMPLETE : ${completed.map(toX)}`
    );
  }

  run() {
    while (this.runAnother) {
      var task = this.todo.shift();
      task.then(() => {
        this.completed.push(this.active.shift());
        this.graph();
        this.run();
      });
      this.active.push(task);
      this.graph();
    }
  }
}

var delayQueue = new PromiseQueue(tasks, 3);

delayQueue.run();

//   var promise = this.todo.shift();
//   promise.then(() => {
//     this.completed.push(this.active.shift());
//     this.graph();
//     this.run();
//   });
//   this.active.push(promise);
//   this.graph();
