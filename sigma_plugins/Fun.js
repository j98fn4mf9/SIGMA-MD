//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                            𝚅.𝟷.𝟸.𝟽                                                   // 
//                                                                                                      //
//              ███████╗██╗ ██████╗ ███╗   ███╗ █████╗     ███╗   ███╗██████╗                           //
//              ██╔════╝██║██╔════╝ ████╗ ████║██╔══██╗    ████╗ ████║██╔══██╗                          //
//              ███████╗██║██║  ███╗██╔████╔██║███████║    ██╔████╔██║██║  ██║                          //
//              ╚════██║██║██║   ██║██║╚██╔╝██║██╔══██║    ██║╚██╔╝██║██║  ██║                          //
//              ███████║██║╚██████╔╝██║ ╚═╝ ██║██║  ██║    ██║ ╚═╝ ██║██████╔╝                          //
//              ╚══════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                          BY:MAHER-ZUBAIR                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

const { dare, truth, random_question ,name } = require('../lib/truth-dare.js')
const axios = require('axios')
const { Module_Exports,sleep,Function } = require('../lib')
const fetch = require('node-fetch');
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "question",
            infocmd: "Random Question.",
            kingclass: "fun",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${random_question()}`);
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "truth",
            infocmd: "truth and dare(truth game.).",
            kingclass: "game",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "dirtydare",
            infocmd: "truth and dare(dare game.).",
            kingclass: "game",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${dare()}`);
        }
    )
//--------------------------------------------------------------------------------
Module_Exports({
            kingcmd: "joke",
            infocmd: "Sends Joke in chat.",
            kingclass: "fun",
            kingpath: __filename,
        },
        async(Void, citel, text) => { 

const response =await  fetch('https://official-joke-api.appspot.com/random_joke');
  const joke= await response.json();
citel.reply( `*𝙹𝙾𝙺𝙴:* ${joke.setup}\n*𝙿𝚄𝙽𝙲𝙷𝙻𝙸𝙽𝙴:*  ${joke.punchline}`);

})
//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "joke2",
            infocmd: "Sends Joke in chat.",
            kingclass: "fun",
            kingpath: __filename,
        },
        async(Void, citel, text) => { 
 
         fetch('https://v2.jokeapi.dev/joke/Any?type=single')
         .then(response => response.json())
         .then(data => {
         citel.reply(`*𝙹𝙾𝙺𝙴:* ${data.joke}`); 
  })
  .catch(error => {
     return citel.reply ('Error fetching joke:' + error);
  });
        }
    )

//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "fact",
        infocmd: "Sends fact in chat.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, citel, text) => {
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return citel.reply(`*𝙵𝙰𝙲𝚃:* ${data.fact}`)   
    }

)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "quotes",
        infocmd: "Sends quotes in chat.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, man, text) => {
        var quoo = await axios.get(`https://favqs.com/api/qotd`)
        const replyf = `
┏━━⟪⟪ ${mztit} ⟫━⦿
┃✗ *•𝙲𝙾𝙽𝚃𝙴𝙽𝚃•* ${quoo.data.quote.body}
┃✗ *•𝙰𝚄𝚃𝙷𝙾𝚁•* ${quoo.data.quote.author}  
┗━━━━━━━━━━⦿ `
return man.reply(replyf)
    }
 
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "define",
        infocmd: "urban dictionary.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `
            *𝚆𝙾𝚁𝙳:* ${text}
            *𝙳𝙴𝙵𝙸𝙽𝙸𝚃𝙸𝙾𝙽:* ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            *𝙴𝚇𝙰𝙼𝙿𝙻𝙴:* ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)
//------------------------------------------------------------------------
Module_Exports({

    kingcmd: "hack",
    kingclass: "fun",
    infocmd: "hacking prank",
    kingpath: __filename,

},

async(Void,citel, text) => {
const {key} = await Void.sendMessage(citel.chat,{text:"```Injecting malware```"},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Injecting malware \n 0%```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ 10%```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ 20%```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ 30%```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ 40%```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ 50%```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ █ 60%```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ █ █ 70%```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ █ █ █ 80%```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ █ █ █ █ 90%```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ █ █ █ █ █ 100%```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```System hijacking on process.. \n Connecting to Server error to find 404 ```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Device successfully connected... \n Reciving data...```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"```Data hijacked from device 100% completed \n killing all evidence killing all malwares...```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"``` HACKING COMPLETED ```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"``` SENDING LOG DOCUMENTS...```",edit:key},{quoted:citel})
await sleep(1000)
  await Void.sendMessage(citel.chat,{text:"``` SUCCESSFULLY SENT DATA AND Connection disconnected```",edit:key},{quoted:citel})
await sleep(1000)
return  await Void.sendMessage(citel.chat,{text:"*BACKLOGS CLEARED*",edit:key},{quoted:citel})

}

)

    Function({
        kingcmd: "teddy",
        fromMe: true, 
        infocmd: "send Teddy To Yur Love",
        kingclass: "fun"
    
    },
    async(sigma, man)=>{
    let emo =  ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '❣️', '💖', '💘', '❤️', '💟', '🤍', '💓', '😍', '😘', '💚', '❤️'];
    const {key} = await man.reply("*_This IS FOr YOu_*")
    
      for (const emoji of emo) {
      
     await new Promise(res => setTimeout(res,2000));
     
      let x = ""
     let teddy = `
    *(\\_/)*
    *( •.•)*
    */>*🤍`; 
    
    teddy = teddy.replace("🤍", emoji)
      x = x + teddy;
        
       await sigma.sendMessage(man.chat, {text: x, edit: key})
      }

      
    })
// These Fun Commands are Developed By @Maher-Zubair
// Whatsapp +923466319114
// Usage And CopyRights Are Reserved

