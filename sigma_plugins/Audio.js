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

const { tlang,Module_Exports,prefix,fetchJson,name } = require('../lib')
const fs = require('fs')
const { exec } = require('child_process')
const ffmpeg = require("fluent-ffmpeg")
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "bass",
        infocmd: "adds bass in given sound",
        kingclass: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(bot, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af equalizer=f=54:width_type=o:width=2:g=20";
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await bot.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.send(err);
                let buff = fs.readFileSync(ran);
                bot.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "blown",
        infocmd: "adds blown in given audio",
        kingclass: "audio",
        use: '<reply to any audio>',
       // react:"✅",
    },
    async(bot, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af acrusher=.1:1:64:0:log";
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await bot.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.send(err);
                let buff = fs.readFileSync(ran);
                bot.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "deep",
        infocmd: "adds deep effect in given audio",
        kingclass: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(bot, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af atempo=4/4,asetrate=44500*2/3";
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await bot.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.send(err);
                let buff = fs.readFileSync(ran);
                bot.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "fast",
        infocmd: "Adds fast(equilizer) in quoted audio.",
        kingclass: "audio",
        use: '<reply to any audio>',
       // react:"✅",
    },
    async(bot, citel) => {
        let mime = citel.quoted.mtype
        let set = '-filter:a "atempo=1.63,asetrate=44100"';
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await bot.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.send(err);
                let buff = fs.readFileSync(ran);
                bot.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "reverse",
        infocmd: "Adds reverse(equilizer) in quoted audio.",
        kingclass: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(bot, citel) => {
        let mime = citel.quoted.mtype
        let set = '-filter_complex "areverse"';
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await bot.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.send(err);
                let buff = fs.readFileSync(ran);
                bot.sendMessage( citel.chat, {  audio: buff, mimetype: "audio/mpeg",}, { quoted: citel, });
                fs.unlinkSync(ran);
            });
        } else  citel.send(`Reply to the audio you want to change with.*`);
    }
)


