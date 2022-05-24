const fs = require('fs')

const line = fs.readFileSync('./input.txt', 'utf8').split('\n').filter(x => x).map(x => parseInt(x))

line.sort((a, b) => a - b);

const findTarget = (target, l = 0, r = line.length - 1) => {
    return l >= r
        ? -1
        : line[l] + line[r] === target
        ? line[l] * line[r]
        : line[l] + line[r] < target
        ? findTarget(target, l + 1, r)
        : findTarget(target, l, r - 1)
}

// filter 
const _num = line.filter(num =>{
    const product = findTarget(2020 - num)
    return ( product > -1)
})

console.log(_num.reduce((inum, _num) => inum * _num,1))
