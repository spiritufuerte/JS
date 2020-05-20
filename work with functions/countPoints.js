function countPoints(arr) {
    let sum = 0;
    arr.forEach((item) => {
        if (item[0] >= 0 && item[2] >= 0) {
            if (item[0] > item[2]) {
                sum += 3;
            } else if (item[0] < item[2]) {
                sum += 0;
            } else {
                sum += 1;
            }
        }
    })
    return sum;
}

countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']);
countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']);