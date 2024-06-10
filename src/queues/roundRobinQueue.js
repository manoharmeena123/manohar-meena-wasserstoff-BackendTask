class RoundRobinQueue {
    constructor() {
        this.queue = [];
        this.index = 0;
    }

    enqueue(request) {
        this.queue.push(request);
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        const request = this.queue[this.index];
        this.index = (this.index + 1) % this.queue.length;
        return request;
    }

    size() {
        return this.queue.length;
    }
}

module.exports = RoundRobinQueue;
