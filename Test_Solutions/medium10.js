function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    var largest = -Infinity;
    var secondLargest = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
}
console.log(secondLargest([22, 21, 24, 25]));
