const {readFileSync, writeFileSync} =require('fs')

const fisrt = readFileSync('./content/first.txt', 'utf8')
const second =readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/resultsyn.txt', 
`Here is the result :${fisrt}, ${second}`,
{flag:'a'}   
)