export const spliter = (phrase: string, char: string, index: number) => {
    let res = phrase.split(char)
    return res[index]
}