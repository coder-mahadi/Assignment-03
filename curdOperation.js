//It's for terminal input data
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
//Insert function to handle
let {
    insertSingleData,
    insertMultiData
} = require("./utilities/insert.js")

//Read function to handle
let {
    readSingleData,
    readMultiData
} = require("./utilities/readFile.js")


//Update Data function to handle
let {
    updateSingleData,
    updateMultiData
} = require("./utilities/updateData.js")

//Delete Data function to handle
let {
    deleteSingleData,
    deleteMultiData,
    deleteAllData
} = require("./utilities/deleteData.js")

// Selection
console.log(`
What you want?

1. Single Data Insert
2. Multiple Data Insert
3. Single Data Read
4. Multiple Data Read
5. Single Data Update
6. Multiple Data Update
7. Single Data Delete
8. Multiple Data Delete
9. Delete All Data  
`)
//option Choice
readline.question(`Select the number please and then hit enter ===> `, userInput => {
    if (userInput == "1") {
        insertSingleData()
    } else if (userInput == "2") {
        insertMultiData()
    } else if (userInput == "3") {
        readSingleData()
    } else if (userInput == "4") {
        readMultiData()
    } else if (userInput == "5") {
        updateSingleData()
    } else if (userInput == "6") {
        updateMultiData()
    } else if (userInput == "7") {
        deleteSingleData()
    } else if (userInput == "8") {
        deleteMultiData()
    } else if (userInput == "9") {
        deleteAllData()
    } else {
        console.log("Enter Valid Number 😏😏")
    }

});