const {
    MongoClient
} = require("mongodb")
require("dotenv").config()

// @ts-ignore
const client = new MongoClient(process.env.DATABASE)
module.exports = {
    client
}