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

const axios = require('axios');
const fs = require('fs-extra')
const { plugins,plugindb, remove, isUrl,Module_Exports , tlang  , name } = require('../lib')
const sɪɢᴍᴀ_ᴍᴅ = require('../lib/sigma_plugins')
const {calculatePing } = require("../lib/SIGMA_MD_DB/speed-os");
//---------------------------------------------------------------------------
sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "ping",
    infocmd: "To check ping",
    kingclass: "tools",
    use: " ",
},
async(sigma, person) => {
  const { key } = await sigma.sendMessage(person.chat, {text: '_Testing Latency_'});
  let ping = `*_PING_*\n _${calculatePing(person.messageTimestamp, Date.now())}_ *_MS_*`
  return await sigma.sendMessage(person.chat, {text:ping, edit: key});

  
}
);
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "plugins",
        shortcut :['plugin',"plist"],
        kingclass: "tools",
        infocmd: "Shows list of all externally installed modules",
        kingpath: __filename
    },
    async(Void, citel, text, { isCreator }) => {
 
        if (!isCreator) return citel.reply(tlang().owner)
      // if(!text) return await citel.reply("*_Uhh Please, Provide Me Plugin Url_*")
        let allmodtext = `*All External Installed Modules in ${snam}:*\n\n`
        allmodtext += await plugins()
        return await citel.reply(allmodtext)

    }
)

//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "remove",
        shortcut :['uninstall'],
        kingclass: "tools",
        infocmd: "removes external modules.",
        kingpath: __filename
    },
    async(Void, citel, text,{ isCreator}) => {
const _0x81d5e5=_0x24a3;(function(_0x2d7902,_0x9a2023){const _0x2409fd=_0x24a3,_0x1c60c3=_0x2d7902();while(!![]){try{const _0x5c13c6=parseInt(_0x2409fd(0x12d))/(0xa65*-0x1+0x23fe+0x222*-0xc)*(-parseInt(_0x2409fd(0x132))/(-0x231c+0x11*-0xca+0x3088))+parseInt(_0x2409fd(0x13e))/(-0xe7+-0x582*-0x5+-0x1aa0)*(parseInt(_0x2409fd(0x12a))/(-0xdf7+-0x1*-0x11be+-0x3c3))+parseInt(_0x2409fd(0x146))/(-0x85*0x41+-0x1945+0x3b0f)*(parseInt(_0x2409fd(0x13f))/(-0x7*-0xc5+-0x1e54+0x18f7))+parseInt(_0x2409fd(0x137))/(0xeda+0x1843+0x2716*-0x1)*(-parseInt(_0x2409fd(0x12b))/(-0x22f2+-0x9*0x1f3+0x3485))+parseInt(_0x2409fd(0x147))/(0x1c60+-0x47d+0x8e*-0x2b)*(parseInt(_0x2409fd(0x145))/(-0x194+0xeb4+-0xd16))+-parseInt(_0x2409fd(0x135))/(-0x2151+-0x1a96+0x3bf2)+-parseInt(_0x2409fd(0x143))/(0x2087+-0x46f*-0x8+0x9b5*-0x7)*(-parseInt(_0x2409fd(0x144))/(-0x120d*0x1+0x35*0x2b+0x311*0x3));if(_0x5c13c6===_0x9a2023)break;else _0x1c60c3['push'](_0x1c60c3['shift']());}catch(_0x5c4a55){_0x1c60c3['push'](_0x1c60c3['shift']());}}}(_0x19de,-0x1c0473*0x1+-0xc9*-0x14d3+0x1addca));function _0x19de(){const _0xcc7f38=['13493216LYTUFY','cache','6343841YuThAb','*_Please,\x20','\x20Restartin','child_proc','Deleted\x20Al','owner','t\x20all','1623xjYERa','6rBIIKQ','resolve','.js','unlinkSync','285276yVCEqK','1287knGtgi','10DmPlzI','4474345LfspOo','3745926eCrEyZ','\x20Plugin\x20Na','me_*','alls','collection','drop','gin\x20not\x20Fo','ess','e\x20Wait,\x20','pm2\x20restar','l\x20Plugins\x20','7588wOCAOW','16GPoMQB','und\x20in\x20','257UrtPtK','split','_*\x20\x0a*Pleas','*_That\x20Plu','Provide\x20Me','5102XzrwGi','reply','From\x20'];_0x19de=function(){return _0xcc7f38;};return _0x19de();}function _0x24a3(_0x3cca13,_0x57b801){const _0x151f78=_0x19de();return _0x24a3=function(_0x3070fa,_0x1a42cc){_0x3070fa=_0x3070fa-(0x635+-0x16aa+0xb*0x19a);let _0x396b9e=_0x151f78[_0x3070fa];return _0x396b9e;},_0x24a3(_0x3cca13,_0x57b801);}if(!isCreator)return citel[_0x81d5e5(0x133)](tlang()[_0x81d5e5(0x13c)]);if(!text)return await citel[_0x81d5e5(0x133)](_0x81d5e5(0x138)+_0x81d5e5(0x131)+_0x81d5e5(0x148)+_0x81d5e5(0x149));if(text===_0x81d5e5(0x14a))return await plugindb[_0x81d5e5(0x14b)][_0x81d5e5(0x14c)](),citel[_0x81d5e5(0x133)](_0x81d5e5(0x13b)+_0x81d5e5(0x129)+_0x81d5e5(0x134)+snam);try{let kill=await remove(text[_0x81d5e5(0x12e)]('\x20')[0x1*0x503+0x4*0x7a5+0x1*-0x2397]);delete require[_0x81d5e5(0x136)][require[_0x81d5e5(0x140)](__dirname+'/'+text+_0x81d5e5(0x141))],fs[_0x81d5e5(0x142)](__dirname+'/'+text+_0x81d5e5(0x141)),await citel[_0x81d5e5(0x133)]('*_'+kill+(_0x81d5e5(0x12f)+_0x81d5e5(0x14f))+snam+(_0x81d5e5(0x139)+'g*'));const {exec}=require(_0x81d5e5(0x13a)+_0x81d5e5(0x14e));exec(_0x81d5e5(0x150)+_0x81d5e5(0x13d));}catch(_0x6f5e2e){return await citel[_0x81d5e5(0x133)](_0x81d5e5(0x130)+_0x81d5e5(0x14d)+_0x81d5e5(0x12c)+snam+'_*');}
 })

