const {
    client
} = require("../dbConfig.js")

// Delete Single Data
let deleteSingleData = async () => {
    try {
        let database = client.db("Assignment-03")
        let dataCollection = database.collection("curd-data")
        let filterData = {
            name: "Rabbi Khan"
        }

        let deleteData = dataCollection.deleteOne(filterData)
        console.log("Delete Single data _Match:", (await deleteData).deletedCount)

    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

// Delete Multiple  Data
let deleteMultiData = async () => {
    try {
        let database = client.db("Assignment-03")
        let dataCollection = database.collection("curd-data")
        let filterData = {
            name: "Mahadi khan"
        }

        let deleteData = dataCollection.deleteMany(filterData)
        console.log("Update Multiple data _Match:", (await deleteData).deletedCount)

    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

// Delete All  Data
let deleteAllData = async () => {
    try {
        let database = client.db("Assignment-03")
        let dataCollection = database.collection("curd-data")
        let filterData = {}

        let deleteData = dataCollection.deleteMany(filterData)
        console.log("Update All data _Match:", (await deleteData).deletedCount)

    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

// Exports
module.exports = {
    deleteSingleData,
    deleteMultiData,
    deleteAllData
}