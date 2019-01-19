'use strict';
const db = require('../functions/db_functions')
const botMemory= require('./botMemoryModel')

module.exports = function(botMemory){
    
    botMemory.storeMemory= (data,cb)=>{
        db.write(data).then((result)=>{
            cb(null,result)
        })
    }

    botMemory.remoteMethod("storeMemory",{
        accepts:{arg:"data",type:'BotMemory',http:{source:"body"}},
        http:{path:"/storeMemory",verb:"post"},
        returns:{arg:"result",type:"json"}
    })





    botMemory.rememberAll=(cb)=>{
        db.read().then((result)=>{
            let memories=[]
            result.forEach(element => {
                memories.push({
                    input: element.input,
                    output: element.output,
                    rating: element.rating,
                    when: element.when,
                    what:element.what

                })
            });
            cb(null,memories);
        })
    }

    botMemory.remoteMethod("rememberAll",{
        http:{path:"/rememberAll",verb:"get"},
        returns:{arg:"memories",type:"json"}
    })







    botMemory.rememberOne=(name,cb)=>{
        db.readSingle(name).then(result=>{
            cb(null,result)
        })
    }

    botMemory.remoteMethod("rememberOne",{
        accepts:{arg:"input",type:"string"},
        http:{path:"/rememberOne",verb:"get"},
        returns:{arg:"memory",type:"json"}
    })

};
