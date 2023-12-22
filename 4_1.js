var array = [3,9,27,81,243,729];
var n = array.length;
console.log('Изначальный массив',array);
console.log('Изначальная длина массива', array.length);

var array_even = [];
var array_odd = [];

for (let i = 0; i<n; i+=2) {
    array_even.push(array[i]);
}

for (let i = 1; i<n; i+=2) {
    array_odd.push(array[i]);
}

console.log('Массив из эл-тов с четными номерами',array_even);
console.log('Массив из эл-тов с нечетными номерами',array_odd);

var array_result = array_even.concat(array_odd);
console.log('Результат массива', array_result);



