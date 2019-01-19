const url="mongodb://<dbuser>:<dbpassword>@ds157204.mlab.com:57204/smartbot"
const url2="mongodb+srv://Jimmy:uiRQHp2zJEkpEzCg@firstcluster-vgt1s.mongodb.net/test"
const MongoClient= require('mongodb').MongoClient

const createMongoPromise= require("../boot/create_mongo_connection")


    exports.write= async function(memory){
    
        return new Promise((resolve,reject)=>{
            createMongoPromise().then((dbObject)=>{
                dbObject.collection("memory").
                    insertOne({
                        input:memory.input,
                        output:memory.output,
                        rating: memory.rating,
                        when: memory.when,
                        what:memory.what
                    },()=>{
                        console.log("Memory stored successfully!")
                        resolve("Memory stored successfully!")
                    })
            })
        })
    
        //  const promise=  await MongoClient.connect(url2,(err,db)=>{  
    //             let dbObject= db.db("test")
    //             dbObject.collection("memory").insertOne(data,()=>{
    //                 console.log("Memory stored successfully!")           
    //     })
    // return promise

    }


    exports.read= function(){
        return new Promise((resolve,reject)=>{
            createMongoPromise().then((dbObject)=>{
                dbObject.collection("memory").find().toArray((err,result)=>{
                    console.log("Memories remembered successfully!")
                    resolve(result)
                })
            })
        })
    }


    exports.readSingle= function(name){
        return new Promise((resolve,reject)=>{
            createMongoPromise().then((dbObject)=>{
                dbObject.collection("memory").findOne({input:name},(err,memory)=>{
                    console.log("Memory remembered successfully!")
                    resolve({
                        input:memory.input,
                        content:memory.output,
                        rating: memory.rating,
                        when:memory.when,
                        what:memory.what
                    })
                })
            })
        })
    }

    // function createMongoPromise(){
    //     return new Promise((resolve,reject)=>{
    //         MongoClient.connect(url2,(err,db)=>{
    //             try{
    //                 const dbObject= db.db("test")
    //                 resolve(dbObject)
    //             }catch(err){
    //                 console.log("Connection with mongo failed!")
    //                 reject("Connection with mongo failed!")
    //             }
    //         })

    //     })
    // }