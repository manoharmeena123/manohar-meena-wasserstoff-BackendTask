class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(request) {
        this.queue.push(request);
    }

    dequeue() {
        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }
}

module.exports = Queue;
