const fs = require('fs');

const { stringify } = require('querystring')

const line = fs.readFileSync('./input.txt', 'utf8').split('\n')

const pattern = /(\d+)\-(\d+) (\w)\: (\S+)/;

const result = line.filter((pw) => {
    const [_, min, max, char, password] = pw.match(pattern)
    const charCount = [...password].filter(c => c === char).length
    return parseInt(min) <= charCount && charCount <= parseInt(max)
}).length

console.log(result)