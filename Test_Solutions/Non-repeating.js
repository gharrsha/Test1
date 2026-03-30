function norepeat(stra) {
    var strb = "";
    for (var i = 0; i < stra.length; i++)
        for (var j = i + 1; j <= stra.length - 1; j++) {
            if (stra[j] != stra[i])
                strb = strb + stra[j];
        }
    return strb;
}
console.log(norepeat("aabbc"));
