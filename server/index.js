const telebot= require('telebot')
const bot= new telebot({
    token:token,
    polling:{
        interval:1000
    }
})


bot.on('text',(msg)=>{
    msg.reply.text("HELLO")
})


bot.start()