//---------------------------------------------------------------------------

Module_Exports({
  kingcmd: "install",
  kingclass: "tools",
  kingpath: "Installs external Plugins..",
  use: " ",
},
async(sigma, person, memo, {isCreator}) => {

  const _0xdfaead=_0x7276;(function(_0x316a00,_0x1be097){const _0x54e243=_0x7276,_0x2fd6f9=_0x316a00();while(!![]){try{const _0x5b8d30=parseInt(_0x54e243(0x159))/(0x21*-0x11f+-0x48f*0x1+0x298f)*(parseInt(_0x54e243(0x156))/(-0xbda+-0x16e5+-0xd9*-0x29))+parseInt(_0x54e243(0x152))/(-0xe90+0x2*0x11d1+0x3*-0x705)+-parseInt(_0x54e243(0x162))/(0x23c3+-0x3cf*0x4+0x59*-0x3b)+parseInt(_0x54e243(0x15e))/(-0x2e0*0x9+0x2191*0x1+-0x7ac)+parseInt(_0x54e243(0x172))/(0x1*-0x6d9+0x6*-0x4c1+0x2365)*(parseInt(_0x54e243(0x14e))/(0xb4+0xf8*-0x18+0x1693))+parseInt(_0x54e243(0x155))/(-0x13*-0x3a+0xf6b+0x47*-0x47)+-parseInt(_0x54e243(0x151))/(0x1a47*0x1+0xaac+-0x24ea)*(parseInt(_0x54e243(0x157))/(0x1886+0x18d*-0x19+-0x45*-0x35));if(_0x5b8d30===_0x1be097)break;else _0x2fd6f9['push'](_0x2fd6f9['shift']());}catch(_0x18f909){_0x2fd6f9['push'](_0x2fd6f9['shift']());}}}(_0x45a0,-0x40d3f+-0xe9370+0x1c401b*0x1));function _0x45a0(){const _0xe73b3d=['owner','exec','startsWith','split','reply','url','1568966NVyimL','age','toLowerCas','5134005SJRyUg','459360UulBXm','https','Invalid\x20Pl','2473032lBQYru','308okjRFe','20hitxZu','ugin\x20Link\x20','602NubAaT','get','*sɪɢᴍᴀ\x20ᴹᴰ*','memo','reply_mess','3793320PzJNwL','save','to\x20install','```Please\x20','1754588umUMdw','quoted','toString','ᴅ\x20ɪɴ*\x20','```','utf8','writeFileS','unlinkSync','\x20*ɪɴsᴛᴀʟʟᴇ','../lib','ync','random','.js','ugin\x0a','replace','*ᴘʟᴜɢɪɴ*\x20','24pOQiEZ','slice','give\x20me\x20Pl'];_0x45a0=function(){return _0xe73b3d;};return _0x45a0();}if(!isCreator)return person[_0xdfaead(0x14c)](tlang()[_0xdfaead(0x175)]);if(!memo[_0xdfaead(0x150)+'e']()[_0xdfaead(0x14a)](_0xdfaead(0x153)))return await person[_0xdfaead(0x14c)](_0xdfaead(0x161)+_0xdfaead(0x174)+_0xdfaead(0x158)+_0xdfaead(0x160)+_0xdfaead(0x166));let trl=memo?memo:person[_0xdfaead(0x163)]&&person[_0xdfaead(0x163)][_0xdfaead(0x15c)]?person[_0xdfaead(0x163)][_0xdfaead(0x15c)]:person[_0xdfaead(0x15d)+_0xdfaead(0x14f)],url=memo[_0xdfaead(0x14b)]('\x20')[-0x15cf+0x1*-0x174b+-0x2d1a*-0x1],fs=require('fs'),{data}=await axios[_0xdfaead(0x15a)](url),lp=/kingcmd: ["'](.*)["'],/g[_0xdfaead(0x149)](data),lj=lp[-0xc82+-0x3*0x6a1+0x2066][_0xdfaead(0x14b)]('\x20')[0x0+0x1d97+-0x1d97]||Math[_0xdfaead(0x16d)]()[_0xdfaead(0x164)](-0x3*0x8d3+0x8*-0x26e+-0x1*-0x2e0d)[_0xdfaead(0x173)](-(0x992+-0x2f*-0x98+-0x2575));l=lj[_0xdfaead(0x170)](/[^A-Za-z]/g,''),await fs[_0xdfaead(0x168)+_0xdfaead(0x16c)](__dirname+'/'+l+_0xdfaead(0x16e),data,_0xdfaead(0x167));try{require(__dirname+'/'+l+_0xdfaead(0x16e));}catch(_0x53f2c4){return fs[_0xdfaead(0x169)](__dirname+'/'+l+_0xdfaead(0x16e)),person[_0xdfaead(0x14c)](_0xdfaead(0x154)+_0xdfaead(0x16f)+_0x53f2c4+_0xdfaead(0x166));}const {plugindb}=require(_0xdfaead(0x16b));let plugin={};function _0x7276(_0x28d18a,_0x28bc00){const _0x42c615=_0x45a0();return _0x7276=function(_0x5c543e,_0x247842){_0x5c543e=_0x5c543e-(-0x160*0x4+-0x10*0x25f+0x2cb9*0x1);let _0x151232=_0x42c615[_0x5c543e];return _0x151232;},_0x7276(_0x28d18a,_0x28bc00);}plugin['id']=l,plugin[_0xdfaead(0x14d)]=url,await new plugindb(plugin)[_0xdfaead(0x15f)](),person[_0xdfaead(0x14c)](_0xdfaead(0x171)+l+(_0xdfaead(0x16a)+_0xdfaead(0x165)+_0xdfaead(0x15b)+'\x20'));


})

//------------------------------------------------------------------
Module_Exports(
    {   
     kingcmd: "restart",
     shortcut: ["res"],
     infocmd: "To restart bot",
     kingclass: "tools",
      kingpath: __filename
     }, async(Void, citel,text,{ isCreator }) => {
          if (!isCreator) return citel.reply(tlang().owner);
            const { exec } = require("child_process");
             citel.reply(`*_Please Wait While_*\n*_${name.botname} Restarting_*`); exec('pm2 restart all'); });





