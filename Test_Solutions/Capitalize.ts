function capitalizeWords(str: string): string {
    const words = str.split(" ");
    let result: string[] = [];

    for (let word of words) {
        const capitalized = word[0].toUpperCase() + word.slice(1);
        result.push(capitalized);
    }

    return result.join(" ");
}

console.log(capitalizeWords("hello world"));