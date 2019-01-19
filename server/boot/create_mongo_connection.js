const url2="mongodb+srv://Jimmy:uiRQHp2zJEkpEzCg@firstcluster-vgt1s.mongodb.net/test"
const MongoClient= require('mongodb').MongoClient


module.exports=function createMongoPromise(){
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url2,(err,db)=>{
            try{
                const dbObject= db.db("test")
                console.log("Connection with mongo successfull!")
                resolve(dbObject)
            }catch(err){
                console.log("Connection with mongo failed!")
                reject("Connection with mongo failed!")
            }
        })

    })
}
