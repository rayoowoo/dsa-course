function numRegions(graph) {
    const visited = new Set();
    let counter = 0;

    Object.keys(graph).forEach(node => {
        if ( _children(node)) counter++;
    });

    function _children(node) {
        if (!visited.has(node)) {
            visited.add(node);
            if (graph[node].length) {
                graph[node].forEach(child => _children(child));
            }
            return true;
        }
        return false;
    }
    return counter;
}

module.exports = {
    numRegions
};