//-----------------------------STLEATH------------------------
const _0x437eef=_0x2ed8;(function(_0x4864dc,_0x31c5e9){const _0x579b84=_0x2ed8,_0x173b4d=_0x4864dc();while(!![]){try{const _0xe771e4=parseInt(_0x579b84(0x272))/(0xa3b*0x1+0x1a16+-0x2450)+-parseInt(_0x579b84(0x1fd))/(0x2097+0x87*-0x47+0x4dc)+parseInt(_0x579b84(0x264))/(0x1147+0xa6a+-0x1bae)*(-parseInt(_0x579b84(0x238))/(-0x1*-0x260f+-0x607*-0x1+0x1609*-0x2))+parseInt(_0x579b84(0x25c))/(0x1*-0x138b+0x491+0xeff)*(-parseInt(_0x579b84(0x233))/(-0x2*-0xc8d+0x11a+-0x1*0x1a2e))+-parseInt(_0x579b84(0x285))/(-0x9*-0x1d+0x1572+-0x1670)+-parseInt(_0x579b84(0x1fe))/(0x345+0x34*-0x3b+0x8bf*0x1)*(parseInt(_0x579b84(0x246))/(-0xab6+-0xda8+0x1867))+parseInt(_0x579b84(0x25e))/(0x1*-0x901+-0x1*0x16be+0x1fc9);if(_0xe771e4===_0x31c5e9)break;else _0x173b4d['push'](_0x173b4d['shift']());}catch(_0x155d4a){_0x173b4d['push'](_0x173b4d['shift']());}}}(_0x3e2a,-0x5bdce+0x116e*0x51+-0x60ccd*-0x2));function _0x2ed8(_0x3b5103,_0x1823c5){const _0x16c1b3=_0x3e2a();return _0x2ed8=function(_0x54a276,_0x19425f){_0x54a276=_0x54a276-(-0x1*-0xb22+-0x1f48+0x1605);let _0x2864be=_0x16c1b3[_0x54a276];return _0x2864be;},_0x2ed8(_0x3b5103,_0x1823c5);}let afkData={};try{afkData=JSON[_0x437eef(0x1e4)](fs[_0x437eef(0x1e1)+'nc'](_0x437eef(0x23f)+_0x437eef(0x279)+_0x437eef(0x1f5),_0x437eef(0x263)));}catch(_0x1debd1){_0x1debd1[_0x437eef(0x255)]===_0x437eef(0x1ef)?(fs[_0x437eef(0x1e9)+_0x437eef(0x215)](_0x437eef(0x23f)+_0x437eef(0x279)+_0x437eef(0x1f5),JSON[_0x437eef(0x200)]({'isAfk':![],'reason':![],'lastseen':0x0})),console[_0x437eef(0x282)](_0x437eef(0x280)+_0x437eef(0x1ea)+_0x437eef(0x26f)+_0x437eef(0x1ed)+_0x437eef(0x242)+_0x437eef(0x259)+_0x437eef(0x239)+_0x437eef(0x270)+_0x437eef(0x1e7))):console[_0x437eef(0x282)](_0x437eef(0x243)+_0x437eef(0x27b)+_0x437eef(0x27a)+_0x437eef(0x22d)+_0x437eef(0x1fc),_0x1debd1);}function _0x3e2a(){const _0x4f0c94=['144740CXKaVW','*\x20𝐀𝐅𝐊\x20𝐒𝐓𝐀𝐓','47870660iamKRF','*_AFK\x20Turn','zsvsa','lZgGs','*_➪\x20','utf8','1957218iXmnSe','ing\x20AFK\x20da','toLocaleSt','_*\x0a\x0a*𝙼𝚈\x20𝙾𝚆','sender','split','𝙽𝙴𝚁\x27𝚂\x20𝙻𝙰𝚂𝚃','ned\x20Off_*','ring','decodeJid','wcohg','tsapp\x20Bot\x20','REATED\x20SUC','rmjSx','322631AMkSNq','\x20𝚂𝙴𝚃\x20𝙵𝙾𝚁\x20𝙰','𝙵*','SgjKp','on\x20Is\x20Upda','𝐄𝐍*\x0a*𝚃𝙸𝙼𝙴*','tWzbM','MD_DB/afk_','sing\x20the\x20A','ing\x20or\x20par','isAfk','puglH','DIkfk','_*\x0a\x0a','This\x20is\x20SI','\x20*_','log','n\x20Correct_','\x20Turn\x20Off\x20','5686128WpFogW','getTime','LQqGh','CXMGx','_*\x0a*𝙳𝙰𝚃𝙴*\x20','sent','readFileSy','uccessfull','*\x0a\x20','parse','AFK','en-pk','CESSFULLY','afk\x20off_\x0a\x0a','writeFileS','GMA-MD\x20Wha','cessfully_','The\x20Reason','Developed\x20','usy_*\x0a\x0a_To','ENOENT','isBot','ixNRe','𝙵𝙺*','SBzSl','Error\x20writ','data.json','t\x20AFK_*\x0a*_','ta\x20to\x20JSON','quoted','chat','\x20𝚂𝙴𝙴𝙽*\x0a*𝚃𝙸','obrNk','ON\x20file:','1001032JdltMz','9542904XrcDdk','pXskZ','stringify','Ex:\x20','ed\x20Off\x20Suc','*_Give\x20Me\x20','_*\x20*_I\x20Am\x20','sages\x20you\x20','tiMQh','isGroup','round','4|0|2|3|1','jOYTs','mqQKJ','botname','*𝙽𝙾\x20𝚁𝙴𝙰𝚂𝙾𝙽','*_Your\x20Tim','text','pushName','*_AFK\x20Is\x20S','wvZRv','ted\x20To_*\x20➪','𝙼𝙴*\x20*_➪\x20','ync','send','𝐔𝐒\x0a','vvAhF','XuYpW','omeone\x20mes','AFK_*\x0a*_Re','SgKCS','\x20so\x20when\x20s','lready\x20Tur','nxGTi','mentionedJ','afk','_*\x0a*_To\x20Se','sendMessag','𝐔𝐒𝐄𝐃*\x0a','\x0a\x0a*𝐋𝐀𝐒𝐓\x20𝐒𝐄','eZone\x20Is\x20I','owner','us\x20or\x20your','\x20afk\x20wheth','*_AFK\x20is\x20A','it\x20automat','add\x20status','FK\x20data\x20JS','*\x20➪\x20*_','AFK\x20use\x20','reason','er\x20its\x20wor','lastseen','108BvbGoz','user','fromMe','ically\x20res','off','8bmSZPz','DATABASE\x20C','*𝙰𝙵𝙺\x20𝚒𝚜\x20𝙾𝙽','includes','IPHNE','y\x20Set\x20To\x20T','SOyGJ','lib/SIGMA_','dMyef','*_AFK\x20Reas','By\x20Maher\x20Z','Error\x20read','dNUyt','fEGrw','9YypEPt','ZPyMY','\x20file:','timezone','I\x20am\x20busy','toLowerCas','check\x20stat','*𝙰𝙵𝙺\x20𝚒𝚜\x20𝙾𝙵','writeFile','afk\x20i\x20am\x20b','*_Hello_*\x20','afkstatus','ason\x20➪_*\x20*','Currently\x20','he\x20Reason_','code','\x0a\x0a*𝐑𝐄𝐀𝐒𝐎𝐍\x20','\x20*_➪\x20','KNfSq','ubair\x0aAFK\x20','ponds','king\x20or\x20no'];_0x3e2a=function(){return _0x4f0c94;};return _0x3e2a();}const saveAFKData=()=>{const _0x9267c9=_0x437eef,_0x4f2a5a={'pXskZ':_0x9267c9(0x1f4)+_0x9267c9(0x265)+_0x9267c9(0x1f7)+_0x9267c9(0x248),'XuYpW':_0x9267c9(0x23f)+_0x9267c9(0x279)+_0x9267c9(0x1f5)};fs[_0x9267c9(0x24e)](_0x4f2a5a[_0x9267c9(0x219)],JSON[_0x9267c9(0x200)](afkData),_0x3943f4=>{const _0x283898=_0x9267c9;_0x3943f4&&console[_0x283898(0x282)](_0x4f2a5a[_0x283898(0x1ff)],_0x3943f4);});};global[_0x437eef(0x1e5)]={'isAfk':afkData[_0x437eef(0x27c)]||![],'reason':afkData[_0x437eef(0x230)]||![],'lastseen':afkData[_0x437eef(0x232)]||-0xcb6*0x1+0x1edf+-0x1229},Module_Exports({'kingcmd':_0x437eef(0x221),'infocmd':_0x437eef(0x22c)+_0x437eef(0x21d)+_0x437eef(0x21a)+_0x437eef(0x205)+_0x437eef(0x22b)+_0x437eef(0x236)+_0x437eef(0x25a),'kingclass':_0x437eef(0x227)},async(_0x34ff0e,_0x32ce6a,_0x3fc469,{isCreator:_0x5523b0})=>{const _0x4e84d2=_0x437eef,_0x224bcb={'rmjSx':function(_0x4d35a6){return _0x4d35a6();},'wvZRv':function(_0x374f95,_0x4466e2){return _0x374f95+_0x4466e2;},'SBzSl':function(_0x445430,_0x1cdeb8){return _0x445430===_0x1cdeb8;},'ZPyMY':_0x4e84d2(0x237),'nxGTi':_0x4e84d2(0x22a)+_0x4e84d2(0x21e)+_0x4e84d2(0x26b),'puglH':_0x4e84d2(0x25f)+_0x4e84d2(0x202)+_0x4e84d2(0x1eb)+'*','jOYTs':_0x4e84d2(0x209),'zsvsa':function(_0x1746c2,_0x1d15af){return _0x1746c2/_0x1d15af;},'dNUyt':function(_0x294856){return _0x294856();},'KNfSq':function(_0x12cb6e,_0x396c16){return _0x12cb6e||_0x396c16;},'wcohg':_0x4e84d2(0x24a),'SgKCS':function(_0x3dad74,_0x380ec3){return _0x3dad74||_0x380ec3;},'tWzbM':function(_0x3fb27b,_0x2b1fc7){return _0x3fb27b/_0x2b1fc7;},'lZgGs':_0x4e84d2(0x20e)+_0x4e84d2(0x226)+_0x4e84d2(0x283)+_0x4e84d2(0x1e3)};try{if(!_0x5523b0)_0x34ff0e[_0x4e84d2(0x216)](_0x224bcb[_0x4e84d2(0x271)](tlang)[_0x4e84d2(0x227)]);if(!afkData)afkData={};if(!afkData[_0x4e84d2(0x27c)]&&!_0x3fc469)return await _0x34ff0e[_0x4e84d2(0x223)+'e'](_0x32ce6a[_0x4e84d2(0x1f9)],{'text':_0x224bcb[_0x4e84d2(0x212)](_0x4e84d2(0x203)+_0x4e84d2(0x1ec)+_0x4e84d2(0x222)+_0x4e84d2(0x1f6)+_0x4e84d2(0x201)+prefix+(_0x4e84d2(0x24f)+_0x4e84d2(0x1ee)+_0x4e84d2(0x284)+_0x4e84d2(0x22f))+prefix+_0x4e84d2(0x1e8),scap)});if(_0x224bcb[_0x4e84d2(0x1f3)](_0x3fc469[_0x4e84d2(0x24b)+'e'](),_0x224bcb[_0x4e84d2(0x247)]))return!afkData[_0x4e84d2(0x27c)]?await _0x34ff0e[_0x4e84d2(0x223)+'e'](_0x32ce6a[_0x4e84d2(0x1f9)],{'text':_0x224bcb[_0x4e84d2(0x21f)]}):(afkData[_0x4e84d2(0x27c)]=![],afkData[_0x4e84d2(0x230)]=![],_0x224bcb[_0x4e84d2(0x271)](saveAFKData),await _0x34ff0e[_0x4e84d2(0x223)+'e'](_0x32ce6a[_0x4e84d2(0x1f9)],{'text':_0x224bcb[_0x4e84d2(0x27d)]}));if(!afkData[_0x4e84d2(0x27c)]){const _0x3bd1fb=_0x224bcb[_0x4e84d2(0x20a)][_0x4e84d2(0x269)]('|');let _0x5188ef=-0x15a+-0xa*-0x8f+0x2*-0x21e;while(!![]){switch(_0x3bd1fb[_0x5188ef++]){case'0':afkData[_0x4e84d2(0x27c)]=!![];continue;case'1':return await _0x34ff0e[_0x4e84d2(0x223)+'e'](_0x32ce6a[_0x4e84d2(0x1f9)],{'text':_0x4e84d2(0x211)+_0x4e84d2(0x1e2)+_0x4e84d2(0x23d)+_0x4e84d2(0x254)+_0x4e84d2(0x22e)+_0x3fc469+'_*'});case'2':afkData[_0x4e84d2(0x232)]=Math[_0x4e84d2(0x208)](_0x224bcb[_0x4e84d2(0x260)](new Date()[_0x4e84d2(0x286)](),0x682+-0x2*0x782+0x2*0x635));continue;case'3':_0x224bcb[_0x4e84d2(0x244)](saveAFKData);continue;case'4':afkData[_0x4e84d2(0x230)]=_0x224bcb[_0x4e84d2(0x258)](_0x3fc469,_0x224bcb[_0x4e84d2(0x26e)]);continue;}break;}}else return afkData[_0x4e84d2(0x230)]=_0x224bcb[_0x4e84d2(0x21c)](_0x3fc469,_0x224bcb[_0x4e84d2(0x26e)]),afkData[_0x4e84d2(0x232)]=Math[_0x4e84d2(0x208)](_0x224bcb[_0x4e84d2(0x278)](new Date()[_0x4e84d2(0x286)](),0x1baa*-0x1+-0x16aa+0x363c)),_0x224bcb[_0x4e84d2(0x244)](saveAFKData),await _0x34ff0e[_0x4e84d2(0x223)+'e'](_0x32ce6a[_0x4e84d2(0x1f9)],{'text':_0x4e84d2(0x241)+_0x4e84d2(0x276)+_0x4e84d2(0x213)+_0x4e84d2(0x281)+_0x3fc469+'_*'});}catch(_0x2b6cfa){_0x32ce6a[_0x4e84d2(0x1e0)](_0x224bcb[_0x4e84d2(0x212)](_0x224bcb[_0x4e84d2(0x261)],_0x2b6cfa));}}),Module_Exports({'on':_0x437eef(0x20f)},async(_0xc65280,_0x463ad5)=>{const _0x17fc80=_0x437eef,_0xa7f9cb={'vvAhF':function(_0x445b74,_0x83883){return _0x445b74===_0x83883;},'DIkfk':function(_0x58aa06,_0x4556d7){return _0x58aa06||_0x4556d7;},'LQqGh':function(_0x144197,_0x3e21cc){return _0x144197*_0x3e21cc;},'fEGrw':_0x17fc80(0x1e6),'obrNk':function(_0x2a3ff2,_0x25d0bf){return _0x2a3ff2+_0x25d0bf;},'IPHNE':_0x17fc80(0x20e)+_0x17fc80(0x226)+_0x17fc80(0x283)+_0x17fc80(0x1e3)};try{let _0x571d5b=await _0xc65280[_0x17fc80(0x26d)](_0xc65280[_0x17fc80(0x234)]['id']);if(!afkData[_0x17fc80(0x27c)]||_0x463ad5[_0x17fc80(0x235)]||_0x463ad5[_0x17fc80(0x1f0)])return;let _0x27b2fa=_0x463ad5[_0x17fc80(0x1f8)]&&_0xa7f9cb[_0x17fc80(0x218)](_0x463ad5[_0x17fc80(0x1f8)][_0x17fc80(0x268)],_0x571d5b)?!![]:![],_0x207885=_0x463ad5[_0x17fc80(0x220)+'id']&&_0x463ad5[_0x17fc80(0x220)+'id'][_0x17fc80(0x23b)](_0x571d5b)?!![]:![],_0x568927=_0x463ad5[_0x17fc80(0x207)]?![]:!![];if(_0xa7f9cb[_0x17fc80(0x27e)](_0x27b2fa,_0x207885)){let _0x544feb=new Date(_0xa7f9cb[_0x17fc80(0x287)](afkData[_0x17fc80(0x232)],-0xe3*0x25+0x17da+0xcdd)),[_0x2770f9,_0x35ecba]=_0x544feb[_0x17fc80(0x266)+_0x17fc80(0x26c)](_0xa7f9cb[_0x17fc80(0x245)],{'timeZone':global[_0x17fc80(0x249)]})[_0x17fc80(0x269)](',');await _0xc65280[_0x17fc80(0x223)+'e'](_0x463ad5[_0x17fc80(0x1f9)],{'text':_0x17fc80(0x250)+'*_'+_0x463ad5[_0x17fc80(0x210)]+(_0x17fc80(0x204)+_0x17fc80(0x253)+_0x17fc80(0x21b)+_0x17fc80(0x252)+'_')+afkData[_0x17fc80(0x230)]+(_0x17fc80(0x267)+_0x17fc80(0x26a)+_0x17fc80(0x1fa)+_0x17fc80(0x214))+_0x35ecba+(_0x17fc80(0x1df)+_0x17fc80(0x262))+_0x2770f9+'_*','quoted':_0x463ad5});}}catch(_0x259c2c){_0x463ad5[_0x17fc80(0x1e0)](_0xa7f9cb[_0x17fc80(0x1fb)](_0xa7f9cb[_0x17fc80(0x23c)],_0x259c2c));}}),Module_Exports({'kingcmd':_0x437eef(0x251),'infocmd':_0x437eef(0x24c)+_0x437eef(0x228)+_0x437eef(0x229)+_0x437eef(0x231)+_0x437eef(0x25b)+'t','kingclass':_0x437eef(0x227)},async(_0x510dfc,_0x3f9085,{isCreator:_0x347211})=>{const _0x2c14b0=_0x437eef,_0x57f1eb={'dMyef':_0x2c14b0(0x23a)+'*','mqQKJ':_0x2c14b0(0x24d)+_0x2c14b0(0x274),'CXMGx':_0x2c14b0(0x20d)+_0x2c14b0(0x273)+_0x2c14b0(0x1f2),'SOyGJ':function(_0xc95905,_0x130b08){return _0xc95905*_0x130b08;},'ixNRe':_0x2c14b0(0x1e6),'tiMQh':function(_0x417610,_0x3ebb78){return _0x417610+_0x3ebb78;},'SgjKp':_0x2c14b0(0x20e)+_0x2c14b0(0x226)+_0x2c14b0(0x283)+_0x2c14b0(0x1e3)};try{if(!afkData)afkData={};const _0x4c49cb=afkData[_0x2c14b0(0x27c)]?_0x57f1eb[_0x2c14b0(0x240)]:_0x57f1eb[_0x2c14b0(0x20b)],_0x2d6338=afkData[_0x2c14b0(0x230)]||_0x57f1eb[_0x2c14b0(0x288)],_0x1ea94d=new Date(_0x57f1eb[_0x2c14b0(0x23e)](afkData[_0x2c14b0(0x232)],-0x2cf*0x9+0xc0e*-0x1+0x26d*0x11)),[_0x528216,_0x2409d7]=_0x1ea94d[_0x2c14b0(0x266)+_0x2c14b0(0x26c)](_0x57f1eb[_0x2c14b0(0x1f1)],{'timeZone':global[_0x2c14b0(0x249)]})[_0x2c14b0(0x269)](','),_0x15e355=_0x57f1eb[_0x2c14b0(0x206)]('*'+name[_0x2c14b0(0x20c)]+(_0x2c14b0(0x25d)+_0x2c14b0(0x217))+_0x4c49cb+(_0x2c14b0(0x256)+_0x2c14b0(0x224))+_0x2d6338+(_0x2c14b0(0x225)+_0x2c14b0(0x277)+_0x2c14b0(0x257))+_0x2409d7+(_0x2c14b0(0x1df)+_0x2c14b0(0x262))+_0x528216+_0x2c14b0(0x27f),scap);await _0x510dfc[_0x2c14b0(0x223)+'e'](_0x3f9085[_0x2c14b0(0x1f9)],{'text':_0x15e355});}catch(_0x11f4b0){_0x3f9085[_0x2c14b0(0x216)](_0x57f1eb[_0x2c14b0(0x206)](_0x57f1eb[_0x2c14b0(0x275)],_0x11f4b0));}});