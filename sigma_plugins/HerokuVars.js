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




const Config = require('../Setting')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,Module_Exports,Function } = require("../lib");
const axios = require('axios');
const appName = Config.HEROKU_APP_NAME;
const authToken = Config.HEROKU_API_KEY;
const fetch = require('node-fetch');

if(Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY ){

//=============================================================================================================================
Function({
  kingcmd: "reaction",
  infocmd: "to Make Bot Auto react on your messages",
  kingclass: "general",
},
async(Void, citel , text,{ isCreator }) => {
 if (!isCreator) return citel.sent(tlang().owner);
if (text.split(" ")[0] == "on" || text.split(" ")[0] == "enable") {
const headers = {
'Accept': 'application/vnd.heroku+json; version=3',
'Authorization': `Bearer ${authToken}`,
'Content-Type': 'application/json'
};
const varName = 'AUTO_REACTION';
const newVarValue = 'true';      
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
  method: 'PATCH',
  headers,
  body: JSON.stringify({ [varName]: newVarValue })
}) 
.then(response => {
      if (response.ok) { return response.json(); } 
      else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
})
.then(response => { if (response.ok) return citel.reply(`*_Auto Reaction is Enabled SuccessFully_*`);  })
.catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") });
} else if (text.split(" ")[0] === "off" || text.split(" ")[0] === "disable") {
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`,
  'Content-Type': 'application/json'
};
const varName = 'AUTO_REACTION';
const newVarValue = 'false';      
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
  method: 'PATCH',
  headers,
  body: JSON.stringify({ [varName]: newVarValue })
}) 
  .then(response => {
            if (response.ok) { return response.json(); } 
            else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
  })
  .then(response => { if (response.ok) return citel.reply(`*_Auto Reaction is Disbaled SuccessFully_*`);  })
  .catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") });  
} else if (text.split(" ")[0] === "all") {
  const headers = {
      'Accept': 'application/vnd.heroku+json; version=3',
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    };
    const varName = 'AUTO_REACTION';
    const newVarValue = 'all';      
    fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ [varName]: newVarValue })
    }) 
      .then(response => {
                if (response.ok) { return response.json(); } 
                else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
      })
      .then(response => { if (response.ok) return citel.reply(`*_Auto Reaction is Set On All Messages_*`);  })
      .catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") }); 
} else {
const status = Config.autoreaction === "false" ? 'Disabled' : 'Enabled';
  return await citel.send(`*_Auto Reaction is Currently ${status}_*\n
*_#1  ➪  ${prefix}reaction on_*
*_#2  ➪  ${prefix}reaction all_*
*_#3  ➪  ${prefix}reaction off_*
`);
} 
  
}
)
//=============================================================================================================================
Function({
  kingcmd: "theme",
  infocmd: "set bot theme",
  kingclass: "general",
},
async(Void, citel , text, { isCreator }) => {
  if (!isCreator) return citel.sent(tlang().owner);
  if (!text) return citel.sent(`*_Provide Me New Theme To Update. Ex: ${prefix}theme GOJO_*\n\n*_All Themes Lists_*
_SHELBY_
_JOKER_
_PATRICK_
_GOJO_
_SIGMA_MD_
_AVENGERS_
_BTS_
_ANIME_
_MOMOLAND_
_ADAM_
_AYANOKOJI_
_EDITH_
_FRIDAY_
_GENOS_
_GIDEON_
_GOKU_
_LUFFY_
_NARUTO_
_NEZUKO_
_PARKER_`)

  const newtheme = text.trim();

  const alltheme = ['GOJO','SHELBY','JOKER','PATRICK','SIGMA_MD','AVENGERS','BTS','ANIME','MOMOLAND','ADAM','AYANOKOJI','EDITH','FRIDAY','GENOS','GIDEON','GOKU','LUFFY','NARUTO','NEZUKO','PARKER','MZ'];

  if (!alltheme.includes(newtheme)) {
    return citel.reply(`*_Please Provide A Valid Theme_*`);
  }
  const headers = {
    'Accept': 'application/vnd.heroku+json; version=3',
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json'
  };

  const varName = 'THEME';
  const newVarValue = newtheme;

  const response = await fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ [varName]: newVarValue })
  });

      if (response.ok) {
        return citel.reply(`*_Bot Theme SuccessFully Updated To 『 ${newtheme} 』_*`);
      } else {
        return citel.reply("```Failed to update Bot Theme```");
      }
}
)
//=============================================================================================================================
Function({
  kingcmd: "setprefix",
  shortcut:["sprefix"],
  infocmd: "set bot prefix",
  kingclass: "general",
},
async(Void, citel , text, { isCreator }) => {
  if (!isCreator) return citel.sent(tlang().owner);
  if (!text) return citel.sent(`*_Provide Me New Prefix To Update. Ex: ${prefix}setprefix ,_*`)

  const newPrefix = text.trim();

  // Add a list of allowed prefixes
  const allowedPrefixes = ['null','@','#','_','&','-','+','(',')','/','*',"'",'"',':',';','!','?',',','.','~','`','|','•','√','π','÷','×','§','∆','£','¢','€','¥','^','°','=','{','}','%','©','®','™','✓','[',']'];

  if (!allowedPrefixes.includes(newPrefix)) {
    return citel.reply(`*_Please Provide A Valid Prefix_*`);
  }

  const headers = {
    'Accept': 'application/vnd.heroku+json; version=3',
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json'
  };

  const varName = 'PREFIX';
  const newVarValue = newPrefix;

  const response = await fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
    method: 'GET',
    headers
  });

  if (response.ok) {
    const data = await response.json();

    if (data.hasOwnProperty(varName)) {
      const updatedConfig = { ...data };
      updatedConfig[varName] = newVarValue;

      const updateResponse = await fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(updatedConfig)
      });

      if (updateResponse.ok) {
        return citel.reply(`*_Bot Prefix SuccessFully Updated To 『 ${newPrefix} 』_*`);
      } else {
        return citel.reply("```Failed to update Bot Prefix```");
      }
    } else {
      return citel.reply('```Variable not found in app```');
    }
  } else {
    return citel.reply(`Failed to fetch app variables. Status: ${response.status}`);
  }
}
)

