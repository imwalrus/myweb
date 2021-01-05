let numbers = [4, 3, 9, 13, 21, 7, 1];
// 오름차순 정렬
// sort() x -> 1, 3, 4, 7, 9, 13, 21

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
}
selectionSort(numbers);
console.log(numbers);