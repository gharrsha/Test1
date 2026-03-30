function Oddoreven(a: number): string{
    if (a%2 == 0){
        return "given number is even"
    }
    else{
        return "given number is odd"
    }

}

let b = Oddoreven(23);
console.log(b)