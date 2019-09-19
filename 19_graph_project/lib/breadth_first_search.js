function breadthFirstSearch(startingNode, targetVal) {
    if (!startingNode) return null;
    const queue = [startingNode];
    const visited = new Set();
    while (queue.length) {
        const check = queue.shift();
        if (visited.has(check)) {
            continue;
        } else {
            visited.add(check);
            if (check.val === targetVal) {
                return check;
            }
            check.neighbors.forEach( el => queue.push(el));
        }
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};