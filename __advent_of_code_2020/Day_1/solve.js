const fs = require('fs');
const line = fs
  .readFileSync('./input.txt', 'utf8')
  .split('\n')
  .filter((x) => x)
  .map((x) => parseInt(x));

// O(n * log(n))
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

console.log(findTarget(2020));

// O(n)
// const findTarget = (target, l = 0, r = line.length - 1) => {
//   if (l >= r) {
//     return -1
//   }
//   if (line[l] + line[r] === target) {
//     return line[l] * line[r];
//   } else if (line[l] + line[r] < target) {
//     return findTarget(target, l + 1, r);
//   } else if (line[l] + line[r] > target) {
//     return findTarget(target, l, r - 1);
//   }
// };

// O(n)
// const findTarget = (target) => {
//   let l = 0;
//   let r = line.length - 1;
//   while (l < r) {
//     if (line[l] + line[r] === target) {
//       return line[l] * line[r];
//     } else if (line[l] + line[r] < target) {
//       l++
//     } else if (line[l] + line[r] > target) {
//       r--
//     }
//   }
//   return -1
// };



// O(n)
// Has problem with 1010 number
// const lineSet = new Set(line)
// const findTarget = (target) => {
//     for (let i=0; i < line.length; i++){
//         const num = line[i]
//         const othernum = target - num
//         if(lineSet.has(othernum)){
//             return num * othernum
//         }
//     }
// }

//  O(n ** 2)
// const fs = require('fs')
// const line = fs.readFileSync('./q.txt', 'utf8').split('\n').filter(x => x).map(x => parseInt(x))
// for (let i = 0; i < line.length; i++){
//     for (let j = i + 1; j < line.length; j++){
//         if ((line[i]+line[j]) == 2020){
//             console.log(line[i] * line[j])
//         }
//     }
// }
