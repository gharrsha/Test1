function secondLargest(arr: number[]): number | null {
    if (arr.length < 2) {
        return null;
    }

    let largest: number = -Infinity;
    let secondLargest: number = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

console.log(secondLargest([22, 21, 24, 25]));