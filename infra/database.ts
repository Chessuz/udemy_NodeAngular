import * as mongoose from "mongoose";

class Database{
    private DB_URL = 'mongodb://link-db/db_portal'; 

    createConnection() {
        try{
            mongoose.connect(this.DB_URL);
        } catch(err) {
            
        }
        
    }
}

export default Database;