const MongoClient = require('mongodb').MongoClient

const LOCAL_URL = 'mongodb://localhost:27017/mongrel'

const DB_NAME = 'mongrel'

const DB = function(connectionUrl?, config?) {
    this.mClient = null
    this.mDB = null
    this.adminDB = null
    this.allDatabases = []
    this.mConnectionUrl = connectionUrl || LOCAL_URL
    this.mDbName = config && config.dbName ? config.dbName : DB_NAME
    this.mConfig = config
    console.log(this)
};

DB.prototype.connect = async function() {
    // Connect to default db
    this.mClient = new MongoClient(this.mConnectionUrl, Object.assign({}, this.mConfig, {
        useNewUrlParser: true
    }))
    try {
        await this.mClient.connect()
        this.mDB = this.mClient.db(this.mDbName)
        this.adminDB = this.mDB.admin()
        this.allDatabases = (await this.adminDB.listDatabases()).databases
        const collections = await (await this.mDB.listCollections()).toArray()
        return {
            databases: this.allDatabases,
            collections
        }
    } catch(err) {
        console.log(err)
    }
}

DB.prototype.connectToDB = function(dbName) {
    this.mDbName = dbName
    this.mDB = this.mClient.db(dbName)
}

DB.prototype.disconnect = async function() {
    this.mClient.close()
}

DB.prototype.getDB = function() {
    return this.mDb
}

DB.prototype.getClient = function() {
    this.mClient
}

export default DB;