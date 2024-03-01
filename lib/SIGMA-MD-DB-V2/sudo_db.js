const fs = require('fs');
const path = require('path');

const dataDirectory = 'lib/SIGMA-MD-DB-V1';
const jsonFilePath = path.resolve(dataDirectory, 'sudo_db.json');

const directoryPath = path.dirname(jsonFilePath);
if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
}

function init_sudo() {
    let sudoData = { sudo: '' };
    try {
        if (fs.existsSync(jsonFilePath)) {
            sudoData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
        }
    } catch (error) {
        console.error('Error reading sudo.json:', error.message);
    }
    return sudoData;
}

function save_sudo(sudo) {
    fs.writeFileSync(jsonFilePath, JSON.stringify(sudo, null, 2));
    console.log('sudo saved');
}

module.exports = {
    init_sudo,
    save_sudo,
};