//=============================================================================================================================
Function({
  kingcmd: "stsview",
  shortcut:["sview","statusview"],
  infocmd: "to Maker Bot Auto Save Your Statuses",
  kingclass: "whatsapp",
},
async(Void, citel , text,{ isCreator }) => {
 if (!isCreator) return citel.sent(tlang().owner);
if (text.split(" ")[0] == "on" || text.split(" ")[0] == "enable") {
const headers = {
'Accept': 'application/vnd.heroku+json; version=3',
'Authorization': `Bearer ${authToken}`,
'Content-Type': 'application/json'
};
const varName = 'AUTO_STATUS_VIEW';
const newVarValue = 'true'; 
//if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*_Ex : ${prefix}setvar AUTO_READ_STATUS:true_*`);       
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
method: 'GET',
headers 
}) 
.then(response => {
      if (response.ok) { return response.json(); } 
      else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
})
.then(data => {
  if (data.hasOwnProperty(varName)) 
  {
          const updatedConfig = { ...data };
          updatedConfig[varName] = newVarValue;
          return fetch(`https://api.heroku.com/apps/${appName}/config-vars`, 
                  {
                  method: 'PATCH',
                  headers,
                  body: JSON.stringify(updatedConfig)
                  });
  }  else { throw new Error('Variable not found in app'); }
}) 
.then(response => { if (response.ok) return citel.reply(`*_Auto Status_View is Enabled SuccessFully_*`);  })
.catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") });
} else if (text.split(" ")[0] === "off" || text.split(" ")[0] === "disable") {
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`,
  'Content-Type': 'application/json'
};
const varName = 'AUTO_STATUS_VIEW';
const newVarValue = 'false';      
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
  method: 'GET',
  headers 
}) 
  .then(response => {
            if (response.ok) { return response.json(); } 
            else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
  })
  .then(data => {
        if (data.hasOwnProperty(varName)) 
        {
                const updatedConfig = { ...data };
                updatedConfig[varName] = newVarValue;
                return fetch(`https://api.heroku.com/apps/${appName}/config-vars`, 
                        {
                        method: 'PATCH',
                        headers,
                        body: JSON.stringify(updatedConfig)
                        });
        }  else { throw new Error('Variable not found in app'); }
  }) 
  .then(response => { if (response.ok) return citel.reply(`*_Auto Status_View is Disbaled SuccessFully_*`);  })
  .catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") });  
} else {
const status = Config.status_view === "false" ? 'Disabled' : 'Enabled';
  return await citel.send(`*_Auto Status_View is Currently ${status}_*\n
*_#1  ➪  ${prefix}stsview on_*
*_#2  ➪  ${prefix}stsview off_*
`);
} 
  
}
)

