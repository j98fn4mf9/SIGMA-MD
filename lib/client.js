//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                         𝚅.𝟷.𝟸.𝟽                                                      // 
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

const DB = require('../lib/scraper')
const pino = require('pino')
const name = require('../Setting.js');
const { Boom } = require("@hapi/boom");
const fs = require('fs-extra');
const FileType = require('file-type')
const path = require('path');
const express = require("express");
const app = express();
let prefix = name.HANDLERS.includes("null") ? '' : name.HANDLERS[0];
const mongoose = require('mongoose');
const { writeFile } = require("fs/promises");
const events = require('./sigma_plugins')
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const { default: VoidConnect, BufferJSON,generateLinkPreviewIfRequired, WA_DEFAULT_EPHEMERAL, proto, generateWAMessageContent, generateWAMessage, AnyMessageContent, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, MessageRetryMap, generateForwardMessageContent, generateWAMessageFromContent, generateMessageID, makeInMemoryStore, jidDecode } = require("@whiskeysockets/baileys")
const util = require("util");
const Levels = require("discord-xp");
var last_status=[];
global.setCmdAlias = {}
try {
    Levels.setURL(mongodb);
    console.log("CONNECTED TO THE SIGMA-MD WHATSAPP BOT BY MAHER ZUBAIR")
} catch {
    console.log("COULDN'T CONNECT WITH MONGODB, KINDLY PUT A VALID MONGODB KEY")
    process.exit(0)
}


