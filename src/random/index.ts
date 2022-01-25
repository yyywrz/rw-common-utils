/**
* generate random string
* @param {Number} l the length of the desired string
* @param {string} type the length of the desired string
* @return {string} the generated string
*/
export const getRandomStr = (l: number = 10, type: 'mix' | 'letters' | 'lower' | 'upper' | 'number' = 'mix'): string => {
    let str = ''
    let arr: string[] = []
    const number = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ]
    const lower = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z']
    const uppper = [
        'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z']

    switch (type) {
        case 'lower':
            arr = lower
            break
        case 'upper':
            arr = uppper
            break
        case 'number':
            arr = number
            break
        case 'letters':
            arr = [...lower, ...uppper]
            break
        case 'mix':
            arr = [...lower, ...uppper, ...number]
            break
    }
    const range = l
    for (let index = 0; index < range; index++) {
        const pos = Math.round(Math.random() * (arr.length - 1))
        str += arr[pos]
    }
    return str
}