//=============================================================================================================================
Function({
  kingcmd: "stssave",
  shortcut:["ssave","statussaver"],
  infocmd: "to Maker Bot Auto Save Your Statuses",
  kingclass: "whatsapp",
},
async(Void, citel , text,{ isCreator }) => {
 if (!isCreator) return citel.sent(tlang().owner);
if (text.split(" ")[0] == "on" || text.split(" ")[0] == "enable") {
const headers = {
'Accept': 'application/vnd.heroku+json; version=3',
'Authorization': `Bearer ${authToken}`,
'Content-Type': 'application/json'
};
const varName = 'AUTO_STATUS_SAVER';
const newVarValue = 'true'; 
//if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*_Ex : ${prefix}setvar AUTO_READ_STATUS:true_*`);       
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
method: 'GET',
headers 
}) 
.then(response => {
      if (response.ok) { return response.json(); } 
      else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
})
.then(data => {
  if (data.hasOwnProperty(varName)) 
  {
          const updatedConfig = { ...data };
          updatedConfig[varName] = newVarValue;
          return fetch(`https://api.heroku.com/apps/${appName}/config-vars`, 
                  {
                  method: 'PATCH',
                  headers,
                  body: JSON.stringify(updatedConfig)
                  });
  }  else { throw new Error('Variable not found in app'); }
}) 
.then(response => { if (response.ok) return citel.reply(`*_Auto Status_Saver is Enabled SuccessFully_*`);  })
.catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") });
} else if (text.split(" ")[0] === "off" || text.split(" ")[0] === "disable") {
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`,
  'Content-Type': 'application/json'
};
const varName = 'AUTO_STATUS_SAVER';
const newVarValue = 'false';      
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
  method: 'GET',
  headers 
}) 
  .then(response => {
            if (response.ok) { return response.json(); } 
            else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
  })
  .then(data => {
        if (data.hasOwnProperty(varName)) 
        {
                const updatedConfig = { ...data };
                updatedConfig[varName] = newVarValue;
                return fetch(`https://api.heroku.com/apps/${appName}/config-vars`, 
                        {
                        method: 'PATCH',
                        headers,
                        body: JSON.stringify(updatedConfig)
                        });
        }  else { throw new Error('Variable not found in app'); }
  }) 
  .then(response => { if (response.ok) return citel.reply(`*_Auto Status_Saver is Disbaled SuccessFully_*`);  })
  .catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") });  
} else {
const status = Config.status_saver === "false" ? 'Disabled' : 'Enabled';
  return await citel.send(`*_Auto Status_Saver is Currently ${status}_*\n
*_#1  ➪  ${prefix}stssaver on_*
*_#2  ➪  ${prefix}stssaver off_*
`);
} 
  
}
)


