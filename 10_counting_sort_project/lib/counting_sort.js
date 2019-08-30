function countingSort(arr, max) {
    if (arr.length <= 1) return arr;
    const counter = new Array(max + 1).fill([]);
    arr.forEach( el => {
        if (counter[el].length === 0) {
            counter[el] = [el];
        } else {
            counter[el].push(el);
        }
    })
    return counter.reduce( (acc, el) => acc.concat(el));
}

module.exports = {
    countingSort
};