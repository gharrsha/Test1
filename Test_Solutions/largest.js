function Largestnumber(a23) {
    var largest = a23[0];
    for (var i = 1; i < a23.length; i++)
        if (a23[i] > largest)
            largest = a23[i];
    return largest;
}
console.log(Largestnumber([1, 2, 55, 4, 5]));
