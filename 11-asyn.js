const {readFile, writeFile} =require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err)
        return
    }
    const fisrt=result;

    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err)
            return
        }
        const second =result;

        writeFile('./content/asyn.txt', `Here is the result:${fisrt}, ${second}`,
        (err, result)=>{
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})
