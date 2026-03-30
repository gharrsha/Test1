function Palindrome(str: string): boolean{
    let str2: string = ""
    for (let i=str.length-1; i>= 0; i--)
        str2 = str2 + str[i]
    if (str2 === str){
        return true;
    }
    else
        return false;
}
console.log(Palindrome("madm"));