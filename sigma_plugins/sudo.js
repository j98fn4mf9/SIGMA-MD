
/*
const { init_sudo, save_sudo } = require('../lib');

const {Module_Exports} = require('../lib'); 

global.sudo = init_sudo().sudo || '';

Module_Exports({
    kingcmd: "setsudo",
    shortcut: ["ssudo"],
    infocmd: "provide owner rule to someone so he can use your bot",
    kingclass: "tools",
    kingpath: __filename
},
    async (Void, citel, text) => {
        if (!citel.quoted) return await citel.reply(`*_Please Reply A User_*`);
        let user = citel.quoted.sender.split('@')[0];
        if (global.sudo.includes(user)) return citel.reply("*_That Number Already Exist In Sudo_*");
        global.sudo += ',' + user;

        save_sudo(global.sudo);

        return citel.reply(`*_${user} Added Successfully._*`);
    });

Module_Exports({
    kingcmd: "delsudo",
    shortcut: ["dsudo"],
    infocmd: "del someone from sudo",
    kingclass: "tools",
    kingpath: __filename
},
    async (Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`*_Please Reply A User_*`);

        let user = citel.quoted.sender.split('@')[0];
        let rm = ',' + user;

        if (global.sudo.includes(rm)) {
            global.sudo = global.sudo.replace(rm, '');
          
            save_sudo(global.sudo);

            return citel.reply(`*_${user} Deleted Successfully._*`);
        } else {
            return citel.reply("*_User not found in the Sudo List_*\n*_All Sudo Numbers:_* " + global.sudo);
        }
    });

Module_Exports({
    kingcmd: "getsudo",
    shortcut: ["gsudo"],
    infocmd: "Get all sudo numbers",
    kingclass: "tools",
    kingpath: __filename
},
    async (Void, citel, text) => {
        return await citel.reply(`*_Here's All your Sudo Numbers_*\n` + global.sudo);
    });

*/
