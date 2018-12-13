// Memanggil semua antek-antek mesin dari npm dan module.js
const gachaEngine = require('./engine.js');
const card = require("./connector")(`${__dirname}\\card-list\\`, ".json");
const chalk = require('chalk');
const settings = require("../settings.json");
const pad = (x) => x.toString().length === 1 ? `0${x}` : x.toString();

// Menentukan rate dari gacha dalam bentuk persen.
// Sengaja dijadiin constant karena nilainya ini pasti tidak akan
// bergerak sebelum anda ganti di settings.json dalam folder ini
const r_rate = parseFloat(settings.r_rate);
const sr_rate = parseFloat(settings.sr_rate);
const ssr_rate = parseFloat(settings.ssr_rate);
const event_rate = parseFloat(settings.event_rate);
const roll = settings.roll;

// Mengambil data kartu yang telah diacak.
let res = gachaEngine(card, r_rate, sr_rate, ssr_rate, event_rate, roll);

// Menghias konsol menjadi cantik, eaaa.....
let finalRes = [];
for (let i = 0; i < res.length; i++) {
    var resName = chalk.default.redBright(res[i].name);
    var resRarity = chalk.default.greenBright(res[i].rarity);
    var resCostume = res[i].costume;
    var resID = res[i].id;
    var resFranchise = chalk.default.blueBright(res[i].franchise);
    finalRes.push(`${pad(i + 1)}. You\'ve got ${resName} (${resRarity}) [${resFranchise}] [${resCostume} Costume] ID:${resID}`);
}

module.exports = finalRes.join("\n");