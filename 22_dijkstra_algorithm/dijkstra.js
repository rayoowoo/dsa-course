let sample = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};

const { distance, paths } = dijkstras(sample, 'a');
console.log(distance);
console.log(paths);

function dijkstras(graph, source) {
    let distance = {};
    let unvisited = new Set(Object.keys(graph));
    for (node in graph) distance[node] = Infinity;
    distance[source] = 0;
    
    let paths = {};

    while (unvisited.size) {
        const currNode = smallestNode(unvisited, distance);
        unvisited.delete(currNode);

        if(!paths[currNode]) paths[currNode] = [source];

        for (neighbor in graph[currNode]) {
            const distanceToNeighbor = distance[currNode] + graph[currNode][neighbor];
            if (distance[neighbor] > distanceToNeighbor) {
                distance[neighbor] = distanceToNeighbor;
                paths[neighbor] = paths[currNode].concat([neighbor]);
            }
        }
    }
    return { distance, paths };
}

function smallestNode(unvisited, distance) {
    return Array.from(unvisited).reduce( (smallest, current) => {
        if (distance[smallest] > distance[current]) return current;
        return smallest;
    })
}

// challenge is to return paths as an object with strings representing paths rather than just the previous node;