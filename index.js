const gachaEngine = require('./resources/module.js');
const card = require('./resources/card_data.json');
const chalk = require('chalk');

const r_rate = 90;
const sr_rate = 8.1;
const ssr_rate = 1.9;
const event_rate = 2.5;

let res = gachaEngine(card, r_rate, sr_rate, ssr_rate, event_rate, true);
let finalRes = new Array();

for (let i = 0; i < res.length; i++) {
    let resName = chalk.default.redBright(`${res[i].name}`);
    let resRarity = chalk.default.greenBright(`(${res[i].rarity})`)
    let resCostume = `${res[i].costume} Costume`
    finalRes.push(`You've got ${resName} ${resRarity} [${resCostume}]`);
}

console.log(finalRes.join('\n'));