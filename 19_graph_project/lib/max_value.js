function maxValue(node, visited=new Set()) {
    if (!node) return null;
    const queue = [node];
    let max;
    while (queue.length) {
        const check = queue.shift();
        if (visited.has(check)) {
            continue;
        } else {
            visited.add(check);
            if (!max || check.val > max) {
                max = check.val;
            }
            check.neighbors.forEach(el => queue.push(el));
        }
    }
    return max;
}

module.exports = {
    maxValue
};