const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//=========================[DEVELOPER'S VARIABLES, DON'T TOUCH]===================
global.port  = process.env.PORT  || 5000  ;
global.Gname = process.env.GNAME || "",
global.waUrl = process.env.WAURL || "",
global.audio = '' ; 
global.video = '' ;
global.lol   = 'GataDios'
global.cali  = `lykoUzNh`
global.devs  = "923466319114";
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email     = 'zubi@maher-zubair.tech' ; 
global.github    = 'https://github.com/Maher-Zubair/SIGMA-MD' ;
global.location  = 'Lahore, Pakistan' ;
global.website   = 'httpS://maher-zubair.tech' ; 
//=================================================================================


//===========================[COMPULSORY VARIABLES]================================
global.owner = process.env.OWNER_NUMBER  || '923466319114' ;  // ADD YOUR NUMBER WITHOUT +
global.mongodb = process.env.MONGODB_URI || "" ;            // PUT MONGODB KEY HERE, WITHOUT MONGODB YOUR BOT WILL NOT RUN
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi' // ADD CORRECT TIMEZONE OR LEAVE IT SAME , OTHERWISE YOU GET ERROS
//=================================================================================


//======================[YOUR CHOICE, CHANGE OR LEAVE IT SAME]=====================
global.sudo  =  process.env.SUDO || "923466319114" ;          // DON'T REMOVE
global.mztit = process.env.MZTIT ||"sɪɢᴍᴀ-ᴍᴅ",               // ADD YOUR TITLE
global.gurl  = 'https://www.youtube.com/@InnoxentTech?sub_confirmation=1' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/03e49e6e2057568db8926.jpg' ;
//=================================================================================


module.exports = {

  //==============================[COMPULSORY]=====================================
  sessionName: process.env.SESSION_ID || '',              // PUT YOUR SESSION ID
  botname: process.env.BOT_NAME       || 'sɪɢᴍᴀ-ᴍᴅ',         // ADD YOUR BOT NAME
  ownername:  process.env.OWNER_NAME  || `ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ`, // ADD YOUR NAME
  HANDLERS: process.env.PREFIX        || '.',              // ADD YOUR BOT PREFIX
  WORKTYPE: process.env.WORKTYPE      || 'public',      // IF PRIVATE ONLY YOU CAN USE YOUR BOT, IF PUBLIC EVERYONE CAN USE YOUR BOT
  //================================================================================


  //==============================[WHAT'SAPP FEATURES]==============================
  author:  process.env.PACK_AUTHER  || 'ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ',      // ADD YOUR STICKER AUTHOR NAME
  status_view : process.env.AUTO_STATUS_VIEW   || 'false',    // IF IT TRUE IT AUTOMATICALLY VIEWS YOUR STATUSES
  status_saver : process.env.AUTO_STATUS_SAVER || 'false', // IF TRUE IT AUTOMATICALLY DOWNLOADS YOUR STATUSES AND SEND IN YOUR INBOX
  packname:  process.env.PACK_NAME  || "sɪɢᴍᴀ-ᴍᴅ" ,          // ADD YOUR STICKER PACKNAME
  autoreaction: process.env.AUTO_REACTION || 'false',    // IF TRUE IT WILL REACT TO YOUR MESSAGES
  readmessage: process.env.READ_MESSAGE   || 'false',      // IF TRUE IT WILL SEEN ALL YOUR MESSAGES
  disablepm: process.env.DISABLE_PM || "false",        // IF TRUE IT WILL DISABLE THE BOT IN YOUR PM
  //=================================================================================


  //===========================[YOUR CHOICE, CHANGE OT LEAVE IT SAME]================
  warncount : process.env.WARN_COUNT || 2,                 // WARN LIMITS
  MsgsInLog:process.env.MSGS_IN_LOG  || 'false',            // IF TRUE IT WILL SHOW YOUR MESSAGES IN LOGS
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS    ||'false',   // IF TRUE IT WILL SHOW YOUR PM MESSAGES IN LOGS
  antifake :   process.env.FAKE_COUNTRY_CODE || '212',     // ANTIFAKE NUMBER CAN'T JOIN GROUPS
  levelupmessage: process.env.LEVEL_UP_MESSAGE ||'true', // SENDS A LEVEL UP MESSAGE WHEN SOMEONE'S RANK INCREASE
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com,youtube.com,instagram.com,tiktok.com,vt.tiktok.com,wa.me,facebook.com', // ANTILINKS VALUES, IT WILL TAKE ACTION WHO SEND THESE LINKS
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'false' ,     // IF TRUE IT WILL SEND AN ALERT MESSAGE WHEN SOMEONE PROMOTED/DEMOTED IN GROUPS
  antibadwords_values: process.env.ANTI_BAD_WORDS || 'Fuck,porn,sex,xxx,fucker,asshole,fuck you,fuck off',   // IT WILL TAKES ACTIONS WHO SENDS THESE BAD WORDS
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,    // ADD YOUR OPEN AI KEY IF YOU HAVE
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY   || "KL5fcyjz7sLghYhr4zMqgdNz",    // ADD YOUR REMOVE BG KEY IF YOU HAVE
  //=================================================================================


  //=============================[DEVELOPER'S VARIABLES DON'T TOUCH]=================
  afk:  process.env.AFK   || false,
  BRANCH: process.env.BRANCH   || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  caption :process.env.CAPTION || "\t⤹★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★⤸ sɪɢᴍᴀ-ᴍᴅ ",
  LANG: process.env.THEME || 'SIGMA_MD',
  VERSION: process.env.VERSION || '𝚅.𝟷.𝟺.𝟿'
  //=================================================================================
};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
