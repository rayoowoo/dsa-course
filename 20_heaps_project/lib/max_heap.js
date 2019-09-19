class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;
        if (this.array[idx] > this.array[this.getParent(idx)]) {
            [this.array[idx], this.array[this.getParent(idx)]] = [this.array[this.getParent(idx)], this.array[idx]]
        };
        this.siftUp(this.getParent(idx));
    }

    insert(val){
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx){
        const left = this.array[this.getLeftChild(idx)] || -Infinity;
        const right = this.array[this.getRightChild(idx)] || -Infinity;
        if (this.array[idx] > left && this.array[idx] > right) return;
        if (left >= right) {
            [this.array[idx], this.array[this.getLeftChild(idx)]] = [this.array[this.getLeftChild(idx)], this.array[idx]];
            this.siftDown(this.getLeftChild(idx));
        } else {
            [this.array[idx], this.array[this.getRightChild(idx)]] = [this.array[this.getRightChild(idx)], this.array[idx]];
            this.siftDown(this.getRightChild(idx));
        }
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();
        const max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }
}

module.exports = {
    MaxHeap
};