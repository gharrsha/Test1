function Reverse(a1) {
    var a2 = "";
    for (var i = a1.length - 1; i >= 0; i--)
        a2 = a2 + a1[i];
    return a2;
}
console.log(Reverse("break"));
