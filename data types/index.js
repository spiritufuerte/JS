function convert() {
    const arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            arr[i] = String(arguments[i]);
        } else {
            arr[i] = Number(arguments[i]);
        }
    }
}

function executeforEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

function mapArray(arr, fn) {
    const mapArr = [];
    executeforEach(arr, function (el) {
        mapArr[mapArr.length] = fn(Number(el));
    });
    return mapArr;
}

function filterArray(arr, fn) {
    const filterArr = [];
    executeforEach(arr, function (el) {
        const item = fn(el);
        item && filterArr.push(el);
    })
    return filterArr;
}

function containsValue(arr, searchedItem) {
    let result = false;
    executeforEach(arr, function (el) {
        if (el === searchedItem) {
            result = true;
        }
    })
    return result;
}

function flipOver(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function makeListFromRange(arr) {
    const listArr = [];
    if (arr[0] > arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    for (let i = arr[0]; i <= arr[1]; i++) {
        listArr.push(i);
    }
}

function getArrayOfKeys(arr, key) {
    const newArr = [];
    executeforEach(arr, function (el) {
        newArr.push(el[key])
    })
    return newArr;
}

function substitute(arr) {
    const mapArr = [];
    const loverLimit = 10;
    const upperLimit = 20;
    mapArray(arr, function (el) {
        if (el < upperLimit && el > loverLimit) {
            mapArray.push('*')
        } else {
            mapArr.push(el);
        }
    });
    return mapArr;
}

function getPastDay(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

function formatDate(date) {
    const number10 = 10;
    const fixNum = num => num < number10 ? '0' + num : num;
    const fullYear = date.getFullYear();
    let day = fixNum(date.getDate());
    let month = fixNum(date.getMonth() + 1);
    let hours = fixNum(date.getHours());
    let minutes = fixNum(date.getMinutes());

    return `${fullYear}/${month}/${day} ${hours}:${minutes}`;
}