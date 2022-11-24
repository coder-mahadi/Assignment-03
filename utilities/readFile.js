const {
    client
} = require("../dbConfig.js")
//Find Single Data
let readSingleData = async () => {
    try {
        let database = client.db("Assignment-03")
        let dataCollection = database.collection("curd-data")
        let query = {
            name: "Rabbi Khan"
        }

        let readFile = await dataCollection.findOne(query)
        console.log("Normal Query", readFile)
    } catch (error) {
        console.group(error)
    } finally {
        await client.close()
    }

}
//Find Multiple Data
let readMultiData = async () => {
    try {
        let database = client.db("Assignment-03")
        let dataCollection = database.collection("curd-data")
        let query = {}
        let projectionEmpty = {}
        let queryProjection = {
            projection: {
                name: 1,
            }
        }
        let sortCon = {
            name:1
        }
        let readFile = await dataCollection.find(query).toArray()
        let readFileProjection = await dataCollection.find(projectionEmpty, queryProjection).toArray()
        let readFileLimit = await dataCollection.find(query).limit(4).toArray()
        // @ts-ignore
        let readFileSort = await dataCollection.find(query).sort(sortCon).toArray()
        console.log('=============================================')
        console.log("Read Data by condition :", readFile)
        console.log('=============================================')
        console.log("Read File By Projection :", readFileProjection)
        console.log('=============================================')
        console.log("Read File By Limit :", readFileLimit)
        console.log('=============================================')
        console.log("Read File By Sort :", readFileSort)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }

}

// Exports
module.exports = {
    readSingleData,
    readMultiData
}