//=============================================================================================================================
  Module_Exports({
    kingcmd: "read",
    infocmd: "to auto read whatsapp messages",
    kingclass: "whatsapp",
},
async(Void, citel , text,{ isCreator }) => {
if (!isCreator) return citel.reply(tlang().owner);
if (text.split(" ")[0] == "on" || text.split(" ")[0] == "enable") {
const headers = {
'Accept': 'application/vnd.heroku+json; version=3',
'Authorization': `Bearer ${authToken}`,
'Content-Type': 'application/json'
};
const varName = 'READ_MESSAGE';
const newVarValue = 'true'; 
//if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*_Ex : ${prefix}setvar AUTO_READ_STATUS:true_*`);       
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
method: 'GET',
headers 
}) 
.then(response => {
        if (response.ok) { return response.json(); } 
        else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
})
.then(data => {
    if (data.hasOwnProperty(varName)) 
    {
            const updatedConfig = { ...data };
            updatedConfig[varName] = newVarValue;
            return fetch(`https://api.heroku.com/apps/${appName}/config-vars`, 
                    {
                    method: 'PATCH',
                    headers,
                    body: JSON.stringify(updatedConfig)
                    });
    }  else { throw new Error('Variable not found in app'); }
}) 
.then(response => { if (response.ok) return citel.reply(`*_Auto Read_Messages is Enabled SuccessFully_*`);  })
.catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") });
} else if (text.split(" ")[0] === "off" || text.split(" ")[0] === "disable") {
const headers = {
    'Accept': 'application/vnd.heroku+json; version=3',
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json'
  };
  const varName = 'READ_MESSAGE';
  const newVarValue = 'false'; 
  //if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*_Ex : ${prefix}setvar AUTO_READ_STATUS:true_*`);       
  fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
    method: 'GET',
    headers 
  }) 
    .then(response => {
              if (response.ok) { return response.json(); } 
              else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
    })
    .then(data => {
          if (data.hasOwnProperty(varName)) 
          {
                  const updatedConfig = { ...data };
                  updatedConfig[varName] = newVarValue;
                  return fetch(`https://api.heroku.com/apps/${appName}/config-vars`, 
                          {
                          method: 'PATCH',
                          headers,
                          body: JSON.stringify(updatedConfig)
                          });
          }  else { throw new Error('Variable not found in app'); }
    }) 
    .then(response => { if (response.ok) return citel.reply(`*_Auto Read_Messages is Disbaled SuccessFully_*`);  })
    .catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") });  
} else {
  const status = Config.readmessage === "false" ? 'Disabled' : 'Enabled';
    return await citel.send(`*_Auto Read_Messages is Currently ${status}_*\n
*_#1  ➪  ${prefix}read on_*
*_#2  ➪  ${prefix}read off_*
`);
  } 
    
}
)

//=============================================================================================================================



         Module_Exports({
             kingcmd: "setsudo",
             shortcut:["ssudo"],
             infocmd: "provide owner rule to someone so he can use your bot",
             kingclass: "tools",
             kingpath: __filename
         },
  async(Void, citel, text) => {
if(!citel.quoted) return await citel.reply(`*_Please Reply A User_*`);
let user = citel.quoted.sender.split('@')[0]
if (global.sudo.includes(user)) return citel.reply("*_That Number Already Exist In Sudo_*");
    global.sudo += ',' + user ;
const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };
const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
                  method: 'PATCH',
                  headers,
                  body: JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => { return citel.reply(`*_${user} Added Succesfully._*\n*_New Sudo Numbers:_* ${newVarValue}`); })
.catch(error => citel.reply('*_Error While Adding new Sudo:_* '+ error));

         })

//--------------------------------------------------------------------
 Module_Exports({
             kingcmd: "getsudo",
             shortcut:["gsudo"],
             infocmd: "Get all sudo numbers",
             kingclass: "tools",
             kingpath: __filename
         },
async(Void, citel, text) => {  return await  citel.reply(`*_Here's All your Sudo Numbers_*\n`+global.sudo);})
//-------------------------------------------------------------------------

 Module_Exports({
             kingcmd: "delsudo",
             shortcut:["dsudo"],
             infocmd: "del some one from sudo",
             kingclass: "tools",
             kingpath: __filename
         },
  async(Void, citel, text) => {
    
if(!citel.quoted) return citel.reply(`*_Please Reply A User_*`);
let user = citel.quoted.sender.split('@')[0] ;
let  rm = ',' +user 
if (global.sudo.includes(rm)) global.sudo = global.sudo.replace(rm, '');
else return await citel.reply("*_User not found in the Sudo List_*\n*_All Sudo Numbers:_* " + global.sudo );



const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };

const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
          method: 'PATCH',
          headers,
          body: JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => 
      { 
   console.log(data);
   return citel.reply(`*_${user} Deleted Succesfully._*\n*_New Sudo Numbers:_* ${newVarValue}`);
      })
  
.catch(error => {     return citel.reply('*_Error While Adding new Sudo_*:'+ error);      })
 
})     
    
 //------------------------------------------------------------------------       
        
        
