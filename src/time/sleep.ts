/**
* stand by
* @param {Number} ms the period of time in ms
*/
export const sleep = (ms: number) => new Promise(resolve => {
    setTimeout(resolve, ms)
})

