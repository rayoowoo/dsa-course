function radixSort(arr) {
    if (arr instanceof Array === false) return null;
    if (arr.length <= 1) return arr;

    let newArr = Object.assign([], arr);
    const cycles = getMaxDigits(arr);
    let result = [[], [], [], [], [], [], [], [], [], []];
    for (let place = 0; place < cycles; place++) {
        newArr.forEach(el => result[getDigitFrom(el, place)].push(el));
        newArr = Object.values(result).reduce( (acc, el) => acc.concat(el));
        result = [[], [], [], [], [], [], [], [], [], []];
    }
    return newArr;
}

const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;;

const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }
    return maxDigits;
}

module.exports = {
    radixSort
};