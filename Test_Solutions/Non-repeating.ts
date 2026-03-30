function norepeat(stra: string): string{
    let strb: string = ""
    let count: number = 0
    for (let i=0; i<stra.length; i++)
        for (let j = i+1; j<=stra.length - 1; j++){
            if (stra[j] == stra[i])
                count++}
    return strb

}
console.log(norepeat("aabbc"));