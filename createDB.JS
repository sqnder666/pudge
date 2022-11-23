var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("pudge");
database.dropDatabase()
database = client.db("pudge");
const heroes = database.collection("heroes");
const result = await heroes.insertOne({name:"Пудж"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()

