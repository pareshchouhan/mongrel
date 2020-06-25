const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/mongrel'

const DB_NAME = 'mongrel'

const DB = function() {
    this.client = null;
    this.db = null
};

DB.prototype.connect = async () => {
    console.log('connecting to db.....')
    const client = new MongoClient(url, {
        useNewUrlParser: true
    })
    try {
        await client.connect()
        this.db = client.db(DB_NAME)
        const result = await this.db.collection('test').insertOne({
            a: 1
        })
        console.log(result)
    } catch(err) {
        console.log(err)
    }
}

DB.prototype.disconnect = async() => {
    client.close()
}

DB.prototype.getDB = () => {
    return this.db
}

module.exports = DB;