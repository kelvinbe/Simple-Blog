const fs = require('fs')




// reading files

// fs.readFile('./docs/bloga.txt', (err, data) => {
//     if(err){
//         console.error(err)
//     }
//     console.log(data.toString())
// })


// console.log('We were reached before the above fs')

// writing files

// fs.writeFile('./docs/blog1.txt', 'Hello bby girl again', () => {
//     console.log('File was written')
// })


// directories

// if(!fs.existsSync('./assets')){

    
// fs.mkdir('./assets', (err) => {
//     if(err){
//         console.error(err)
//     }

//     console.log('Folder created')
// })
//  }else{
//      fs.rmdir('./assets', (err) => {
//         console.error(err)
//      })
     
//      console.log('folder deleted')
//  }



// deleting files


if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.error(err)
        }
        console.log('file deleted')
    })

}