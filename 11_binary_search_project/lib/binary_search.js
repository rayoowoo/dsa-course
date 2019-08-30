function binarySearch(array, target) {
    if (!array.length) return false;

    const middle = Math.floor(array.length / 2);

    if (target === array[middle]) return true;
    if (target < array[middle]) {
        return binarySearch(array.slice(0, middle), target);
    } else {
        return binarySearch(array.slice(middle + 1), target);
    }
}

function binarySearchIndex(array, target) {
    if (!array.length) return -1;

    const middle = Math.floor(array.length / 2);

    if (target === array[middle]) return middle;
    if (target < array[middle]) {
        return binarySearchIndex(array.slice(0, middle), target);
    } else {
        const result = binarySearchIndex(array.slice(middle + 1), target);
        if (result === -1) {
            return result;
        }
        return result + middle + 1;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};