const {
    client
} = require("../dbConfig.js")

// Insert Single Data 
let insertSingleData = async () => {
    try {
        let database = client.db("Assignment-03")
        let dataCollection = database.collection("curd-data")
        let userData = {
            name: "Mahadi khan",
            adr: "Dhaka"
        }
        let insertData = await dataCollection.insertOne(userData)
        console.log("Data insert by _id:", insertData.insertedId)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

// Insert Multiple Data
let insertMultiData = async () => {
    try {
        let database = client.db("Assignment-03")
        let dataCollection = database.collection("curd-data")
        let userData = [{
                name: "Mahadi khan",
                adr: "Dhaka"
            },
            {
                name: "Rabbi Khan",
                adr: "Gazipur"
            },
            {
                name: "Ismail Khan",
                adr: "Bogura"
            },
            {
                name: "Jabed Ali",
                adr: "Barisal"
            },
        ]
        let insertData = await dataCollection.insertMany(userData)
        console.log("Data insert by _id:", insertData.insertedIds)
        console.log("Data insert by _Count:", insertData.insertedCount)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

// Exports
module.exports = {
    insertSingleData,
    insertMultiData
}