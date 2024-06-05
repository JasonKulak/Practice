const str = "abcde";
const pairs = [];

for (let i = 0; i < str.length; i += 2) {
    if(str[i+1]) pairs.push(str[i]+str[i+1])
    else pairs.push(str[i]+'_')
}

console.log(pairs)