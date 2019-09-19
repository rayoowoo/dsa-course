// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array) {
    if (array.length <= 2) return true;
    let idx = 1;
    const queue = [array[1]];
    while (queue.length) {
        const check = queue.shift();
        const left = array[idx * 2];
        const right = array[idx * 2 + 1];
        if (left) {
            queue.push(left);
            if (array[idx * 2] > check) return false;
        }
        if (right) {
            queue.push(right);
            if (array[idx * 2 + 1] > check) return false;
        }
        idx++;
    }
    return true;

}


module.exports = {
    isMaxHeap
};