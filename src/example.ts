import { getRandomStr, sleep } from ".";

/* 
(async () => {
    console.log(1)
    await sleep(1000)
    console.log(2)
    await sleep(2000)
    console.log(3)
    await sleep(3000)
    console.log(3)
    await sleep(4000)
})() */

console.log(getRandomStr(8, 'mix'))
console.log(getRandomStr(8, 'letters'))
console.log(getRandomStr(8, 'lower'))
console.log(getRandomStr(8, 'number'))
console.log(getRandomStr(8, 'upper'))