var array = [55,66,77,88];
var n = array.length;
var n_part1 = (n/2) - 1;
var array_part1 = [];
var array_part2 = [];

for(let i = 0; i<n; i++) {
    if(i <= n_part1) {
        array_part1.push(array[i])
    } else {
        array_part2.push(array[i])
    }
}

var array_result = array_part2.concat(array_part1);
console.log('Результат массива', array_result);