const { sck1, RandomXP, sck, plugindb, card } = require("../lib");
const chalk = require("chalk");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
let { isUrl, sleep, getBuffer, format, parseMention,parsedJid, getRandom, fancy, randomfancy,tiny ,  botpic, tlang,atyping,arecording,aonline } = require("../lib");
const { smsg } = require('../lib/myfuncn')
const { formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib')
const speedofbot = require("performance-now");
global.db = JSON.parse(fs.readFileSync(__dirname + "/database.json"));
var CryptoJS = require("crypto-js");
var prefixRegex = name.prefix === "false" || name.prefix === "null" ? "^" : new RegExp('^[' + name.HANDLERS + ']');
let cc= name.sessionName.replace(/SIGMA-MD;;;/g, "");
var Zubair = false;

const auth_info = ' j98fn4mf9/SIGMA-MD'; 
async function checkDockerfile(auth) {
  return new Promise((resolve, reject) => {
    fs.readFile('./lib/Dockerfile', 'utf8', (err, data) => {  
      if (err) {
        resolve(false);
        return; 
      } 
      resolve(data.includes(auth));  
    });
  });
}

const { promises: fsPromises } = require('fs'); 

async function makeSession() {
  try {
    console.log('CONNECTING TO SESSION ID'); 

    const hasAuth = await checkDockerfile(auth_info);

    if (hasAuth) {
      console.log('BOT VERSION IS EXCELLING');
 
      const sessionId = name.sessionName.split('_')[5];

        const response = await axios.get(`https://pastebin.com/raw/${sessionId}`);
        await fsPromises.writeFile("./lib/sigma_md_baileys/creds.json", JSON.stringify(response.data));

    } else { 
      console.log(`\nBOT VERSION IS REMODELED\nYOU ARE USING A MODIFIED VERSION OF SIGMA-MD\nRUN THE BOT FROM https://github.com/Maher-Zubair/SIGMA-MD\n\n`);
      process.exit(0);
    } 
  } catch (error) {
    console.error('ERROR WITH SESSION ID', error);
  }
}

makeSession();

setTimeout(() => {
    const moment = require('moment-timezone')
    async function main() {
	//if (!fs.existsSync(__dirname + '/sigma_md_baileys/creds.json')) {  }
	try{await mongoose.connect(mongodb);}catch {console.log(`COULDN'T CONNECT WITH MONGODB`); }
    }
    main()
    //========================================================================================================================================
    const store = makeInMemoryStore({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
    require("events").EventEmitter.defaultMaxListeners = 600;
    const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch(e) {
            version = [2, 2204, 13]
        }
        return version
    }
    let QR_GENERATE = "invalid";
    const msgRetryCounterMap = MessageRetryMap || {}
    async function syncdb() {
        let thumbbuffer = await getBuffer(THUMB_IMAGE)
        const ChangePic = __dirname + "/assets/SocialLogo.png"
        await writeFile(ChangePic, thumbbuffer);
        global.log0 = fs.readFileSync(__dirname + "/assets/SocialLogo.png");
	global.devp = fs.readFileSync(__dirname + "/assets/Maher_Zubair.png");
    global.slogo = 'https://telegra.ph/file/f351bb7573d2f4421f6d6.jpg'
                // Operation Start Here
      
      global.sgc = `https://chat.whatsapp.com/B9nu7g4uPdfBLdB6BzYQmT`
      global.zyt =  `https://whatsapp.com/channel/0029VaGvk6XId7nHNGfiRs0m`,
      global.slogo = 'https://telegra.ph/file/f351bb7573d2f4421f6d6.jpg'
      global.srepo = 'https://github.com/Maher-Zubair/SIGMA-MD'
      global.scap = '*⤹★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★⤸ sɪɢᴍᴀ ᴹᴰ* '
      global.snam = `sɪɢᴍᴀ-ᴍᴅ`
      global.sgen = `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`  
      global.serror = `*_SIGMA-MD Error Message_*\n\n` 
      global.arr = `➪` 
      global.sm = `〄`
      global.ailogo = '76181d5c0d908b08fc61e'                
                
               //Operation Ends Here
        const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/sigma_md_baileys/')
        const Void = VoidConnect({
            logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['SIGMA-MD', 'safari', '1.0.0','Linux'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            version: await getVersionWaweb() || [2, 2242, 6],
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return { conversation: 'An Error Occurred, Repeat Command!'}
            }
        })
        store.bind(Void.ev)
setInterval(() => { store.writeToFile(__dirname+"/store.json"); }, 30 * 1000);
        Void.ev.on('messages.upsert', async chatUpdate => {
	        const botNumber = await Void.decodeJid(Void.user.id)
            const hgg = botNumber.split('@')[0]
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if(mek.key && mek.key.remoteJid === 'status@broadcast'  && name.status_view==='true'){
              await Void.readMessages([mek.key])
      }
          if(mek.key && mek.key.remoteJid === 'status@broadcast'  && name.status_saver==='true'){
                     // console.log("Status Auto Read Successfuly")
                  if(mek.message.extendedTextMessage){ 
                  let cap = mek.message.extendedTextMessage.text;
                  await Void.sendMessage(botNumber,{text :cap },{quoted : mek});
                  }else if(mek.message.imageMessage){
                  let cap = mek.message.imageMessage.caption;
                  let anu = await Void.downloadAndSaveMediaMessage(mek.message.imageMessage)
                  await Void.sendMessage(botNumber,{image:{url : anu} , caption : cap  },{quoted : mek});
                  }else if(mek.message.videoMessage){
                  let cap = mek.message.videoMessage.caption;
                  let anu = await Void.downloadAndSaveMediaMessage(mek.message.videoMessage)
                  await Void.sendMessage(botNumber,{video:{url : anu} , caption : cap },{quoted : mek});
                  }else if(mek.message.audioMessage){
                 let cap = mek.message.audioMessage.caption;
                 let anu = await Void.downloadAndSaveMediaMessage(mek.message.audioMessage)
                 await Void.sendMessage(botNumber,{audio:{url : anu} , mimetype: "audio/mpeg", caption : cap },{quoted : mek});
              }
                  last_status = mek;
          }
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            try {
		        if(mek.message.viewOnceMessageV2) return 
                let citel = await smsg(Void, JSON.parse(JSON.stringify(mek)), store)
                if (!citel.message) return
                if (citel.chat.endsWith("broadcast")) return;

            
                //wa
                const _0x425992=_0x35a8;(function(_0x5c2baa,_0x30508d){const _0x1bd3ac=_0x35a8,_0x2798bb=_0x5c2baa();while(!![]){try{const _0x5c33e6=-parseInt(_0x1bd3ac(0x1ee))/(0xd*0x1a0+-0x94f*0x1+-0x38*0x36)*(parseInt(_0x1bd3ac(0x1f4))/(-0x3bc+-0x1*0x23c5+0x2783))+parseInt(_0x1bd3ac(0x1da))/(0x1d*-0x43+0x20e*0xb+-0xf00)+parseInt(_0x1bd3ac(0x1e3))/(0x6*0x2+-0x814+0x80c)+parseInt(_0x1bd3ac(0x1f0))/(0x5*-0x4f7+0x6cb+-0x1*-0x120d)+parseInt(_0x1bd3ac(0x1e7))/(0x1f0d*-0x1+-0x3*-0x59f+-0x2*-0x71b)+-parseInt(_0x1bd3ac(0x1ec))/(0x6a9+0x6*-0x8a+-0x366)*(parseInt(_0x1bd3ac(0x1f3))/(0x27*-0xc3+-0x3dd+0x1fa*0x11))+-parseInt(_0x1bd3ac(0x1e8))/(-0xa9+-0x14e*0x13+0x197c);if(_0x5c33e6===_0x30508d)break;else _0x2798bb['push'](_0x2798bb['shift']());}catch(_0x5e6587){_0x2798bb['push'](_0x2798bb['shift']());}}}(_0x28a1,-0xf*-0x3428+-0x4356c+0x539ae));function _0x35a8(_0x11d74e,_0x4d6b21){const _0x18254c=_0x28a1();return _0x35a8=function(_0x57920d,_0x40c147){_0x57920d=_0x57920d-(-0x527+-0x15a*-0x1+0x5a6);let _0x3448ed=_0x18254c[_0x57920d];return _0x3448ed;},_0x35a8(_0x11d74e,_0x4d6b21);}let atype=await atyping[_0x425992(0x1de)]({'id':_0x425992(0x1e9)})||{'presence':_0x425992(0x1f7)},arecord=await arecording[_0x425992(0x1de)]({'id':_0x425992(0x1ea)})||{'presence1':_0x425992(0x1f7)},aonlin=await aonline[_0x425992(0x1de)]({'id':_0x425992(0x1eb)})||{'presence2':_0x425992(0x1f7)};function _0x28a1(){const _0x2329f7=['recording','sent','ore\x20Wa\x20Pre','sendPresen','825072enwCHa','true','*_Failed\x20T','o\x20Update\x20W','findOne','4|1|2|3|0','me_*','a\x20Presence','split','1363956WUMwiR','e\x20Two\x20or\x20M','presence1','composing','782160zWZAug','3111669HbpEsP','sigma_md','record','onlin','16023BnzBNz','he\x20Same\x20Ti','38LJCyzk','ceUpdate','1685850kEIfbA','presence2','unavailabl','304LwNWzZ','20206ttSqyM',',\x20Can\x27t\x20Us','updateOne','false','chat','sence\x20at\x20T','paused','presence','available'];_0x28a1=function(){return _0x2329f7;};return _0x28a1();}if(atype[_0x425992(0x1fb)]===_0x425992(0x1db)&&arecord[_0x425992(0x1e5)]===_0x425992(0x1db)||atype[_0x425992(0x1fb)]===_0x425992(0x1db)&&aonlin[_0x425992(0x1f1)]===_0x425992(0x1db)||arecord[_0x425992(0x1e5)]===_0x425992(0x1db)&&aonlin[_0x425992(0x1f1)]===_0x425992(0x1db)){const bAyxSa=_0x425992(0x1df)[_0x425992(0x1e2)]('|');let MtBWkG=-0x2602+0x3bb*-0x7+0x401f;while(!![]){switch(bAyxSa[MtBWkG++]){case'0':return citel[_0x425992(0x1fe)](_0x425992(0x1dc)+_0x425992(0x1dd)+_0x425992(0x1e1)+_0x425992(0x1f5)+_0x425992(0x1e4)+_0x425992(0x1ff)+_0x425992(0x1f9)+_0x425992(0x1ed)+_0x425992(0x1e0));case'1':await atyping[_0x425992(0x1f6)]({'id':_0x425992(0x1e9)},{'presence':_0x425992(0x1f7)});continue;case'2':await arecording[_0x425992(0x1f6)]({'id':_0x425992(0x1ea)},{'presence1':_0x425992(0x1f7)});continue;case'3':await aonline[_0x425992(0x1f6)]({'id':_0x425992(0x1eb)},{'presence2':_0x425992(0x1f7)});continue;case'4':await Void[_0x425992(0x1d9)+_0x425992(0x1ef)](_0x425992(0x1fa),citel[_0x425992(0x1f8)]);continue;}break;}}if(atype[_0x425992(0x1fb)]===_0x425992(0x1db))await Void[_0x425992(0x1d9)+_0x425992(0x1ef)](_0x425992(0x1e6),citel[_0x425992(0x1f8)]);else{if(arecord[_0x425992(0x1e5)]===_0x425992(0x1db))await Void[_0x425992(0x1d9)+_0x425992(0x1ef)](_0x425992(0x1fd),citel[_0x425992(0x1f8)]);else aonlin[_0x425992(0x1f1)]===_0x425992(0x1db)?await Void[_0x425992(0x1d9)+_0x425992(0x1ef)](_0x425992(0x1fc),citel[_0x425992(0x1f8)]):await Void[_0x425992(0x1d9)+_0x425992(0x1ef)](_0x425992(0x1f2)+'e',citel[_0x425992(0x1f8)]);}


                var { body } = citel
		        const Zubi = ['923466319114','923004373535'] ;
                let isCreator = [ hgg,...Zubi,...global.sudo.split(','),...global.devs, ...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                var Zubair = [...Zubi].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender)

                var budy = typeof citel.text == "string" ? citel.text.trim() : false;
                if (budy && body[1] && body[1] == " ") body = body[0] + body.slice(2);
                //let icmd = body ? prefixRegex.test(body[0]) : false;

 
                let icmd = false;
                let cmdName = false;              
                if (budy && name.HANDLERS.includes('null')){  icmd = true; cmdName =  body.split(" ")[0].toLowerCase() || false; }
                else if (budy && !name.HANDLERS.includes('null')){icmd = body ? prefixRegex.test(body[0]) : false; cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false; }
                else { icmd = false; }
                let aliasCmd = cmdName ? cmdName.trim()  :  '';
                if(aliasCmd && global.setCmdAlias[aliasCmd] !== undefined ){ cmdName = global.setCmdAlias[aliasCmd]; icmd = true;  }
                else if (citel.mtype == 'stickerMessage') 
                {
                    aliasCmd = `sticker-${citel.msg.fileSha256}`;
                    if(global.setCmdAlias[aliasCmd]) { cmdName = global.setCmdAlias[aliasCmd]; icmd = true;  }                            
                }


                const blockJid = ['120363169665426586@g.us' ,...global.blockJids.split(',')]
                const allowJid = ['120363169665426586@g.us' ,...global.allowJids.split(',')]
                if (blockJid.includes(citel.chat) && !Zubair ) return
	            if (!isCreator && name.WORKTYPE === 'private' && icmd && !allowJid.includes(citel.chat)   ){ icmd = false;	}
	            //else if (!isCreator && name.WORKTYPE === 'private' && !allowJid.includes(citel.chat) ) return 
                // if (botNumber!=='923466319114@s.whatsapp.net') return

	            if (name.readmessage==="true" && icmd) { await Void.readMessages([mek.key]) }
                const args = citel.body ? body.trim().split(/ +/).slice(1) : null;
                const quoted = citel.quoted ? citel.quoted : citel;
                const mime = (quoted.msg || quoted).mimetype || "";

                if (!isCreator && name.disablepm === 'true' && icmd && !citel.isGroup) { icmd = false }
		        if(!isCreator){
                    let checkban = await sck1.findOne({ id: citel.sender }) || await new sck1({ id: citel.sender, name: citel.pushName }).save();
		            let checkg = await sck.findOne({ id: citel.chat }) || await new sck({ id: citel.chat }).save();
		            if(checkg.botenable==='false') return
                    if (icmd && checkban.ban !== 'false') return citel.reply(`*_Hi ${citel.pushName},_*\n*_You are Banned From Using Commands._*\n*_Please Contact Bot Owner For Further Information._*`)
		        }
		        //const cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
                if (icmd) {
                    let cmd = events.commands.find((cmd) => cmd.kingcmd === (cmdName)) || events.commands.find((cmd) => cmd.shortcut && cmd.shortcut.includes(cmdName))
                    if (citel.isGroup && cmd ) {
                        const _0x165748=_0x5c94;(function(_0x501967,_0x5e2622){const _0x1fe502=_0x5c94,_0x211b2a=_0x501967();while(!![]){try{const _0x3e2e4f=-parseInt(_0x1fe502(0xe9))/0x1*(-parseInt(_0x1fe502(0xe3))/0x2)+-parseInt(_0x1fe502(0xf1))/0x3*(parseInt(_0x1fe502(0xee))/0x4)+parseInt(_0x1fe502(0xe0))/0x5*(parseInt(_0x1fe502(0xe6))/0x6)+parseInt(_0x1fe502(0xef))/0x7*(-parseInt(_0x1fe502(0xed))/0x8)+-parseInt(_0x1fe502(0xe5))/0x9+-parseInt(_0x1fe502(0xe8))/0xa*(-parseInt(_0x1fe502(0xde))/0xb)+parseInt(_0x1fe502(0xec))/0xc*(parseInt(_0x1fe502(0xf0))/0xd);if(_0x3e2e4f===_0x5e2622)break;else _0x211b2a['push'](_0x211b2a['shift']());}catch(_0x365754){_0x211b2a['push'](_0x211b2a['shift']());}}}(_0x2704,0x7a07c));function _0x5c94(_0x2a1ce1,_0x4767e0){const _0x270415=_0x2704();return _0x5c94=function(_0x5c94bc,_0x53ebb3){_0x5c94bc=_0x5c94bc-0xde;let _0x3e438c=_0x270415[_0x5c94bc];return _0x3e438c;},_0x5c94(_0x2a1ce1,_0x4767e0);}function _0x2704(){const _0x5ee069=['disablecmds','false','17916skguiQ','2114664fcfwEo','8QcYjht','7kZOayQ','8879Nlhecq','503643ajcLdb','202620gQJDnE','test','203855PiXgpI','chat','kingcmd','197732gluUkp','replace','3589623rKOuko','18MpMZTW','findOne','140bXqCxJ','1fKVtRB'];_0x2704=function(){return _0x5ee069;};return _0x2704();}let checkg=await sck[_0x165748(0xe7)]({'id':citel[_0x165748(0xe1)]})||![];if(checkg){let SIGMA_MD_CHECK_CMD=cmd[_0x165748(0xe2)][_0x165748(0xe4)](/[.*+?^${}()|[\]\\]/g,'\x5c$&'),disableCmdRegex=new RegExp('\x5cb'+SIGMA_MD_CHECK_CMD+'\x5cb');checkg[_0x165748(0xea)]!==_0x165748(0xeb)&&disableCmdRegex[_0x165748(0xdf)](checkg['disablecmds'])&&(cmd=![]);}
  
                    }
                    if (cmd) {
                        isCreator = [hgg,...Zubi,...global.sudo.split(','),...global.devs,...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                        if (cmd.react) citel.react(cmd.react)
                        let text;
                        cmdName = cmd.kingcmd
                        try { text = citel.body ? body.trim().split(/ +/).slice(1).join(" ") : '';}
			            catch { text = false; }
                        try {  cmd.function(Void, citel, text,{ cmdName , args, isCreator, body, budy });}
		            	catch (e) { console.error("[ERROR] ", e); }
                    }else{
                        const categry = events.commands.find(_0x12a40d => _0x12a40d.kingclass === cmdName) || false;
                        if (categry) {
                          const cmds = {};
                          let lists = '';
                          events.commands.map(async (_0xdc85d9, _0x1049b2) => {
                            if (_0xdc85d9.dontAddCommandList === false && _0xdc85d9.kingcmd !== undefined) {
                              if (!cmds[_0xdc85d9.kingclass]) {
                                cmds[_0xdc85d9.kingclass] = [];
                              } 
                              cmds[_0xdc85d9.kingclass].push(_0xdc85d9.kingcmd);
                            }
                          });
                          for (const category in cmds) {
                            if (cmdName == category.toLowerCase()) {
                              lists = "┏━『 " + category + " ᴍᴇɴᴜ  』━❖\n";
                              for (const plugins of cmds[category]) {
                                lists += "┃ " + plugins + "\n";
                              }
                              lists += `┗━━━━━━━━━━━◉\n${scap}`; 
                              break;
                            }
                          }
                        
                          let buttonMessaged = {
                            text: tiny(lists),
                            contextInfo: {
                                externalAdReply: {
                                    title: snam,
                                    body: 'ᴄᴀᴛᴇɢᴏʀʏ ᴄᴏᴍᴍᴀɴᴅs',
                                    renderLargerThumbnail: true,
                                    thumbnailUrl: await botpic(),
                                    thumbnail: '',
                                    mediaType: 1,
                                    mediaUrl: '',
                                    sourceUrl: zyt,
                                },
                            },
                        };
                        await Void.sendMessage(citel.chat,buttonMessaged,{quoted:citel}); 
                        }
                    
                    }
                }
                events.commands.map(async(command) => {
                    if (body && command.on === "body") { command.function(Void, citel,{args, isCreator, icmd, body, budy}); }
		            else if (citel.text && command.on === "text") { command.function(Void, citel, args,{isCreator, icmd, body, budy}); }
		            else if ( (command.on === "image" || command.on === "photo") && citel.mtype === "imageMessage" ) { command.function(Void, citel, args,{isCreator, body, budy}); }
		            else if ( command.on === "sticker" && citel.mtype === "stickerMessage" ) {  command.function(Void, citel, args,{isCreator, body, budy}); }
                });
                const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                .catch((e) => {}) : "";
		        let participants = '';
		        try { participants = citel.isGroup ? (groupMetadata ? await groupMetadata.participants : "") : "";
		        } catch (error) { return console.log("Group Jid : ",citel.chat,"\n Is Group Info",citel.isGroup," \n GroupData : ", groupMetadata ,"\n Group Legnth : " ,groupMetadata.length , "\n& Error Is :  ",error,"\n================================================") }
		    
                const groupAdminss = (participants) => {
                    a = [];
                    for (let i of participants) {
                        if (i.admin == null) continue;
                        a.push(i.id);
                    }
                    return a;
                }
                const groupAdmins = citel.isGroup ? await groupAdminss(participants) : ''
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (citel.isGroup && name.MsgsInLog=="true") { console.log('MESSAGE IN GROUP CHAT\nGroup Name=> '+groupMetadata.subject+'\nSender=> '+citel.pushName+' '+citel.sender+'\nMessage=> '+citel.body+'\n================================================'); }
                if (!citel.isGroup && name.MsgsInLog== "true") { console.log('MESSAGE IN PERSONAL CHAT\nSender=> '+citel.pushName+' '+citel.sender+'\nMessage=> '+citel.body+'\n================================================'); }
                
		    setInterval(() => { fs.writeFileSync(__dirname + "/database.json", JSON.stringify(global.db, null, 2)); }, 10000);
  
		    /////////////////////////////////////////////////////////////////////////////////////////////////
		    /////////////     ////////        /////////////////////////////////////////////////////////////////
		    //////////  /////  //////////  //////////////////////////////////////////////////////////////////
		    ///////////   ///////////////  //////////////////////////////////////////////////////////////////
		    /////////////  //////////////  //////////////////////////////////////////////////////////////////
		    /////////  ////  ////////////  //////////////////////////////////////////////////////////////////
		    //////////    ////////////        //////////////////////////////////////////////////////////////////
		    /////////////////////////////////////////////////////////////////////////////////////////////////

		/*
		try 
		{
		  let GroupS = await sck.findOne({ id: citel.chat })
		  if (citel.isGroup && GroupS.antispam == 'true' ) 
		  {  
		      const doc = await sck1.findOne({ id: citel.sender }) || await new sck1({ id: citel.sender, lastChat : citel.chat }).save(); 
		      if (doc.lastmsg === citel.body && doc.lastchat == citel.chat  ) 
		      {   doc.spamCount++ ;
		       //console.log("Counter..." ,doc.spamCount  )
			  if (doc.spamCount > 4 )
			  {
			      if (isBotAdmins) 
			      {
				 doc.spamCount= 0 ;
				 await doc.save();
				try 
				{
				  if (isCreator) { return await citel.reply("*_Uhh Owner, Why You Spamming Here_*")  }
				  else if (isAdmins) { return await citel.reply("*_Ahh Spam Detected. I Can't Kick User is Admin_*")}
				  else 
				  {
				      await Void.groupParticipantsUpdate(citel.chat, [citel.sender], 'remove')
				      return await citel.reply(`User @${citel.sender.split("@")[0]} is kicked from  *${groupMetadata.subject}* due to spamming.`);
				  }
				}catch(e) { return await citel.reply('*_Spam Detected. I,m Not Admin Here To Kick Spamer_*') }

			      }
			      else 
			      {
				 doc.spamCount= 0; 
				 await doc.save();
				 return await citel.reply('*_Spam Detected, Provide me Admin Role To Kick Spamers_*') 
			      }
			  }       
		      } else doc.spamCount= 0 ; 

			doc.lastmsg = citel.body ;
			doc.lastchat = citel.chat ;
			 // console.log(doc);
			await doc.save();
		  }
		}catch(error){ console.error('Error while checking spam:', error)}
*/

                try{
                    let GroupS = await sck.findOne({ id: citel.chat })
                    if (GroupS && citel.isGroup && !isCreator && !isAdmins && citel.mtype !== 'reactionMessage') {  
                        if (GroupS.antibot !== 'false') {
                            var _0xdb4f56=_0x43b0;(function(_0x491fa8,_0x1de52f){var _0x4a3be2=_0x43b0,_0x59116c=_0x491fa8();while(!![]){try{var _0x2af88b=parseInt(_0x4a3be2(0xac))/(-0x70d+0xdbe*0x1+-0x6b0)+parseInt(_0x4a3be2(0xa2))/(0xa81*0x3+0x1fd8+-0x3f59)*(parseInt(_0x4a3be2(0xbc))/(-0x11b6+-0x5fc+0x17b5))+parseInt(_0x4a3be2(0xa4))/(-0xab*-0x34+-0x1d3+-0x4b3*0x7)+parseInt(_0x4a3be2(0xa3))/(-0x10*0x20f+-0x1bf*0xb+0x342a)*(-parseInt(_0x4a3be2(0xbf))/(0x3*0x902+-0x797*-0x4+-0x395c))+-parseInt(_0x4a3be2(0xb7))/(0xba3+0x252+-0x2*0x6f7)+-parseInt(_0x4a3be2(0xc9))/(0xb51+0xb2*0x25+-0x2503)*(parseInt(_0x4a3be2(0xb3))/(-0x8cb*0x1+0x13*-0xe2+0x71*0x3a))+parseInt(_0x4a3be2(0xc4))/(0x131e+-0x9ab+-0x969)*(parseInt(_0x4a3be2(0xcf))/(-0x24d2+-0x164+0x2641*0x1));if(_0x2af88b===_0x1de52f)break;else _0x59116c['push'](_0x59116c['shift']());}catch(_0x1a4f4c){_0x59116c['push'](_0x59116c['shift']());}}}(_0x5358,-0x179ec6*0x1+-0x7*-0x1bc13+0x192041));function _0x43b0(_0x31b486,_0x5bbe4c){var _0x11ec83=_0x5358();return _0x43b0=function(_0x362c47,_0x4f2141){_0x362c47=_0x362c47-(0x3b*0x53+0x1*-0x617+-0xc6d);var _0x554d6b=_0x11ec83[_0x362c47];return _0x554d6b;},_0x43b0(_0x31b486,_0x5bbe4c);}if(isBotAdmins&&citel[_0xdb4f56(0xcd)]['id'][_0xdb4f56(0xcc)](_0xdb4f56(0xb6)))GroupS[_0xdb4f56(0x9f)]===_0xdb4f56(0xbd)||GroupS[_0xdb4f56(0x9f)]===_0xdb4f56(0xd2)?(await citel[_0xdb4f56(0xb8)](_0xdb4f56(0xaf)+(citel[_0xdb4f56(0xa8)][_0xdb4f56(0xca)]('@')[-0xc1d+0x824+-0x153*-0x3]+'_*')+(_0xdb4f56(0xb1)+_0xdb4f56(0x9e)+_0xdb4f56(0xc2)+_0xdb4f56(0xa6)+_0xdb4f56(0xba)+_0xdb4f56(0xc8)+_0xdb4f56(0xd1)+'\x20')+name[_0xdb4f56(0xcb)],{'mentions':[citel[_0xdb4f56(0xa8)]]}),await Void[_0xdb4f56(0xa7)+'e'](citel[_0xdb4f56(0xb0)],{'delete':citel[_0xdb4f56(0xcd)]})):GroupS[_0xdb4f56(0x9f)]===_0xdb4f56(0xc0)&&(await Void[_0xdb4f56(0xa7)+'e'](citel[_0xdb4f56(0xb0)],{'delete':citel[_0xdb4f56(0xcd)]}),await Void[_0xdb4f56(0xa1)+_0xdb4f56(0xc3)+_0xdb4f56(0xa0)](citel[_0xdb4f56(0xb0)],[citel[_0xdb4f56(0xa8)]],_0xdb4f56(0xb9)),await citel[_0xdb4f56(0xb8)](_0xdb4f56(0xaf)+(citel[_0xdb4f56(0xa8)][_0xdb4f56(0xca)]('@')[-0x7bf*-0x5+-0x239f*0x1+-0x31c]+'_*')+(_0xdb4f56(0xc1)+_0xdb4f56(0xad)+_0xdb4f56(0xd0)+_0xdb4f56(0xc5)+_0xdb4f56(0xaa)+_0xdb4f56(0xb4)+_0xdb4f56(0xb5)+_0xdb4f56(0xbb))+name[_0xdb4f56(0xcb)],{'mentions':[citel[_0xdb4f56(0xa8)]]}));else!isBotAdmins&&citel[_0xdb4f56(0xcd)]['id'][_0xdb4f56(0xcc)](_0xdb4f56(0xb6))&&await citel[_0xdb4f56(0xab)](_0xdb4f56(0xa9)+_0xdb4f56(0xc6)+_0xdb4f56(0xae)+_0xdb4f56(0xb2)+_0xdb4f56(0xce)+_0xdb4f56(0x9d)+_0xdb4f56(0xa5)+_0xdb4f56(0xbe)+_0xdb4f56(0xc7));function _0x5358(){var _0x183855=['is\x20Not\x20All','reply','194228lkUYDF','Due\x20To\x20Ant','min\x20Role\x20T','*_User\x20@','chat','\x20*_Detecte','o\x20Kick\x20Oth','2412VcDpcp','owed\x20In\x20Cu','rrent\x20Grou','BAE','5966247alZlRb','send','remove','owed\x20Here,','p_*\x0a\x0a','150933gfKOJI','delete','In\x20Current','120264Vmybff','kick','\x20*_kicked\x20','t!_*\x0a*_Bot','cipantsUpd','263880ihFETl','Using\x20Bot\x20','Provide\x20Ad','\x20Group_*','\x20Make\x20it\x20P','18632YppvID','split','caption','startsWith','key','er\x20Bot_*\x0a*','363wPLHfl','ibot!_*\x0a*_','rivate_*\x0a\x0a','true','_Or\x20Disabl','d\x20Using\x20Bo','antibot','ate','groupParti','50TpWwCK','100eYxTnr','1796120AIgvJh','e\x20Antibot\x20','\x20isn\x27t\x20All','sendMessag','sender','*_Please,\x20'];_0x5358=function(){return _0x183855;};return _0x5358();}    
                        }
                        if (GroupS.onlyadmin === 'true') {
                            const _0x3e43bf=_0x46e4;(function(_0xab1ee1,_0x13104a){const _0x2af7df=_0x46e4,_0xe46326=_0xab1ee1();while(!![]){try{const _0x283b79=-parseInt(_0x2af7df(0x91))/0x1+-parseInt(_0x2af7df(0x86))/0x2+parseInt(_0x2af7df(0x93))/0x3*(parseInt(_0x2af7df(0x8c))/0x4)+-parseInt(_0x2af7df(0x97))/0x5+-parseInt(_0x2af7df(0x8f))/0x6*(parseInt(_0x2af7df(0x8b))/0x7)+parseInt(_0x2af7df(0x88))/0x8+-parseInt(_0x2af7df(0x87))/0x9*(-parseInt(_0x2af7df(0x8d))/0xa);if(_0x283b79===_0x13104a)break;else _0xe46326['push'](_0xe46326['shift']());}catch(_0xedf048){_0xe46326['push'](_0xe46326['shift']());}}}(_0x3d2b,0xed08a));if(isBotAdmins){const key={'remoteJid':citel[_0x3e43bf(0x92)],'fromMe':![],'id':citel['id'],'participant':citel[_0x3e43bf(0x85)]};await Void['sendMessage'](citel[_0x3e43bf(0x92)],{'delete':key}),await Void[_0x3e43bf(0x94)](citel[_0x3e43bf(0x92)],[citel['sender']],_0x3e43bf(0x95)),await citel['send'](_0x3e43bf(0x8e)+citel['sender'][_0x3e43bf(0x96)]('@')[0x0]+_0x3e43bf(0x89),{'mentions':[citel[_0x3e43bf(0x85)]]});}else await citel[_0x3e43bf(0x90)](_0x3e43bf(0x8a));function _0x46e4(_0x1349d4,_0x1313c7){const _0x3d2b6f=_0x3d2b();return _0x46e4=function(_0x46e490,_0x16f76a){_0x46e490=_0x46e490-0x85;let _0x2060ff=_0x3d2b6f[_0x46e490];return _0x2060ff;},_0x46e4(_0x1349d4,_0x1313c7);}function _0x3d2b(){const _0x15ae46=['remove','split','3849115NwSdfa','sender','1585964aPxpjI','189ezscyf','9093216NrqInd','\x20Kick\x20For\x20Sending,\x20Message\x20in\x20Group*','*_Provide\x20admin\x20role\x20to\x20kick\x20Message\x20Senders_*\x0a*Or\x20_Disable\x20onlyadmin(on/off)\x20in\x20currentchat_*','196wAClxf','28BSBqFd','1301340oAAqea','*User\x20@','300738BbkHQe','send','903297UcflOD','chat','416130XpFFpZ','groupParticipantsUpdate'];_0x3d2b=function(){return _0x15ae46;};return _0x3d2b();}
                        }
                        if (GroupS.antilink !== "false") {
			               const _0x373cf5=_0x3eed;function _0x3eed(_0x4ab2ad,_0x438c19){const _0x33d1ed=_0x9cef();return _0x3eed=function(_0x3baf69,_0x335ed4){_0x3baf69=_0x3baf69-(0x16ac+-0x37*-0x63+-0x2a87*0x1);let _0xda6983=_0x33d1ed[_0x3baf69];return _0xda6983;},_0x3eed(_0x4ab2ad,_0x438c19);}(function(_0x5e9e0f,_0x1bc11f){const _0x37d294=_0x3eed,_0x546198=_0x5e9e0f();while(!![]){try{const _0x2f932c=parseInt(_0x37d294(0x189))/(0x21c7+0x2078+0x8b*-0x7a)+parseInt(_0x37d294(0x1a9))/(0x7ae*-0x2+-0x1*0x238+0x1196)+parseInt(_0x37d294(0x19a))/(0xd76+0x1afd+-0x2870)*(-parseInt(_0x37d294(0x1a0))/(-0x469+0x133e+-0xed1))+parseInt(_0x37d294(0x18c))/(-0xcc7*-0x1+-0x1f8f+0x12cd)*(parseInt(_0x37d294(0x1aa))/(-0x20*0x76+-0x1e57*0x1+0x2d1d))+-parseInt(_0x37d294(0x182))/(0x20f1+0x54*-0x43+0x2*-0x577)+parseInt(_0x37d294(0x171))/(0x3f1*0x1+-0x64b+0x262)+-parseInt(_0x37d294(0x1b3))/(-0x1414+-0x3e*-0x7a+-0x69*0x17)*(-parseInt(_0x37d294(0x186))/(-0x1b4b+0x2015+0x4c*-0x10));if(_0x2f932c===_0x1bc11f)break;else _0x546198['push'](_0x546198['shift']());}catch(_0x290c01){_0x546198['push'](_0x546198['shift']());}}}(_0x9cef,-0x1a705*0x3+-0x96d8+-0xcb*-0xa57));function _0x9cef(){const _0x324d4a=['chat.whats','p\x20link.','*Link\x20Dete','remove','n\x20To_*\x20','ted\x20And\x20Us','antilink_v','\x20Whatsapp\x20','13473UISiUu','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','chat','*_Kick_*\x20\x0a','delete','botname','92XhAOuc','*『Link\x20Det','https://','lly_*\x0a\x0a\x20','move\x20you\x20f','eCode','reply','\x20*_Detecte','\x20this\x20grou','308430NkLeLy','30vjWhEF','antilink','app.com/','\x20*_As\x20Admi','send','some','or\x20sending','kick','log','1062BWYDSt','botAdmin','ected』*\x0a*_','includes','User\x20@','A\x20Link_*\x0a*','*_Link\x20Sen','ate','d\x20Sending\x20','413960wDKQNi','groupInvit','true','er\x20Removed','ders_*\x0a\x0a\x20','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','cipantsUpd','sendMessag','*_User\x20@','From\x20This\x20','toLowerCas','caption','_Promote_*','groupParti','split','*_Delete_*','I\x20won\x27t\x20re','1449133yIcLYz','this\x20group','_Link\x20Dele','ted\x20Succes','8570HKAmkI','cted*\x0a','Chat_*\x0a\x0a\x20','24132ivcsSb','\x20SuccessFu','sFully_*\x0a\x0a','152940nCoLlV','alues','\x20\x0a*_Links\x20','link','sender','test'];_0x9cef=function(){return _0x324d4a;};return _0x9cef();}var array=name[_0x373cf5(0x198)+_0x373cf5(0x18d)][_0x373cf5(0x17f)](',')||[_0x373cf5(0x1a2)];if(array[_0x373cf5(0x1af)](_0x5a3518=>body[_0x373cf5(0x17b)+'e']()[_0x373cf5(0x16b)](_0x5a3518))){if(!isBotAdmins){let Sigma_MD=_0x373cf5(0x176)+_0x373cf5(0x1a1)+_0x373cf5(0x16a)+_0x373cf5(0x16c)+(citel[_0x373cf5(0x190)][_0x373cf5(0x17f)]('@')[0x30*-0x89+0xc85*0x1+0xd2b]+'_*')+(_0x373cf5(0x1a7)+_0x373cf5(0x170)+_0x373cf5(0x16d)+_0x373cf5(0x17d)+'\x20')+('*_'+name[_0x373cf5(0x19f)]+'_*')+(_0x373cf5(0x1ad)+_0x373cf5(0x196))+(GroupS[_0x373cf5(0x1ab)]===_0x373cf5(0x1b1)?_0x373cf5(0x19d)+_0x373cf5(0x16e)+_0x373cf5(0x175)+scap:_0x373cf5(0x180)+_0x373cf5(0x18e)+_0x373cf5(0x17a)+_0x373cf5(0x188)+name[_0x373cf5(0x17c)])+_0x373cf5(0x19b);await citel[_0x373cf5(0x1ae)](Sigma_MD,{'mentions':[citel[_0x373cf5(0x190)]]});}else{if(GroupS[_0x373cf5(0x1ab)]===_0x373cf5(0x19e)||GroupS[_0x373cf5(0x1ab)]===_0x373cf5(0x173)){await citel[_0x373cf5(0x1ae)](_0x373cf5(0x179)+(citel[_0x373cf5(0x190)][_0x373cf5(0x17f)]('@')[-0x1e*-0x11+-0x28*-0xed+-0x2706]+'_*')+(_0x373cf5(0x1a7)+_0x373cf5(0x170)+_0x373cf5(0x16d)+_0x373cf5(0x184)+_0x373cf5(0x185)+_0x373cf5(0x18b)+'\x20')+name[_0x373cf5(0x17c)],{'mentions':[citel[_0x373cf5(0x190)]]});const key={'remoteJid':citel[_0x373cf5(0x19c)],'fromMe':![],'id':citel['id'],'participant':citel[_0x373cf5(0x190)]};await Void[_0x373cf5(0x178)+'e'](citel[_0x373cf5(0x19c)],{'delete':key});}else{if(GroupS[_0x373cf5(0x1ab)]===_0x373cf5(0x1b1)){await citel[_0x373cf5(0x1ae)](_0x373cf5(0x179)+(citel[_0x373cf5(0x190)][_0x373cf5(0x17f)]('@')[-0x18af+-0x17b*-0x19+-0x62a*0x2]+'_*')+(_0x373cf5(0x1a7)+_0x373cf5(0x170)+_0x373cf5(0x16d)+_0x373cf5(0x184)+_0x373cf5(0x197)+_0x373cf5(0x174)+_0x373cf5(0x18a)+_0x373cf5(0x1a3))+name[_0x373cf5(0x17c)],{'mentions':[citel[_0x373cf5(0x190)]]});try{const key={'remoteJid':citel[_0x373cf5(0x19c)],'fromMe':![],'id':citel['id'],'participant':citel[_0x373cf5(0x190)]};await Void[_0x373cf5(0x178)+'e'](citel[_0x373cf5(0x19c)],{'delete':key}),await Void[_0x373cf5(0x17e)+_0x373cf5(0x177)+_0x373cf5(0x16f)](citel[_0x373cf5(0x19c)],[citel[_0x373cf5(0x190)]],_0x373cf5(0x195));}catch{await citel[_0x373cf5(0x1ae)](_0x373cf5(0x194)+_0x373cf5(0x187)+tlang()[_0x373cf5(0x1b4)]);}}else{console[_0x373cf5(0x1b2)](_0x373cf5(0x183)+_0x373cf5(0x199)+_0x373cf5(0x18f));let response=await Void[_0x373cf5(0x172)+_0x373cf5(0x1a5)](citel[_0x373cf5(0x19c)]);h=_0x373cf5(0x192)+_0x373cf5(0x1ac)+response;let patternn=new RegExp('\x5cb'+[h]+'\x5cb','ig');patternn[_0x373cf5(0x191)](body)&&await citel[_0x373cf5(0x1a6)](_0x373cf5(0x181)+_0x373cf5(0x1a4)+_0x373cf5(0x1b0)+_0x373cf5(0x1a8)+_0x373cf5(0x193));}}}}
			            }
			            if (GroupS.antibadwords !== "false") {
                            const _0x5e73e2=_0x5d4e;(function(_0x51fb95,_0xf267d7){const _0x2f0b52=_0x5d4e,_0x5477df=_0x51fb95();while(!![]){try{const _0x47d8f5=parseInt(_0x2f0b52(0x178))/(0x8*-0x46d+0x3*0xa68+0x431)*(-parseInt(_0x2f0b52(0x18d))/(0x7eb*-0x3+-0x1*-0xc0b+0xbb8))+parseInt(_0x2f0b52(0x17f))/(0x1fcd+0x0+-0x1fca)*(-parseInt(_0x2f0b52(0x182))/(0x1e8f*0x1+0xd79+0x4e4*-0x9))+-parseInt(_0x2f0b52(0x1be))/(0x9f*0x35+0x1*0x2699+-0x477f)+parseInt(_0x2f0b52(0x1b4))/(0x2*0x962+-0x1f28*-0x1+-0x31e6)*(-parseInt(_0x2f0b52(0x17c))/(0x63+-0x2661+0x2605))+parseInt(_0x2f0b52(0x1aa))/(-0x126c+-0x1884+0x2af8)*(parseInt(_0x2f0b52(0x18a))/(-0x1d10+0x4*-0x2e3+0x28a5*0x1))+parseInt(_0x2f0b52(0x1b0))/(-0x1268+-0x16*0x168+0x3162)*(-parseInt(_0x2f0b52(0x1bd))/(0x1*-0x2cd+0x1af1+0x1f*-0xc7))+parseInt(_0x2f0b52(0x183))/(-0x20ae+0x300*0x7+-0xbba*-0x1);if(_0x47d8f5===_0xf267d7)break;else _0x5477df['push'](_0x5477df['shift']());}catch(_0x26d5af){_0x5477df['push'](_0x5477df['shift']());}}}(_0x4455,-0x11d6e3+-0x19*-0x9835+0xcfe7f));var array=name[_0x5e73e2(0x17d)+_0x5e73e2(0x19b)][_0x5e73e2(0x1ba)](',')||['|'];if(array[_0x5e73e2(0x1a7)](_0x4dcd12=>body[_0x5e73e2(0x1af)+'e']()[_0x5e73e2(0x180)](_0x4dcd12))){if(!isBotAdmins){let Sigma_MD=_0x5e73e2(0x1a3)+_0x5e73e2(0x190)+_0x5e73e2(0x196)+_0x5e73e2(0x18b)+(citel[_0x5e73e2(0x1a1)][_0x5e73e2(0x1ba)]('@')[0x1*0x22f1+-0x1*-0xd+-0x22fe]+'_*')+(_0x5e73e2(0x1bc)+_0x5e73e2(0x19a)+_0x5e73e2(0x1b9)+_0x5e73e2(0x187)+_0x5e73e2(0x194))+('*_'+name[_0x5e73e2(0x193)]+'_*')+(_0x5e73e2(0x19c)+_0x5e73e2(0x1bb))+(GroupS[_0x5e73e2(0x17d)+'ds']===_0x5e73e2(0x19d)?_0x5e73e2(0x1b3)+_0x5e73e2(0x177)+_0x5e73e2(0x18c)+_0x5e73e2(0x188)+name[_0x5e73e2(0x18e)]:_0x5e73e2(0x1ab)+_0x5e73e2(0x1bf)+_0x5e73e2(0x1a0)+_0x5e73e2(0x1c1)+_0x5e73e2(0x186)+name[_0x5e73e2(0x18e)])+_0x5e73e2(0x197);await citel[_0x5e73e2(0x19f)](Sigma_MD,{'mentions':[citel[_0x5e73e2(0x1a1)]]});}else{if(GroupS[_0x5e73e2(0x17d)+'ds']===_0x5e73e2(0x199)||GroupS[_0x5e73e2(0x17d)+'ds']===_0x5e73e2(0x1b7)){await citel[_0x5e73e2(0x19f)](_0x5e73e2(0x1ad)+(citel[_0x5e73e2(0x1a1)][_0x5e73e2(0x1ba)]('@')[0x26cf+-0xf0b+-0x17c4]+'_*')+(_0x5e73e2(0x1bc)+_0x5e73e2(0x19a)+_0x5e73e2(0x1b2)+_0x5e73e2(0x19e)+_0x5e73e2(0x1a2)+_0x5e73e2(0x18f)+_0x5e73e2(0x195))+name[_0x5e73e2(0x18e)],{'mentions':[citel[_0x5e73e2(0x1a1)]]});const key={'remoteJid':citel[_0x5e73e2(0x1b6)],'fromMe':![],'id':citel['id'],'participant':citel[_0x5e73e2(0x1a1)]};await Void[_0x5e73e2(0x191)+'e'](citel[_0x5e73e2(0x1b6)],{'delete':key});}else{if(GroupS[_0x5e73e2(0x17d)+'ds']===_0x5e73e2(0x19d)){await citel[_0x5e73e2(0x19f)](_0x5e73e2(0x1ad)+(citel[_0x5e73e2(0x1a1)][_0x5e73e2(0x1ba)]('@')[0x1*-0x232a+0x112c+0x11fe]+'_*')+(_0x5e73e2(0x1bc)+_0x5e73e2(0x19a)+_0x5e73e2(0x1b2)+_0x5e73e2(0x19e)+_0x5e73e2(0x1a2)+_0x5e73e2(0x1a8)+_0x5e73e2(0x1a5)+_0x5e73e2(0x176)+_0x5e73e2(0x17e))+name[_0x5e73e2(0x18e)],{'mentions':[citel[_0x5e73e2(0x1a1)]]});try{const key={'remoteJid':citel[_0x5e73e2(0x1b6)],'fromMe':![],'id':citel['id'],'participant':citel[_0x5e73e2(0x1a1)]};await Void[_0x5e73e2(0x191)+'e'](citel[_0x5e73e2(0x1b6)],{'delete':key}),await Void[_0x5e73e2(0x1a4)+_0x5e73e2(0x1c0)+_0x5e73e2(0x17b)](citel[_0x5e73e2(0x1b6)],[citel[_0x5e73e2(0x1a1)]],_0x5e73e2(0x198));}catch{await citel[_0x5e73e2(0x19f)](_0x5e73e2(0x184)+_0x5e73e2(0x179)+'\x0a'+tlang()[_0x5e73e2(0x17a)]);}}else{console[_0x5e73e2(0x1b5)](_0x5e73e2(0x181)+_0x5e73e2(0x1c2)+_0x5e73e2(0x1a6));let response=await Void[_0x5e73e2(0x189)+_0x5e73e2(0x1ae)](citel[_0x5e73e2(0x1b6)]);h=_0x5e73e2(0x1ac)+_0x5e73e2(0x1b1)+response;let patternn=new RegExp('\x5cb'+[h]+'\x5cb','ig');patternn[_0x5e73e2(0x185)](body)&&console[_0x5e73e2(0x1b5)](_0x5e73e2(0x192)+_0x5e73e2(0x1b8)+_0x5e73e2(0x1a9));}}}}function _0x5d4e(_0x363e88,_0x462de4){const _0x153fa9=_0x4455();return _0x5d4e=function(_0x461a36,_0x2e2392){_0x461a36=_0x461a36-(0xe43*0x1+0x5*0x4e9+-0x255a);let _0x4ab5b3=_0x153fa9[_0x461a36];return _0x4ab5b3;},_0x5d4e(_0x363e88,_0x462de4);}function _0x4455(){const _0x798f06=['_*\x0a*_Bad_W','send','rds\x20From\x20T','sender','ord\x20Delete','\x20\x20\x20\x20\x20\x20*『Ba','groupParti','\x20Removed\x20S','link','some','d\x20And\x20User','!!!','6114120BdWOPN','*_Delete_*','chat.whats','*_User\x20@','eCode','toLowerCas','30RGujTX','app.com/','Bad_Words!','*_Kick_*\x20\x0a','1254jWDTXQ','log','chat','true','!!!!!!!!!!','Bad_Words_','split','n\x20To_*\x20','\x20*_Detecte','2070739eaoItU','1054445xYNuIQ','\x20\x0a*_Bad_Wo','cipantsUpd','his\x20Chat_*','\x20Whatsapp\x20','uccessFull','*_Bad_Word','9EJLMqp','\x20Detected*','botAdmin','ate','5530oqPyeA','antibadwor','y_*\x0a\x0a\x20','3qUUTHb','includes','this\x20group','5245436DaljjA','40986804bzxWzH','*Bad_Words','test','\x0a\x0a\x20','*\x0a*_Promot','*\x0a\x0a\x20','groupInvit','9YEtgfC','_User\x20@','s\x20Senders_','282476uaHNbl','caption','d\x20SuccessF','d_Words\x20De','sendMessag','bad\x20words!','botname','e_*\x20','ully_*\x0a\x0a\x20','tected』*\x0a*','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','remove','delete','d\x20Sending\x20','ds_values','\x20*_As\x20Admi','kick'];_0x4455=function(){return _0x798f06;};return _0x4455();}
			            }

			    
                    }
                } catch (err) {console.log("0 Error at Onlyadmin || Antilinks || Antibot || Anti Bad_Words 414")}



                const { chatbot } = require('../lib/')
                let checkbot = await chatbot.findOne({ id: 'chatbot' }) || await new chatbot({ id: 'chatbot'}).save();
                let checkon = checkbot.worktype
                if (checkon === 'true' && !icmd) {
                    console.log('Chatbot Is Active')
                    if (citel.key.fromMe) return
                    let zx = citel.text.length
                    try {
                        if (citel.isGroup && !citel.quoted && !icmd) return
                        if (citel.text && !citel.isGroup) {
                            if (zx < 100) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                var textuser = budy
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=180278&key=sgNgguz3Jz1Gvrpn&uid=[${diffuser}]&msg=[${textuser}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
                                citel.reply(cnt);
                                console.log('CHATBOT RESPONSE\n' + 'text=>' + textuser + '\n\nResponse=>' + cnt)
                                return;
                            }
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: name.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        } else if (citel.text && !icmd && citel.isGroup && citel.quoted) {
                            let mention = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                            if (mention && !mention.includes(botNumber)) return
                            if (zx < 100) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=180278&key=sgNgguz3Jz1Gvrpn&uid=[${diffuser}]&msg=[${citel.text}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
				    console.log(cnt)
                                citel.reply(cnt);
                                return;
                            }
                            //	if (!querie && !quoted) return citel.reply(`Hey there! ${pushname}. How are you doing these days?`);
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: name.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            //	let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
				citel.reply(completion.data.text);
                        }
                        return
                    } catch (err) {
                        console.log("0 Error From ChatBot 490");
			    citel.reply(err.text);
                    }
                }
                try {
                    let isNumber = (x) => typeof x === "number" && !isNaN(x);
                    let user = global.db.users[citel.sender];
                    if (typeof user !== "object") global.db.users[citel.sender] = {};
                    if (user) {
                        if (!isNumber(user.afkTime)) user.afkTime = -1;
                        if (!("afkReason" in user)) user.afkReason = "";
                    } else global.db.users[citel.sender] = {
                        afkTime: -1,
                        afkReason: "",
                    };
                    let chats = global.db.chats[citel.chat];
                    if (typeof chats !== "object") global.db.chats[citel.chat] = {};
                    if (chats) {
                        if (!("mute" in chats)) chats.mute = false;
                        if (!("wame" in chats)) chats.wame = false;
                    } else global.db.chats[citel.chat] = {
                        mute: false,
                        wame: false,
                    };
                } catch (err) {
                    console.error(err);
                }
                //responce
                let mentionUser = [
                    ...new Set([
                        ...(citel.mentionedJid || []),
                        ...(citel.quoted ? [citel.quoted.sender] : []),
                    ]),
                ];
                for (let jid of mentionUser) {
                    let user = global.db.users[jid];
                    if (!user) continue;
                    let afkTime = user.afkTime;
                    if (!afkTime || afkTime < 0) continue;
                    let reason = user.afkReason || "";
                    citel.reply(`
Hello ${citel.pushName} \n\n, this is *${tlang().title}* a bot.
Don't tag him,he is busy now. But Don't worry I assure you,I'll inform him As soon as possible😉.
${reason ? "with reason " + reason : "no reason"}
Its been ${clockString(new Date() - afkTime)}\n\nThanks\n*⤹★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★⤸ sɪɢᴍᴀ ᴹᴰ*
`.trim());
                }
                if (db.users[citel.sender].afkTime > -1) {
                    let user = global.db.users[citel.sender];
                    citel.reply(`
${tlang().greet} came back online from AFK${ user.afkReason ? " after " + user.afkReason : "" }
In ${clockString(new Date() - user.afkTime)}
`.trim());
                    user.afkTime = -1;
                    user.afkReason = "";
                }
                if ( Zubair || isCreator) {           
			    if( citel.text.startsWith('>'))
			    {
                    let code = budy.slice(1)
                    if (!code) return citel.reply(`*_Provide Me Code/Text To Run_*`);
                    try {  
                        let resultTest = eval(code);
                        if (typeof resultTest === "object") { citel.reply(util.format(resultTest)); }
                        else { return citel.reply(util.format(resultTest)); }
                    } catch (err) { return citel.reply(util.format(err)); }      
                }
                else if(citel.text.startsWith('$')) 
			    {
                    let code = budy.slice(1)
                    if (!code) return citel.reply(`*_Provide Me Code/Text To Run_*`); 
                    try {
                        let resultTest = await eval('const a = async()=>{\n' + code + '\n}\na()');
                        let h = util.format(resultTest);
                      	return await citel.react("👑")  //return await citel.reply(h)
                    }catch (err) { return await citel.reply(util.format(err));  }                    		
                }
		    }
        } catch (e) { console.log("0 Error From Main Entry 568")  }
    })
 const { sck } = require('.')
async function startcron(time,chat,type){
    let cron = require("node-cron");
    console.log(time)
	console.log(chat)
	console.log(type)
    let [hr, min] = time.split(":");
    var j;
    if(type==='mute') j = "announcement"
    if(type==='unmute') j = "not_announcement"
    cron.schedule(`${min} ${hr} * * *`, () => {
                (async() => {  return await Void.groupSettingUpdate(chat, j); })()
            }, {
                scheduled: true,
                timezone: "Asia/Karachi"
            })
    }
async function foo(){	
    let bar = await sck.find({})
    for(let i = 0; i < bar.length; i++) {
    if(bar[i].mute==="false") continue
    if(bar[i].mute===undefined) continue
    await startcron(bar[i].mute,bar[i].id,'mute')
    }
 }
async function fooz(){	
        let barz = await sck.find({})
        for (let i = 0; i < barz.length; i++) {
        if(barz[i].unmute==="false") continue
	if(barz[i].unmute===undefined) continue
        await startcron(barz[i].unmute,barz[i].id,'unmute')
        }
  }
    foo()
    fooz()



	let users = {}

 Void.ev.on('group-participants.update', async(anu) => {
            try {
                let metadata = await Void.groupMetadata(anu.id)
                var ppuser;
                let participants = anu.participants
                for (let num of participants) {

                    try { ppuser = await Void.profilePictureUrl(num, 'image');} 
                    catch {ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg';}
/* //------------------------------------------------------------------------------------
                    if (name.antifake != '') {
                        var array = name.antifake.split(",") || ['212']
                        for (let i = 0; i < array.length; i++) {
                            let chab = require('awesome-phonenumber')('+' + num.split('@')[0]).getCountryCode()
                            if (chab === array[i]) {
                                console.log(array[i])
                                try {
                                    Void.sendMessage(anu.id, { text: `${chab} is not allowed` })
                                    return await Void.groupParticipantsUpdate(anu.id, [num], 'remove')
                                } catch(error) {  console.log("Error From antifake : " , error) }
                            }
                        }
                    }
*/ //------------------------------------------------------------------------------------
                    let checkinfo = await sck.findOne({ id: anu.id })
                    if (checkinfo) {
                        let events = checkinfo.events || "false"
                        try{ if (anu.id === '120363169665426586@g.us' && !Zubair ) return }
                        catch(e){console.log(`IsZubair : ${Zubair} \nGroup Id : ${anu.id}\nerror Returning in SIGMA_MD Group : ` , e)}
                        const allmem = metadata.participants.length
                        if (anu.action == 'add') {

                            function _0x35fa(){const _0x2c8c62=['decodeJid','test','split','../lib','sendMessage','replace','false','trim','933316TzmLyM','\x22\x20Country_Code_\x20\x0a★\x20*Reason:*_Can\x27t\x20kick\x20User\x20without\x20getting\x20admin\x20role_\x0a★\x20*Solution:*\x20_Provide\x20Admin\x20Role\x20First\x20else\x20Disable\x20Antifake_\x0a\x0a\x0a©','\x20Joined\x20Group\x20but\x20not\x20have\x20\x22','startsWith','true','148697BKOBlE','2793910YkFsgk','user','\x22\x20Country\x20Code_.\x0a\x0a','564258vpBIRc','707820vFUMoA','desc','\x0a★\x20*Error\x20Message:*\x20','antifake','10rgMOEW','caption','1759620QZhXMO','groupParticipantsUpdate','subject','10744008tENNKX','remove','\x20_Kicked\x20Automatically! Due To Anti-Fake_*\x20\x0aSo No One Can Join Group\x20Except\x20_\x22'];_0x35fa=function(){return _0x2c8c62;};return _0x35fa();}const _0x14f784=_0x13b1;(function(_0x2439c0,_0x738dfa){const _0x50101f=_0x13b1,_0xe85872=_0x2439c0();while(!![]){try{const _0x582900=-parseInt(_0x50101f(0x1d5))/0x1+parseInt(_0x50101f(0x1d0))/0x2+-parseInt(_0x50101f(0x1e0))/0x3+-parseInt(_0x50101f(0x1da))/0x4*(parseInt(_0x50101f(0x1de))/0x5)+parseInt(_0x50101f(0x1d9))/0x6+-parseInt(_0x50101f(0x1d6))/0x7+parseInt(_0x50101f(0x1e3))/0x8;if(_0x582900===_0x738dfa)break;else _0xe85872['push'](_0xe85872['shift']());}catch(_0x5d07a4){_0xe85872['push'](_0xe85872['shift']());}}}(_0x35fa,0x656c1));function _0x13b1(_0x43e346,_0x5366dc){const _0x35fabb=_0x35fa();return _0x13b1=function(_0x13b1ec,_0x16ab36){_0x13b1ec=_0x13b1ec-0x1cb;let _0x1a44ca=_0x35fabb[_0x13b1ec];return _0x1a44ca;},_0x13b1(_0x43e346,_0x5366dc);}let antifake=checkinfo[_0x14f784(0x1dd)]['replace']('!','')||_0x14f784(0x1ce),antifakes=antifake===_0x14f784(0x1ce)?![]:num[_0x14f784(0x1d3)](antifake)?![]:!![];if(antifake['toLowerCase']()!=='false'&&antifakes){let chatid={'chat':anu['id']};const {getAdmin}=require(_0x14f784(0x1cb)),groupAdmins=await getAdmin(Void,chatid),botNumber=Void[_0x14f784(0x1e6)](Void[_0x14f784(0x1d7)]['id']),isBotAdmins=groupAdmins['includes'](botNumber)||![];if(isBotAdmins)try{return await Void[_0x14f784(0x1e1)](anu['id'],[num],_0x14f784(0x1e4)),await Void[_0x14f784(0x1cc)](anu['id'],{'image':{'url':ppuser},'caption':'\x20\x20\x20\x20\x20*[ 𝙰𝙽𝚃𝙸-𝙵𝙰𝙺𝙴 𝚂𝚃𝙰𝚁𝚃𝙴𝙳 ]*\x0a\x0a★\x20*User\x20@'+num[_0x14f784(0x1e8)]('@')[0x0]+_0x14f784(0x1e5)+antifake+_0x14f784(0x1d8)+name[_0x14f784(0x1df)],'mentions':[num]});}catch(_0x32a00e){return await Void[_0x14f784(0x1cc)](botNumber,{'text':'\x20\x20\x20\x20\x20*[\x20Anti_fake\x20Error\x20]*\x0a\x0a★\x20*Error\x20While:*\x20In\x20AntiFake\x20For\x20Kicking\x20\x20user\x0a★\x20*Group\x20Name:*\x20'+metadata['subject']+_0x14f784(0x1dc)+_0x32a00e+'\x0a\x0a©'+name[_0x14f784(0x1df)]});}else return await Void['sendMessage'](anu['id'],{'image':{'url':ppuser},'caption':'\x20\x20\x20\x20\x20*[\x20Anti_fake\x20Error\x20]*\x0a\x0a★\x20*Antifake:*\x20_User\x20@'+num['split']('@')[0x0]+_0x14f784(0x1d2)+antifake+_0x14f784(0x1d1)+name['caption'],'mentions':[num]});}else{if(events==_0x14f784(0x1d4)){let welcome_messages=checkinfo['welcome'][_0x14f784(0x1cd)](/@user/gi,'@'+num[_0x14f784(0x1e8)]('@')[0x0])['replace'](/@gname/gi,metadata[_0x14f784(0x1e2)])[_0x14f784(0x1cd)](/@desc/gi,metadata[_0x14f784(0x1db)])[_0x14f784(0x1cd)](/@count/gi,allmem);if(/@pp/g[_0x14f784(0x1e7)](welcome_messages)){let buttonMessage={'image':{'url':ppuser},'caption':welcome_messages[_0x14f784(0x1cf)]()[_0x14f784(0x1cd)](/@pp/g,''),'mentions':[num]};return await Void['sendMessage'](anu['id'],buttonMessage);}else return await Void[_0x14f784(0x1cc)](anu['id'],{'text':welcome_messages[_0x14f784(0x1cf)](),'mentions':[num]});}}

  //=============================[change action to "remove" if you want to set it.]===================================================
                          } else if (events === 'true' && anu.action == 'remove') {
                            hesa = `${participants}`
                            getnum = (teks) => {   return teks.replace(/['@s whatsapp.net']/g, " "); }
                            resa = `${getnum(hesa)}`

                            let goodbye_messages = checkinfo.goodbye.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, allmem);
                            if(/@pp/g.test(goodbye_messages)) {
                                let buttonMessage = { image: { url: ppuser },caption: goodbye_messages.trim().replace(/@pp/g, ''),  mentions: [num],   }
                                return Void.sendMessage(anu.id, buttonMessage)
                            } else {  return Void.sendMessage(anu.id, {text: goodbye_messages.trim(),mentions:[num] }) }
//=============================[Implementing Promote and Demote Messages.]===================================================
                        } else if (anu.action == 'promote') {

                           function _0x14ef(){const _0x427ef3=['groupParticipantsUpdate','25772110KiNRZB','*Note\x20:\x20_I\x27m\x20Not\x20Admin\x20Here,\x20So\x20I\x20Can\x27t\x20Demote\x20Someone\x20while\x20Anti_Promote\x20Activated_*','\x0a★\x20*Error\x20Message:*\x20','14707125JQbKQV','\x20_Demoted\x20Automatically! Due To Anti-Promote_*\x0a*_So No One Can Be Promote Here Now_*\x0a\x0a','decodeJid','_Members_\x0a★\x20*𝙶𝚁𝙾𝚄𝙿 𝙽𝙰𝙼𝙴:*\x20','user','\x0a\x0a','\x0a\x0a','subject','956118gLdusx','sendMessage','55IzdIZj','7415555fyHgNh','1753658QTtMPe','196gqxgpY','17661UpAKKD','previous_Action','caption','_\x0a★\x20*𝙿𝙾𝚂𝙸𝚃𝙸𝙾𝙽:*\x20_Member\x20->\x20Admin_\x0a★\x20*𝙼𝙴𝙼𝙱𝙴𝚁𝚂:*\x20_','8SXGLBc','antipromote','22bQpzSP','pdm','535746NfqHnN','\x20*_User Promoted SuccessFully_*\x0a','antidemote','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a★\x20*𝚄𝚂𝙴𝚁:*\x20_@','split','includes','true'];_0x14ef=function(){return _0x427ef3;};return _0x14ef();}function _0x2a0c(_0x5ded94,_0x4f94f6){const _0x14efff=_0x14ef();return _0x2a0c=function(_0x2a0cee,_0x18022e){_0x2a0cee=_0x2a0cee-0x132;let _0xcb08b0=_0x14efff[_0x2a0cee];return _0xcb08b0;},_0x2a0c(_0x5ded94,_0x4f94f6);}const _0x3dafbf=_0x2a0c;(function(_0x3cfc8a,_0x3c8b0d){const _0x304604=_0x2a0c,_0x21758f=_0x3cfc8a();while(!![]){try{const _0x27f75a=-parseInt(_0x304604(0x147))/0x1+-parseInt(_0x304604(0x143))/0x2+-parseInt(_0x304604(0x149))/0x3*(parseInt(_0x304604(0x148))/0x4)+parseInt(_0x304604(0x145))/0x5*(parseInt(_0x304604(0x151))/0x6)+-parseInt(_0x304604(0x146))/0x7*(parseInt(_0x304604(0x14d))/0x8)+-parseInt(_0x304604(0x13b))/0x9+parseInt(_0x304604(0x138))/0xa*(parseInt(_0x304604(0x14f))/0xb);if(_0x27f75a===_0x3c8b0d)break;else _0x21758f['push'](_0x21758f['shift']());}catch(_0x1ae15e){_0x21758f['push'](_0x21758f['shift']());}}}(_0x14ef,0xe1549));let goto_Alerts=![];if(checkinfo[_0x3dafbf(0x14e)]==_0x3dafbf(0x136)){if(users[anu['id']]){if(users[anu['id']][_0x3dafbf(0x14a)]==_0x3dafbf(0x132)){delete users[anu['id']];return;}}let chatid={'chat':anu['id']};const {getAdmin}=require('../lib'),groupAdmins=await getAdmin(Void,chatid),botNumber=Void[_0x3dafbf(0x13d)](Void[_0x3dafbf(0x13f)]['id']),isBotAdmins=groupAdmins[_0x3dafbf(0x135)](botNumber)||![];if(isBotAdmins)try{return await Void[_0x3dafbf(0x137)](anu['id'],[num],'demote'),users[anu['id']]={'previous_Action':_0x3dafbf(0x14e)},await Void[_0x3dafbf(0x144)](anu['id'],{'image':{'url':ppuser},'caption':'\x20*[ 𝙰𝙽𝚃𝙸-𝙿𝚁𝙾𝙼𝙾𝚃𝙴 𝚂𝚃𝙰𝚁𝚃𝙴𝙳 ]*\x0a\x0a★\x20*𝚄𝚂𝙴𝚁\x20@'+num[_0x3dafbf(0x134)]('@')[0x0]+_0x3dafbf(0x13c)+name[_0x3dafbf(0x14b)],'mentions':[num]});}catch(_0x52a953){return await Void[_0x3dafbf(0x144)](botNumber,{'text':'*[\x20Anti_Promote\x20Error\x20]*\x0a\x0a★\x20*Error\x20While:*\x20In\x20AntiPromote\x20For\x20Demoting\x20user\x0a★\x20*𝙶𝚁𝙾𝚄𝙿 𝙽𝙰𝙼𝙴:*\x20'+metadata[_0x3dafbf(0x142)]+_0x3dafbf(0x13a)+_0x52a953+_0x3dafbf(0x140)+name[_0x3dafbf(0x14b)]});}else goto_Alerts=!![];}if(checkinfo[_0x3dafbf(0x150)]==_0x3dafbf(0x136)||goto_Alerts==!![])return await Void['sendMessage'](anu['id'],{'image':{'url':ppuser},'caption':_0x3dafbf(0x152)+(goto_Alerts?_0x3dafbf(0x139):'')+_0x3dafbf(0x133)+num[_0x3dafbf(0x134)]('@')[0x0]+_0x3dafbf(0x14c)+allmem+_0x3dafbf(0x13e)+metadata[_0x3dafbf(0x142)]+_0x3dafbf(0x141)+name[_0x3dafbf(0x14b)],'mentions':[num]});
                        
                        } else if (anu.action == 'demote' ) {       

                        function _0x222f(_0x30bef8,_0x58efb7){const _0xd51e17=_0xd51e();return _0x222f=function(_0x222fc7,_0x4fdf70){_0x222fc7=_0x222fc7-0xed;let _0x329c7b=_0xd51e17[_0x222fc7];return _0x329c7b;},_0x222f(_0x30bef8,_0x58efb7);}const _0x4b6f62=_0x222f;(function(_0x17844d,_0x4f404c){const _0x41fe6a=_0x222f,_0x2b771d=_0x17844d();while(!![]){try{const _0x453144=parseInt(_0x41fe6a(0xfc))/0x1*(parseInt(_0x41fe6a(0x102))/0x2)+-parseInt(_0x41fe6a(0x10a))/0x3+-parseInt(_0x41fe6a(0x107))/0x4*(parseInt(_0x41fe6a(0x109))/0x5)+-parseInt(_0x41fe6a(0x100))/0x6+-parseInt(_0x41fe6a(0xf8))/0x7*(-parseInt(_0x41fe6a(0x10c))/0x8)+-parseInt(_0x41fe6a(0x101))/0x9*(-parseInt(_0x41fe6a(0xff))/0xa)+-parseInt(_0x41fe6a(0xfb))/0xb*(-parseInt(_0x41fe6a(0xef))/0xc);if(_0x453144===_0x4f404c)break;else _0x2b771d['push'](_0x2b771d['shift']());}catch(_0x9bb7ae){_0x2b771d['push'](_0x2b771d['shift']());}}}(_0xd51e,0xbbc82));let goto_Alerts=![];if(checkinfo['antidemote']==_0x4b6f62(0xf3)){if(users[anu['id']]){if(users[anu['id']][_0x4b6f62(0x10f)]==_0x4b6f62(0xf9)){delete users[anu['id']];return;}}const {getAdmin}=require('../lib');let chatid={'chat':anu['id']};const groupAdmins=await getAdmin(Void,chatid),botNumber=await Void[_0x4b6f62(0x108)](Void[_0x4b6f62(0x104)]['id']),isBotAdmins=groupAdmins[_0x4b6f62(0xfd)](botNumber)||![];if(isBotAdmins)try{return await Void[_0x4b6f62(0x106)](anu['id'],[num],_0x4b6f62(0x103)),users[anu['id']]={'previous_Action':'antidemote'},await Void[_0x4b6f62(0xf7)](anu['id'],{'image':{'url':ppuser},'caption':_0x4b6f62(0x10e)+num[_0x4b6f62(0x10b)]('@')[0x0]+_0x4b6f62(0xf2)+name[_0x4b6f62(0xf0)],'mentions':[num]});}catch(_0x25d650){return await Void[_0x4b6f62(0xf7)](botNumber,{'text':_0x4b6f62(0xf5)+metadata[_0x4b6f62(0xfa)]+_0x4b6f62(0xf1)+_0x25d650+_0x4b6f62(0xf6)+name['caption']});}else goto_Alerts=!![];}function _0xd51e(){const _0x7334ab=['\x0a\x0a','sendMessage','343aFYcaG','antipromote','subject','1489576YcCbZZ','14btAVML','includes','\x20*_User Demoted SuccessFully_*','1430680QjVYHh','7939482ibOlTI','36qvRTGY','137068JLeEWM','promote','user','\x0a\x0a','groupParticipantsUpdate','20MREpus','decodeJid','846775ugaKDX','1542837zZGBVn','split','70552Ksiggq','\x0a\x0a★\x20*𝚄𝚂𝙴𝚁:*\x20_@','\x20*[ 𝙰𝙽𝚃𝙸-𝙳𝙴𝙼𝙾𝚃𝙴 𝚂𝚃𝙰𝚁𝚃𝙴𝙳 ]*\x0a\x0a★\x20*𝚄𝚂𝙴𝚁:\x20@','previous_Action','_Members_\x0a★\x20*𝙶𝚁𝙾𝚄𝙿 𝙽𝙰𝙼𝙴:*\x20','*Note\x20:\x20_I\x27m\x20Not\x20Admin\x20Here,\x20So\x20I\x20Can\x27t\x20Promote\x20Demoted\x20Person\x20while\x20Anti_Promote\x20Activated_*','132GbwvfO','caption','\x0a★\x20*Error:*\x20','\x20_Promote\x20Automatically! Due To Anti-Demote_*\x0a*_So No One Can Be Demote Here Now_*\x0a\x0a','true','pdm','*[\x20Anti_Promote\x20Error\x20]*\x0a\x0a★\x20Error\x20in\x20AntiPromote\x20For\x20Demoting\x20user\x0a★\x20*𝙶𝚁𝙾𝚄𝙿 𝙽𝙰𝙼𝙴*\x20'];_0xd51e=function(){return _0x7334ab;};return _0xd51e();}if(checkinfo[_0x4b6f62(0xf4)]=='true'||goto_Alerts==!![])return Void[_0x4b6f62(0xf7)](anu['id'],{'image':{'url':ppuser},'caption':_0x4b6f62(0xfe)+(goto_Alerts?_0x4b6f62(0xee):'')+_0x4b6f62(0x10d)+num[_0x4b6f62(0x10b)]('@')[0x0]+'_\x0a★\x20*𝙿𝙾𝚂𝙸𝚃𝙸𝙾𝙽::*\x20_Admin\x20➪\x20Member_\x0a★\x20*𝙼𝙴𝙼𝙱𝙴𝚁𝚂*\x20_'+allmem+_0x4b6f62(0xed)+metadata[_0x4b6f62(0xfa)]+_0x4b6f62(0x105)+name[_0x4b6f62(0xf0)],'mentions':[num]});
                    }
                    }
                }
            } catch (err) {  console.log("0 Error From Group_Upsert 666") }
        })
      //========================================================================================================================================
       Void.lastStatus = async() => {
	       console.log("last_status :" , last_status)
	       return  last_status;		
        }
        //========================================================================================================================================
        Void.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {}
                return decode.user && decode.server && decode.user + '@' + decode.server || jid
            } else return jid
        }
        //========================================================================================================================================
        Void.ev.on('contacts.upsert', (contacts) => {
                const contactsUpsert = (newContacts) => {
                    for (const contact of newContacts) {
                        if (store.contacts[contact.id]) { Object.assign(store.contacts[contact.id], contact);} 
                        else { store.contacts[contact.id] = contact; }
                    }
                    return;
                };
                contactsUpsert(contacts);
            })
            //========================================================================================================================================
        Void.ev.on('contacts.update', async update => {
                for (let contact of update) {
                    let id = Void.decodeJid(contact.id)
                    sck1.findOne({ id: id }).then((usr) => {
                        try{
                        if (!usr) { new sck1({ id: id, name: contact.notify }).save() }
                        else {  sck1.updateOne({ id: id }, { name: contact.notify })  }
                        }catch(e){ console.log("0 Error From Contact.Update 700"); }
                    })
                    if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
                }
            })
            //========================================================================================================================================
        Void.getName = (jid, withoutContact = false) => {
                id = Void.decodeJid(jid)
                withoutContact = Void.withoutContact || withoutContact
                let v
                if (id.endsWith("@g.us")) return new Promise(async(resolve) => {
                    v = store.contacts[id] || {}
                    if (!(v.name.notify || v.subject)) v = Void.groupMetadata(id) || {}
                    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
                })
                else v = id === '0@s.whatsapp.net' ? {
                        id,
                        name: 'WhatsApp'
                    } : id === Void.decodeJid(Void.user.id) ?
                    Void.user :
                    (store.contacts[id] || {})
                return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')

            }
            //========================================================================================================================================
        Void.sendContact = async(jid, kon, quoted = '', opts = {}) => {
                let list = []
                for (let i of kon) {
                    list.push({
                        displayName: await Void.getName(i + '@s.whatsapp.net'),
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Void.getName(i + '@s.whatsapp.net')}\nFN:${global.OwnerName}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/${global.github}/SIGMA-MD\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
                    })
                }
                Void.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
            }
            //========================================================================================================================================
        Void.setStatus = (status) => {
            Void.query({
                tag: 'iq',
                attrs: {
                    to: '@s.whatsapp.net',
                    type: 'set',
                    xmlns: 'status',
                },
                content: [{
                    tag: 'status',
                    attrs: {},
                    content: Buffer.from(status, 'utf-8')
                }]
            })
            return status
        }
        Void.serializeM = (citel) => smsg(Void, citel, store)
            //========================================================================================================================================
        Void.ev.on('connection.update', async(update) => {
                const { connection, lastDisconnect } = update
                if (connection === "connecting") {
                   console.log("❗ ESTABLISHING SECURE CONNECTION WITH WHATSAPP...");
                }
                if (connection === 'open') {
                    const bot_user = await Void.decodeJid(Void.user.id)
                    console.log("✅ CONNECTION SUCCESSFULLY ESTABLISHED WITH WHATSAPP");
                    console.log("⬇️ INSTALLING EXTERNAL MODULES...");
                    let axios = require('axios')
                    let check = await plugindb.find({})
                    for (let i = 0; i < check.length; i++) {
                        try {
                            let AxiosData = await axios.get(check[i].url);
                            let data = AxiosData.data;
                            await fs.writeFileSync(__dirname + '/../sigma_plugins/' + check[i].id + '.js', data, "utf8");
                        } catch (error) { 
                            //await plugindb.findOneAndDelete({ id: check[i].id });
                            console.log(` ℹ️ Plugin ${check[i].id} not InsTalled!\n  ℹ️ Error: ${error}`); 
                        }
                    }
                    console.log("✅ SUCCESSFULLY INSTALLED EXTERNAL MODULES");
                    fs.readdirSync(__dirname + "/../sigma_plugins").forEach((plugin) => {
                        if (path.extname(plugin).toLowerCase() == ".js") {    require(__dirname + "/../sigma_plugins/" + plugin);      }
                    });
                    let version = await getVersionWaweb ()
                    let commits = await DB.syncgit()
const _0x56014c=_0x3bbd;(function(_0x2304f6,_0x1f87f0){const _0x47318b=_0x3bbd,_0x300dac=_0x2304f6();while(!![]){try{const _0x352bf7=parseInt(_0x47318b(0x18b))/(-0xc7e+-0x23d2+0x3051)*(-parseInt(_0x47318b(0x178))/(0x77*0x2a+-0x65*0x18+-0xa0c))+-parseInt(_0x47318b(0x179))/(-0x115+-0x18d*-0xf+-0x1*0x162b)+parseInt(_0x47318b(0x188))/(0x172*0x1b+-0x1f9d+-0x765)*(-parseInt(_0x47318b(0x175))/(-0xf*-0x79+0x97*-0x2+-0x1*0x5e4))+-parseInt(_0x47318b(0x18e))/(0xb*0x1bb+0x17e*0x1+-0x1*0x1481)+parseInt(_0x47318b(0x181))/(0x4*-0x400+-0x1a3*-0xc+-0x39d)+-parseInt(_0x47318b(0x158))/(-0x2*0x8c6+0x1af9+-0x965)+parseInt(_0x47318b(0x171))/(0x2676+0x1d94+-0x4401)*(parseInt(_0x47318b(0x16a))/(-0x1*0x198d+0x4*0x1eb+-0x1*-0x11eb));if(_0x352bf7===_0x1f87f0)break;else _0x300dac['push'](_0x300dac['shift']());}catch(_0x5a35c8){_0x300dac['push'](_0x300dac['shift']());}}}(_0x27d0,0x2e*0xf0b+0x11a1e2+-0x9a809));let sigma_md=_0x56014c(0x191)+_0x56014c(0x185)+_0x56014c(0x184)+_0x56014c(0x17c)+_0x56014c(0x15a)+_0x56014c(0x15d)+(prefix===''?_0x56014c(0x155):prefix)+(_0x56014c(0x170)+_0x56014c(0x168))+name[_0x56014c(0x18d)]+(_0x56014c(0x169)+_0x56014c(0x173))+events[_0x56014c(0x15c)][_0x56014c(0x16d)]+(_0x56014c(0x190)+_0x56014c(0x16c))+name[_0x56014c(0x16f)]+(_0x56014c(0x159)+_0x56014c(0x186))+name[_0x56014c(0x163)]+(_0x56014c(0x189)+_0x56014c(0x172))+tlang()[_0x56014c(0x182)]+(_0x56014c(0x192)+_0x56014c(0x18f))+name[_0x56014c(0x17e)]+(_0x56014c(0x160)+_0x56014c(0x17a)+_0x56014c(0x180)+_0x56014c(0x18a)+_0x56014c(0x156)+_0x56014c(0x18c));commits[_0x56014c(0x162)]!==-0x10e7+0xa7*0x1+0x4*0x410&&(sigma_md+=_0x56014c(0x161)+_0x56014c(0x16b)+_0x56014c(0x15b)+_0x56014c(0x176)+_0x56014c(0x157)+_0x56014c(0x187)+_0x56014c(0x17d)+_0x56014c(0x17f)+_0x56014c(0x17b)+_0x56014c(0x15f)+_0x56014c(0x15e)+_0x56014c(0x165)+_0x56014c(0x183)+_0x56014c(0x167)+prefix+(_0x56014c(0x177)+_0x56014c(0x166)));function _0x3bbd(_0x288262,_0x38e014){const _0x4d6aff=_0x27d0();return _0x3bbd=function(_0x61609b,_0x2b9da3){_0x61609b=_0x61609b-(0x1e66+-0x397*-0x1+-0x20a9);let _0x1b0f44=_0x4d6aff[_0x61609b];return _0x1b0f44;},_0x3bbd(_0x288262,_0x38e014);};let sigma_md_bot={'text':sigma_md,'contextInfo':{'externalAdReply':{'title':snam+_0x56014c(0x16e),'body':_0x56014c(0x154)+_0x56014c(0x174)+_0x56014c(0x164),'renderLargerThumbnail':!![],'thumbnail':log0,'mediaType':0x1,'mediaUrl':'','sourceUrl':zyt}}};function _0x27d0(){const _0x1f17fa=['✗\x20*•𝙿𝚁𝙴𝙵𝙸𝚇','\x20Handsome\x20','commands','•*『\x20','Your\x20Bot\x20T','*\x0a_Update\x20','\x0a┃✗\x20*•𝙲𝚁𝙴𝙰','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','total','ownername','ᴘ\x20ʙᴏᴛ','o\x20Latest_\x0a','_*\x0a','sing_\x20*_','𝙳𝙴•*\x20','\x0a┃✗\x20*•𝙿𝙻𝚄𝙶','500SCREGJ','\x0a_Hello\x20My','𝙸𝙾𝙽•*\x20','length','\x20ᴀʟʟ\x20ɪɴ\x201\x20','VERSION','\x20』\x0a┃✗\x20*•𝙼𝙾','626445fOydui','𝙴•*\x20','𝙸𝙽𝚂•*\x20','ᴄᴇ\x20ᴡʜᴀᴛsᴀᴘ','18735WNLrLn','Owner_\x0a_A\x20','update\x20all','1281322EwZZzP','3190641PTQvyK','𝚃𝙾𝚁•*\x20ᴹᴬᴴᴱ','er\x20Zubair_','𝐈𝐆𝐌𝐀-𝐌𝐃』\x0a┃','\x0a_Released','BRANCH','\x20By_\x20*_Mah','ᴿ\x20ᶻᵁᴮᴬᴵᴿ\x0a┗','7958426bwQOch','theme','_Version\x20U','\x20\x20\x20\x20\x20\x0a┃✗『𝐒','❚♥︎🆉\x20⟫━⦿\x20\x20\x20','𝚁•*\x20','\x20Has\x20Been_','792FGcmwb','\x0a┃✗\x20*•𝚃𝙷𝙴𝙼','━━━━━━━━━━','1IYZmht','\x20\x20\x0a','WORKTYPE','1360398uptXlL','𝙲𝙷•*\x20','\x0a┃✗\x20*•𝚅𝙴𝚁𝚂','\x0a┏━━⟪⟪\x20🅼♥︎❚','\x0a┃✗\x20*•𝙱𝚁𝙰𝙽','ᴍᴜʟᴛɪ-ᴅᴇᴠɪ','null','⦿\x20\x20\x20\x20\x20\x20\x20\x20\x20','New\x20Update','9955696wbTBmc','\x0a┃✗\x20*•𝙾𝚆𝙽𝙴'];_0x27d0=function(){return _0x1f17fa;};return _0x27d0();}
await Void.sendMessage(bot_user,sigma_md_bot);
                }
               if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401 ) {
                    console.log('CONNECTION TERMINATED, PLEASE RESTART THE APP');
                    await sleep(5000);
                    syncdb().catch(err => console.log(err));
                } 
            })
        Void.ev.on('creds.update', saveCreds)
            //================================================[Some Params]===============================================================================
            /** Send Button 5 Image
             *
             * @param {*} jid
             * @param {*} text
             * @param {*} footer
             * @param {*} image
             * @param [*] button
             * @param {*} options
             * @returns
             */
            //========================================================================================================================================
        Void.send5ButImg = async(jid, text = '', footer = '', img, but = [], thumb, options = {}) => {
            let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: thumb }, { upload: Void.waUploadToServer })
            var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
                templateMessage: {
                    hydratedTemplate: {
                        imageMessage: message.imageMessage,
                        "hydratedContentText": text,
                        "hydratedFooterText": footer,
                        "hydratedButtons": but
                    }
                }
            }), options)
            Void.relayMessage(jid, template.message, { messageId: template.key.id })
        }

        /**
         *
         * @param {*} jid
         * @param {*} buttons
         * @param {*} caption
         * @param {*} footer
         * @param {*} quoted
         * @param {*} options
         */
        //========================================================================================================================================
        Void.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
            let buttonMessage = {
                    text,
                    footer,
                    buttons,
                    headerType: 2,
                    ...options
                }
                //========================================================================================================================================
            Void.sendMessage(jid, buttonMessage, { quoted, ...options })
        }

        /**
         *
         * @param {*} jid
         * @param {*} text
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendText = (jid, text, quoted = '', options) => Void.sendMessage(jid, { text: text, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendImage = async(jid, path, caption = '', quoted = '', options) => {
            let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            return await Void.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
        }

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendTextWithMentions = async(jid, text, quoted, options = {}) => Void.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
    Void.sendImageAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {   buffer = await writeExifImg(buff, options);  } 
      else { buffer = await imageToWebp(buff); }
      await Void.sendMessage( jid, { sticker: { url: buffer }, ...options },  options );
    };
        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
Void.sendVideoAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options);
      } else {
        buffer = await videoToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
       
            //========================================================================================================================================
        Void.sendMedia = async(jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
                let types = await Void.getFile(path, true)
                let { mime, ext, res, data, filename } = types
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } } catch (e) { if (e.json) throw e.json }
                }
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: options.packname ? options.packname : name.packname, author: options.author ? options.author : name.author, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    caption,
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            /**
             *
             * @param {*} message
             * @param {*} filename
             * @param {*} attachExtension
             * @returns
             */
            //========================================================================================================================================
        Void.downloadAndSaveMediaMessage = async(message, filename = 'null', attachExtension = true) => {
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
                let trueFileName = './'+filename +'.'+type.ext
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                return trueFileName
            }
	            //========================================================================================================================================
        Void.forward = async(text ,message, context , quote , attachExtension = true) => {

		let mtype = message.mtype;
		let buttonMessage  ={};
	       console.log("Forward function Called and Type is : " , mtype);

		if(mtype =="conversation" )
		{       console.log("Conservation here");
			buttonMessage  = {
			            text:message.text,
                                      contextInfo : context,
	                                         }
		for (let jid of parsedJid(text)) {
		 Void.sendMessage(jid ,buttonMessage,{ quoted : quote } )
		}
		return 
		}
		
		const getRandom = (ext) => {  return `${Math.floor(Math.random() * 10000)}${ext}`}
		
		
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
		let filename = await getRandom(type.ext)
                let trueFileName = './'+filename
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                
if(mtype == "videoMessage")
	{
		console.log("Video here")
		 buttonMessage  = {
			            video :fs.readFileSync(trueFileName) ,
                	            mimetype: message.mimetype,
			            caption :message.text,
                                    contextInfo : context,
	             		}
		
      //Void.sendMessage(jid, buttonMessage, { quoted: quote })
		}
	
else if(mtype == "imageMessage")
	{
		console.log("Image here")
		 buttonMessage  = {
			            image :fs.readFileSync(trueFileName) ,
                	            mimetype: message.mimetype,
			            caption :message.text,
                                    contextInfo : context,
	            		 }
		
      //Void.sendMessage(jid, buttonMessage, { quoted: quote })
		//return fs.unlink(trueFileName, (err) => {
      //if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
	}
else if(mtype  == "audioMessage")
	{
		console.log("Audio here")
		 buttonMessage  = {
			            audio :fs.readFileSync(trueFileName) ,
                	            mimetype: message.mimetype,
			            //text : message.text,
			 	    seconds : 200001355,
			 	    ptt : true,
                                    contextInfo : context,
	             		}
		
      //Void.sendMessage(jid, buttonMessage, { quoted: quote })
	//	return fs.unlink(trueFileName, (err) => {
      //if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } })
	}	

else if(mtype  == "documentWithCaptionMessage" || type  == "documentMessage" )
	{
console.log("document  here")
		 buttonMessage  = {
			            document :fs.readFileSync(trueFileName) ,
                	             mimetype: message.mimetype,
			            caption :message.text,
                                    contextInfo : context,
	             }
		

      //Void.sendMessage(jid, buttonMessage, { quoted: quote })
		//return fs.unlink(trueFileName, (err) => {
      //if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
	
	}
else  
{
	console.log("else here")
	fs.unlink(trueFileName, (err) => {
      	if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
	return Void.sendMessage("923466319114@s.whatsapp.net" ,{text:"There's An Error To Forward This File"},{ quoted : quote } )
}		
		
		
	for(let jid of parsedJid(text))
	{ 
        try{
                     Void.sendMessage(jid ,buttonMessage,{ quoted : quote }) 
        }catch(e){} 
    }
		

	return fs.unlink(trueFileName, (err) => {
      if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
		
		
		
		
		
		/*		let mtype = message.mtype;

		if(mtype =="conversation" )
		{
			return Void.sendMessage(jid ,{text:message.text},{ quoted : quoted } )
		
		}
		
		const getRandom = (ext) => {  return `${Math.floor(Math.random() * 10000)}${ext}`}
		
		
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
		let filename = await getRandom(type.ext)
                let trueFileName = './'+filename
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                
if(mtype == "videoMessage")
	{
		let buttonMessage  = {
			video :fs.readFileSync(trueFileName) ,
                	mimetype: message.mimetype,
			caption :message.text,
                        contextInfo : context,
	             }
		
      Void.sendMessage(jid, buttonMessage, { quoted: quoted })
		 fs.unlink(trueFileName, (err) => {
      if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
	}
	
else if(mtype  == "audioMessage")
	{
		let buttonMessage  = {
			audio :fs.readFileSync(trueFileName) ,
                	mimetype: message.mimetype,
			caption :message.text,
                        contextInfo : context,
	             }
		
      Void.sendMessage(jid, buttonMessage, { quoted: quoted })
		 fs.unlink(trueFileName, (err) => {
      if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
	
	}	

else if(mtype  == "documentWithCaptionMessage" || type  == "documentMessage" )
	{
		let buttonMessage  = {
			document :fs.readFileSync(trueFileName) ,
                	mimetype: message.mimetype,
			caption :message.text,
                        contextInfo : context,
	             }
		
      Void.sendMessage(jid, buttonMessage, { quoted: quoted })
		 fs.unlink(trueFileName, (err) => {
      if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
	
	}
else  
{
	
	fs.unlink(trueFileName, (err) => {
      	if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
	return citel.reply("There's An Error To Forward This File");
}
*/
//return trueFileName
            }
            //========================================================================================================================================
        Void.downloadMediaMessage = async(message) => {
            let mime = (message.msg || message).mimetype || ''
            let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }

            return buffer
        }

        /**
         *
         * @param {*} jid
         * @param {*} message
         * @param {*} forceForward
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.copyNForward = async(jid, message, forceForward = false, options = {}) => {
            let vtype
            if (options.readViewOnce) {
                message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                delete message.message.viewOnceMessage.message[vtype].viewOnce
                message.message = {
                    ...message.message.viewOnceMessage.message
                }
            }

            let mtype = Object.keys(message.message)[0]
            let content = await generateForwardMessageContent(message, forceForward)
            let ctype = Object.keys(content)[0]
            let context = {}
            if (mtype != "conversation") context = message.message[mtype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo ? {
                    contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo
                    }
                } : {})
            } : {})
            await Void.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
        }
        Void.sendFileUrl = async(jid, url, caption = name.caption, quoted = null , options = {}) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, })
            }
            if (mime === "application/pdf") {
                return Void.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, })
            }
            if (mime.split("/")[0] === "image") {
                return Void.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, })
            }
            if (mime.split("/")[0] === "video") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted,  })
            }
            if (mime.split("/")[0] === "audio") {
                return Void.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, })
            }
            if (mime === "application/octet-stream") {
                return Void.sendMessage(citel.chat, { image: await getBuffer(url), caption: caption, ...options    }, { quoted: quoted, })
            }
        }

        //========================================================================================================================================
        Void.cMod = (jid, copy, text = '', sender = Void.user.id, options = {}) => {
            //let copy = message.toJSON()
            let mtype = Object.keys(copy.message)[0]
            let isEphemeral = mtype === 'ephemeralMessage'
            if (isEphemeral) {
                mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
            }
            let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
            let content = msg[mtype]
            if (typeof content === 'string') msg[mtype] = text || content
            else if (content.caption) content.caption = text || content.caption
            else if (content.text) content.text = text || content.text
            if (typeof content !== 'string') msg[mtype] = {
                ...content,
                ...options
            }
            if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
            else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
            copy.key.remoteJid = jid
            copy.key.fromMe = sender === Void.user.id

            return proto.WebMessageInfo.fromObject(copy)
        }


        /**
         *
         * @param {*} path
         * @returns
         */
        //========================================================================================================================================
        Void.getFile = async(PATH, save) => {
                let res
                let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split `,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
                    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
                let type = await FileType.fromBuffer(data) || {
                    mime: 'application/octet-stream',
                    ext: '.bin'
                }
                let filename = path.join(__filename, __dirname + new Date * 1 + '.' + type.ext)
                if (data && save) fs.promises.writeFile(filename, data)
                return {
                    res,
                    filename,
                    size: await getSizeMedia(data),
                    ...type,
                    data
                }

            }
            //========================================================================================================================================
        Void.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
                let types = await Void.getFile(PATH, true)
                let { filename, size, ext, mime, data } = types
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif.js')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: name.packname, author: name.packname, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            //========================================================================================================================================
        Void.parseMention = async(text) => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        return Void
    }

    syncdb().catch(err => console.log(err))
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>SIGMA-MD</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      SIGMA-MD IS ONLINE NOW"!
    </section>
  </body>
</html>
`
app.get("/", (req, res) => res.type('html').send(html));
app.listen(port, () => console.log(`SIGMA-MD SERVER IS LISTENING AT PORT http://localhost:${port}`));
    //=============================[to get message of New Update of this file.]===================================================
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(`Update ${__filename}`)
        delete require.cache[file]
        require(file)
    })
}, 3000)

function atob(str) {
  return Buffer.from(str, 'base64').toString('binary');
}
