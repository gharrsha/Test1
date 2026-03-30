function Reverse(a1: string): string{
    let a2: string = ""
    for (let i=a1.length-1; i>= 0; i--)
        a2 = a2 + a1[i]
    return a2
}

console.log(Reverse("break"));
