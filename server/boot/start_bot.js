const telebot= require('telebot')
const db= require('../functions/db_functions')
const token ="711761765:AAGLBX9Bl-C_a01GOvdupGixqU4BxZJcliE"


const dateTime=require('node-datetime')
const axios= require("axios")




const bot= new telebot({
    token:token,
    polling:{
        interval:1000
    }
})


bot.on('text', async (msg)=>{

    console.log("MESSAGE RECEIVED!")
    await axios.post("http://localhost:3000/api/BotMemories/storeMemory",{
        input: msg.text
    })
    console.log(new Date(msg.date.now()))


    // const body=await axios.get("http://localhost:3000/api/BotMemories/rememberAll")

    // body.data.memories.forEach(element => {
    //     msg.reply.text(element.content)    
    // })

})



bot.start()

//module.exports= bot;