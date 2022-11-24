const {
    client
} = require("../dbConfig.js")

// update Single Data
let updateSingleData = async () => {
    try {
        let database = client.db("Assignment-03")
        let dataCollection = database.collection("curd-data")
        let filterData = {
            name: "Rabbi Khan"
        }
        let updateDataVal = {
            $set: {
                name: "Rabbi Hossain"
            }
        }
        let updateData = dataCollection.updateOne(filterData, updateDataVal)
        console.log("Update Single data _Match:", (await updateData).matchedCount)
        console.log("Update Single data _Modify:", (await updateData).modifiedCount)

    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

// update Multiple  Data
let updateMultiData = async () => {
    try {
        let database = client.db("Assignment-03")
        let dataCollection = database.collection("curd-data")
        let filterData = {
            name: "Mahadi khan"
        }
        let updateDataVal = {
            $set: {
                name: "Sabbir"
            }
        }
        let updateData = dataCollection.updateMany(filterData, updateDataVal)
        console.log("Update Multiple data _Match:", (await updateData).matchedCount)
        console.log("Update Multiple data _Modify:", (await updateData).modifiedCount)

    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

// Exports
module.exports = {
    updateSingleData,
    updateMultiData
}