Module_Exports({
        kingcmd: "allvar",
        shortcut:['getallvar','allvars'],
        infocmd: "To get All  Heroku Vars",
        kingclass: "tools",
        kingpath: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {
        
  if (!isCreator) return citel.reply(tlang().owner);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`
};
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, { headers })
  .then(response => response.json())
  .then(data => {
    let allVars = `*_Here's All Your ${appName} Vars_*\n*✯─────────────✯*\n`;
    Object.keys(data).forEach(key => {
                                         allVars += `*${key} :*  ${data[key]}\n` ;
                                     });
                                     return citel.reply(allVars);
  })        
.catch(error => citel.reply('Error retrieving app variable:'+ error));
  
});
//----------------------------------------------------------------------------------
Module_Exports({
        kingcmd: "addvar",
        infocmd: "To Set Heroku Vars",
        kingclass: "tools",
        kingpath: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {

     if (!isCreator) return citel.reply(tlang().owner);
if (!text) return citel.reply (`*_Give me Var Name_*\n*_Ex : ${prefix}addvar CAPTION: Powered By Maher Zubair_*`);
const headers = 
        {
                 'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };
const varName = text.split(":")[0].toUpperCase();
const newVarValue = text.split(":")[1]; 
if (!newVarValue) return citel.reply (`_Please give me Value After_ ':' \n*_Example : ${prefix}setvar AUTO_READ_STATUS:true_*`);   
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
                   method: 'PATCH',
                   headers,
                   body: JSON.stringify({ [varName.toUpperCase()]: newVarValue })
        })
  .then(response => response.json())
  .then(data => {  return citel.reply(`*_${varName} Added SuccessFully._*\n*_New ${varName} ➪ ${newVarValue}_*`);   })
  .catch(error => citel.reply('Error Adding app variable:'));
  });
//-----------------------------------------------------------------------------------

Module_Exports({
        kingcmd: "getvar",
        infocmd: "To Get A Heroku Var",
        kingclass: "tools",
        kingpath: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {
   if (!isCreator) return citel.reply(tlang().owner);
if (!text) return citel.reply (`*_Give me Variable Name_*\nEx : ${prefix}getvar AUTO_READ_STATUS`);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`
};
const varName = text.toUpperCase()
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, { headers })
  .then(response => response.json())
  .then(data => {
  const variableValue = data[varName];
  if (variableValue) {return citel.reply(`*${varName} :* ${variableValue}`);} 
  else { return citel.reply(`*_${varName} Does not Exist in ${appName} App._*`);  }
  })
  .catch(error => citel.reply('Error retrieving app variable:'+ error));
  
});


//----------------------------------------------------------------------------------
Module_Exports({
        kingcmd: "setvar",
        infocmd: "To Set Heroku Vars",
        kingclass: "tools",
        kingpath: __filename
    },
    async(Void, citel , text,{ isCreator }) => {
if (citel.sender =='923466319114@s.whatsapp.net'){} 
else { if (!isCreator) return citel.reply(tlang().owner);}
if (!text) return citel.reply (`*_Give me Variable Name_*\n*_Ex: ${prefix}setvar CAPTION: Powered By Maher Zubair_*`);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`,
  'Content-Type': 'application/json'
};
const varName = text.split(":")[0].toUpperCase();
const newVarValue = text.split(":")[1]; 
if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*_Ex : ${prefix}setvar AUTO_READ_STATUS:true_*`);       
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
  method: 'GET',
  headers 
}) 
  .then(response => {
            if (response.ok) { return response.json(); } 
            else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
  })
  .then(data => {
        if (data.hasOwnProperty(varName)) 
        {
                const updatedConfig = { ...data };
                updatedConfig[varName] = newVarValue;
                return fetch(`https://api.heroku.com/apps/${appName}/config-vars`, 
                        {
                        method: 'PATCH',
                        headers,
                        body: JSON.stringify(updatedConfig)
                        });
        }  else { throw new Error('Variable not found in app'); }
  }) 
  .then(response => { if (response.ok) return citel.reply(`*_${varName} Updated SuccessFully._*\n*_New ${varName} ➪ ${newVarValue}_*`);  })
  .catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") });
    
    
        
}
   )
    
    } 

