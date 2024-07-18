const fs = require('fs')
const path = require('path')
const {v4:uuid} = require('uuid')
const {format} = require('date-fns')
const fsPromises = require('fs').promises

const Log = async(message)=>{
    const date = format(new Date(),'dd-MM-yyyy \t HH-mm-ss')
    const logItem = `${uuid()} \t ${date}  \t ${message} \n`
    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname,'Logs'))){
        await fsPromises.mkdir(path.join(__dirname,'Logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'Logs','result.txt'),logItem)
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports = Log